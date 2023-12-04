import { db } from "@/db";

interface BlockEditProps {
  params: {
    id: string;
  };
}
export default async function BlockEditPage({ params }: BlockEditProps) {
  const block = await db.block.findFirst({
    where: { id: parseInt(params.id) },
  });
  return <p>Editing block {id}</p>;
}
