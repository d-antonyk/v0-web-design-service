import { z } from "zod"

export const leadSubmissionSchema = z.object({
  name: z.string().min(1, "Please provide your name.").max(100, "Name is too long."),
  email: z
    .string()
    .min(1, "Please provide an email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please provide a phone number.")
    .max(25, "Phone number looks too long.")
    .transform((value) => value.trim()),
  message: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? "")
    .refine((value) => value.length <= 2000, {
      message: "Message should be 2000 characters or less.",
    }),
})

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>

function buildWebhookPayload(lead: LeadSubmission) {
  return {
    ...lead,
    submittedAt: new Date().toISOString(),
    source: "web",
  }
}

export async function forwardLeadToWebhook(lead: LeadSubmission) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("Lead webhook URL is not configured. Set LEAD_WEBHOOK_URL in the environment.")
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }

  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET

  if (webhookSecret) {
    headers.Authorization = `Bearer ${webhookSecret}`
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(buildWebhookPayload(lead)),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => "")
    throw new Error(
      `Lead webhook responded with ${response.status} ${response.statusText}. ${errorText ? `Response: ${errorText}` : ""}`.trim(),
    )
  }
}
