import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
export async function POST(req: Request) {
  const formData = await req.formData()
  const payload = Object.fromEntries(formData.entries())
  console.log('New contact:', payload)
  return NextResponse.json({ ok: true })
}
