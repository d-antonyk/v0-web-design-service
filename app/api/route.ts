import { NextRequest, NextResponse } from "next/server"

const FORM_REACTOR_ID =
  "FRT472ABB2C5B9B141ACEA0F19E03B0B316EE773F31035691C7143E3CE8B67C5C60"
const CTM_KEY = "b0zLu-Svajsxb1LhMkDySkdMHR70qrNG364LfNQo9nuPv2RB"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body?.caller_name || !body?.phone_number) {
      return NextResponse.json({ status: "error", text: "Name and phone are required" }, { status: 400 })
    }

    const form = new FormData()
    form.append("caller_name", String(body.caller_name))
    form.append("phone_number", String(body.phone_number))
    form.append("country_code", "1")

    if (body.email) form.append("email", String(body.email))
    // Эти поля специфичны для GMB, но не помешают
    if (body.pickup) form.append("custom_fields[pickup]", String(body.pickup))
    if (body.dropoff) form.append("custom_fields[dropoff]", String(body.dropoff))
    if (body.date) form.append("custom_fields[date]", String(body.date))
    if (body.moveType) form.append("custom_fields[move_type]", String(body.moveType))

    // Добавляем сообщение из формы
    if (body.message) form.append("custom_fields[message]", String(body.message))


    if (body.gclid) form.append("paid_attribution[gclid]", String(body.gclid))
    if (body.gbraid) form.append("paid_attribution[gbraid]", String(body.gbraid))
    if (body.utm_source) form.append("paid_attribution[source]", String(body.utm_source))
    if (body.utm_medium) form.append("paid_attribution[medium]", String(body.utm_medium))
    if (body.utm_campaign) form.append("paid_attribution[campaign_id]", String(body.utm_campaign))
    if (body.ctm_session_id) form.append("paid_attribution[session_id]", String(body.ctm_session_id))
    if (body.embed_url) form.append("custom_fields[embed_url]", String(body.embed_url))

    const url = `https://api.calltrackingmetrics.com/api/v1/formreactor/${FORM_REACTOR_ID}?key=${CTM_KEY}`
    const upstream = await fetch(url, { method: "POST", body: form })
    const text = await upstream.text()

    try {
      const json = JSON.parse(text)
      return NextResponse.json(json, { status: upstream.status })
    } catch {
      return NextResponse.json({ status: upstream.ok ? "success" : "error", text }, { status: upstream.status })
    }
  } catch (e: any) {
    return NextResponse.json({ status: "error", text: e?.message || "Upstream error" }, { status: 502 })
  }
}