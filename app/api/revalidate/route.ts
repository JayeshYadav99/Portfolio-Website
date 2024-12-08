import { NextResponse } from "next/server";
// import { revalidateTag } from "next/headers";
import { revalidateTag } from "next/cache";
export async function POST(request: Request) {
  try {
    // Revalidate entries with a specific tag
    const { username, password } = await request.json();
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      revalidateTag("portfolio");
      return NextResponse.json({ message: "Revalidation triggered" });
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
