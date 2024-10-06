import { NextResponse } from 'next/server'
import { dbConnect } from '../../../lib/mongoose'
import Portfolio from '../../../lib/models/Portfolio'

export async function GET() {
  try {
    await dbConnect()

    const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });

    if (!portfolio) {
      return NextResponse.json({ error: 'No portfolio found' }, { status: 404 })
    }

    return NextResponse.json(portfolio)
  } catch (error) {
    console.error('Failed to fetch portfolio:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 })
  }
}