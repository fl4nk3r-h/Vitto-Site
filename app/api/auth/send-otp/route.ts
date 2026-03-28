import { NextRequest, NextResponse } from 'next/server';

// Mock OTP store (in production, use MongoDB)
const otpStore: Record<string, { otp: string; expiresAt: number }> = {};

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = generateOTP();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    // Store OTP (in production, use MongoDB with TTL index)
    otpStore[email] = { otp, expiresAt };

    console.log(`[v0] OTP sent to ${email}: ${otp} (expires at ${new Date(expiresAt).toISOString()})`);

    // In production, send email with OTP
    // await sendOTPEmail(email, otp);

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      // For development only: remove in production
      ...(process.env.NODE_ENV === 'development' && { otp })
    });
  } catch (error) {
    console.error('[v0] Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}

// Export for use in verify-otp
export function getStoredOTP(email: string): string | null {
  const record = otpStore[email];
  if (!record) return null;

  // Check expiration
  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return null;
  }

  return record.otp;
}

export function clearOTP(email: string) {
  delete otpStore[email];
}
