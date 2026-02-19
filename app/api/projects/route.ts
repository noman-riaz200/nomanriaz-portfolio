import { NextResponse } from 'next/server'
import { projects } from '@/lib/data'

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ success: true, data: body })
}
