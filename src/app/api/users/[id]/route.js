import { NextResponse } from "next/server";
import data from "./../../../../../db.json";
import axios from "axios";

//
//
//

export async function GET(req, content) {
  const id = content.params.id;

  const user = data.users.find((user) => user.id == id);

  if (user) return NextResponse.json(user, { status: 200 });

  return NextResponse.json({ message: "user not found" }, { status: 400 });
}

//
//
//

export async function PUT(req, content) {
  const id = content.params.id;
  const body = await req.json();

  const user = data.users.find((user) => user.id == id);

  if (user) {
    const updateUser = await axios.put(
      `http://localhost:7000/users/${id}`,
      body
    );
    return NextResponse.json(updateUser.data, { status: 200 });
  }

  return NextResponse.json({ message: "user not found" }, { status: 400 });
}

//
//
//

export async function DELETE(req, content) {
  const id = content.params.id;

  const user = data.users.find((user) => user.id == id);

  if (user) {
    await axios.delete(`http://localhost:7000/users/${id}`);
    return NextResponse.json({ status: 200, message: "user deleted" });
  }

  return NextResponse.json({ message: "user not found" }, { status: 400 });
}