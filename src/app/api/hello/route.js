import { NextResponse } from "next/server";

// export async function GET(req, res) {
//   console.log(req);
//   return new Response(" name: 'kanan', age: 22 ");
// }

export async function GET(req, res) {
  return NextResponse.json({ name: "raman", age: 22 });
}
