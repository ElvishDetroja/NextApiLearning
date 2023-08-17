import { NextResponse } from "next/server";
import { users } from "@/utils/db";
import axios from "axios";
import data from "./../../../../db.json";

//
//
//

export async function GET(req) {
  return NextResponse.json(data, { status: 200 });
}

//
//
//

export async function POST(req) {
  const body = await req.json();

  const allreadyAvailable = data.users.some((user) => user.id == body.id);
  if (allreadyAvailable)
    return NextResponse.json(
      { msg: "id is allready available" },
      { status: 400 }
    );

  const addedUser = await axios.post("http://localhost:7000/users", body);
  return NextResponse.json(addedUser.data, { status: 200 });
}

//
//
//