import { NextResponse } from "next/server";
import { findByProduct } from "@/querys/findbyProduct.query";
import { ProductTranslation } from "@/models/Product.models";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (!params.id) {
    return NextResponse.json({ message: "No id provided" }, { status: 400 });
  }

  const { data, error } = await findByProduct<ProductTranslation>(params.id);

  if (error) {
    return NextResponse.json({ message: error }, { status: 404 });
  }

  return NextResponse.json({ data, error }, { status: 200 });
}
