import { NextResponse } from "next/server";
import { ProductTranslation } from "@/models/Product.models";
import { getAllProducts } from "@/querys/getAllProducts";

export async function GET() {
  const { data, error } = await getAllProducts<ProductTranslation>();

  if (error) {
    return NextResponse.json({ message: error }, { status: 404 });
  }

  return NextResponse.json({ data, error }, { status: 200 });
}
