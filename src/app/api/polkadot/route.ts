import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let response = await fetch(
    `https://polkadot-public-sidecar.parity-chains.parity.io/accounts/${await request.text()}/validate`
  );
  if (response.status != 200) return NextResponse.json({}, { status: 400 });
  let data = await response.json();
  return NextResponse.json(data, { status: 200 });
}
