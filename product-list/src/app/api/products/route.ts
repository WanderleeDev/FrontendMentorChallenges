import { NextResponse } from "next/server";
import products from "../../../../public/data.json";
import { Product } from "@/models/Product.models";

export async function GET() {
  return NextResponse.json(products as Product[], { status: 200 });
}
