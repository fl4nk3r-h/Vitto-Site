import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from '../auth/verify-otp/route';

// Mock leads database (in production, use PostgreSQL)
const leadsDatabase: Record<string, any> = {};

interface Lead {
  id: string;
  email: string;
  institutionName: string;
  institutionType: string;
  city: string;
  phoneNumber: string;
  loanBookSize: string;
  createdAt: string;
}

// Middleware to verify authorization
function getAuthEmail(request: NextRequest): string | null {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.slice(7);
  return verifySessionToken(token);
}

export async function POST(request: NextRequest) {
  try {
    // Verify authorization
    const email = getAuthEmail(request);
    if (!email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validation
    const { institutionName, institutionType, city, phoneNumber, loanBookSize } = body;

    if (!institutionName || !institutionType || !city || !phoneNumber || !loanBookSize) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create lead
    const leadId = `lead_${Date.now()}`;
    const lead: Lead = {
      id: leadId,
      email,
      institutionName,
      institutionType,
      city,
      phoneNumber,
      loanBookSize,
      createdAt: new Date().toISOString()
    };

    // Store lead (in production, use PostgreSQL)
    leadsDatabase[leadId] = lead;

    console.log(`[v0] Lead created: ${leadId}`, lead);

    return NextResponse.json({
      success: true,
      lead,
      message: 'Account created successfully'
    });
  } catch (error) {
    console.error('[v0] Error creating lead:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify authorization
    const email = getAuthEmail(request);
    if (!email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get lead ID from query params
    const searchParams = request.nextUrl.searchParams;
    const leadId = searchParams.get('id');

    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    // Fetch lead
    const lead = leadsDatabase[leadId];

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Verify ownership
    if (lead.email !== email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    return NextResponse.json(lead);
  } catch (error) {
    console.error('[v0] Error fetching lead:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lead' },
      { status: 500 }
    );
  }
}

// Export for testing
export function getLeadsDatabase() {
  return leadsDatabase;
}
