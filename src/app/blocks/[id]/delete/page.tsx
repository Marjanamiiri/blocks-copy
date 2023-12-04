import { redirect } from "next/navigation";
import { db } from "@/db";

export default async function BlockDeletePage({ params }: any) {
  const block = await db.block.delete({ where: { id: parseInt(params.id) }});
  redirect('/');
}