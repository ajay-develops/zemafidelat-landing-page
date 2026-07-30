import { isSupabaseConfigured, getSupabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  const name =
    typeof body === "object" &&
    body !== null &&
    "name" in body &&
    typeof (body as { name: unknown }).name === "string"
      ? (body as { name: string }).name.trim().replace(/\s+/g, " ")
      : "";

  // Name is optional; reject only if provided but invalid.
  if (name.length === 1) {
    return NextResponse.json(
      { error: "Please enter a fuller name, or leave it blank." },
      { status: 400 }
    );
  }

  if (name.length > MAX_NAME_LENGTH) {
    return NextResponse.json(
      { error: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      {
        error:
          "Waitlist storage is still being set up. Please try again shortly.",
      },
      { status: 503 }
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("waitlist").insert({
      email,
      name: name || null,
    });

    if (error) {
      // Unique violation — treat as success so we don't leak who signed up.
      if (error.code === "23505") {
        return NextResponse.json({
          ok: true,
          message:
            "You're already on the list — we'll email you when the APK is ready.",
        });
      }

      console.error("Waitlist insert failed:", error.message);
      return NextResponse.json(
        { error: "Something went wrong. Please try again in a moment." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You're on the list — we'll email you when the APK is ready.",
    });
  } catch (error) {
    console.error("Waitlist unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
