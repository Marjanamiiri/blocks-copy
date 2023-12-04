import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlockShowPageProps {
  params: { id: string };
}

export default async function BlockShowPage({ params }: BlockShowPageProps) {
  const block = await db.block.findFirst({
    where: { id: parseInt(params.id) },
  });

  if (!block) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{block.title}
        <span className="inline-flex items-center rounded-md bg-pink-50 ml-2 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">{block.tag}</span>
        </h1>
        <div className="flex gap-4">
          <Link
            className="p-2 border rounded"
            href={`/blocks/${block.id}/edit`}>Edit</Link>
          <button className="p-2 border rounded">Delete</button>
          <Link href="/page.tsx" className="border p-2 rounded">
          back
        </Link>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}
