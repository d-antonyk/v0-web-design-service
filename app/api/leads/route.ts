import { NextResponse } from "next/server"
import { ZodError } from "zod"

import { forwardLeadToWebhook, leadSubmissionSchema } from "@/lib/leads"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const lead = leadSubmissionSchema.parse(body)

    await forwardLeadToWebhook(lead)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please double-check the highlighted fields.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    console.error("Lead submission failed", error)

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message || "We couldn't submit your request. Please try again later."
            : "We couldn't submit your request. Please try again later.",
      },
      { status: 500 },
    )
  }
}
