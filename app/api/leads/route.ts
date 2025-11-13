import { NextResponse } from "next/server"
import { ZodError } from "zod"

import { forwardLeadToWebhook, leadSubmissionSchema } from "@/lib/leads"

const GENERIC_ERROR_MESSAGE = "We couldn't submit your request. Please try again later."

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't read your submission. Please try again.",
      },
      { status: 400 },
    )
  }

  const parsedLead = leadSubmissionSchema.safeParse(body)

  if (!parsedLead.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please double-check the highlighted fields.",
        errors: parsedLead.error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  try {
    await forwardLeadToWebhook(parsedLead.data)
  } catch (error) {
    console.error("Lead submission failed", error)

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error && error.message ? error.message : GENERIC_ERROR_MESSAGE,
      },
      { status: 500 },
    )
  }

  return NextResponse.json({ success: true })
}
