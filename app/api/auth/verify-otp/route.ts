import { NextRequest, NextResponse } from 'next/server';
import { getStoredOTP, clearOTP } from '../send-otp/route';
import crypto from 'crypto';

// Session store (in production, use Redis or database)
const sessionStore: Record<string, { email: string; expiresAt: number }> = {};

function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    // Validation
    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    // Get stored OTP
    const storedOTP = getStoredOTP(email);

    if (!storedOTP) {
      return NextResponse.json(
        { error: 'OTP expired or not found. Please request a new one.' },
        { status: 400 }
      );
    }

    // Verify OTP
    if (otp !== storedOTP) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Clear OTP
    clearOTP(email);

    // Generate session token
    const sessionToken = generateSessionToken();
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    // Store session
    sessionStore[sessionToken] = { email, expiresAt };

    console.log(`[v0] Session created for ${email}`);

    return NextResponse.json({
      success: true,
      sessionToken,
      message: 'OTP verified successfully'
    });
  } catch (error) {
    console.error('[v0] Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}

// Helper function to verify session token
export function verifySessionToken(token: string): string | null {
  const session = sessionStore[token];

  if (!session) return null;

  // Check expiration
  if (Date.now() > session.expiresAt) {
    delete sessionStore[token];
    return null;
  }

  return session.email;
}

// Helper function to clear session
export function clearSession(token: string) {
  delete sessionStore[token];
}
