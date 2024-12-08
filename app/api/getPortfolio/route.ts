import { NextResponse } from "next/server";
import { dbConnect } from "../../../lib/mongoose";
import Portfolio from "../../../lib/models/Portfolio";

export async function GET() {
  try {
    await dbConnect();

    const portfolio = await Portfolio.findOne().lean();

    if (!portfolio) {
      return NextResponse.json(
        { error: "No portfolio found" },
        { status: 404 }
      );
    }
    const story = Array.isArray(portfolio)
      ? portfolio[0]?.story
      : portfolio?.story;
    return NextResponse.json({ story });
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
