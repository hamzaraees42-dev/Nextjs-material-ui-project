import { NextResponse } from "next/server";

const BACKEND_URL = "https://grocer-connect-backend.vercel.app/api/auth/signup";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ message: "Signup failed" }, { status: 500 });
  }
}

// ✅ REQUIRED for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
