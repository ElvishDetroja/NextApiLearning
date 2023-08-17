import { NextResponse } from "next/server";

export async function GET(req, content) {
  //
  const all = content.params.all;
  return NextResponse.json(all, { status: 200 });
}