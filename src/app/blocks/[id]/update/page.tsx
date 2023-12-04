import { redirect } from "next/navigation";
import { db } from "@/db";

export default async function BlockUpdatePage({ params }: any) {
  const block = await db.block.findUnique({ where: { id: parseInt(params.id) }});

  async function updateBlock(formData: FormData) {
    "use server";

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const tag = formData.get('tag') as string;

    await db.block.update(
      { where: { id: parseInt(params.id) }},
      { data: { title, code, tag }}
    );

    redirect('/');
  }

  return (
    <form className="container mx-auto my-8" action={updateBlock}>
      <h1 className="text-xl font-bold mb-4">Update Block</h1>

      <div className="text-sm mb-4">
        <div className="flex justify-between leading-6">
          <label className="block font-medium text-gray-900" htmlFor="title">Title</label>
          <span className="text-gray-500">Required</span>
        </div>
        <div className="mt-2">
          <input type="text" name="title" id="title" value={block.title} className="block w-full border-0 rounded-md px-1.5 py-1.5 ring-inset ring-1 ring-gray-300" />
        </div>
      </div>

      <div className="text-sm mb-4">
        <div className="flex justify-between leading-6">
          <label className="block font-medium text-gray-900" htmlFor="code">Code Block</label>
          <span className="text-gray-500">Required</span>
        </div>
        <div className="mt-2">
          <textarea name="code" id="code" value={block.code} className="block w-full border-0 rounded-md px-1.5 py-1.5 ring-inset ring-1 ring-gray-300"></textarea>
        </div>
      </div>

      <div className="text-sm mb-4">
        <div className="flex justify-between leading-6">
          <label className="block font-medium text-gray-900" htmlFor="tag">Tag</label>
          <span className="text-gray-500">Optional</span>
        </div>
        <div className="mt-2">
          <input type="text" name="tag" id="tag" value={block.tag} className="block w-full border-0 rounded-md px-1.5 py-1.5 ring-inset ring-1 ring-gray-300" />
        </div>
      </div>

      <button className="bg-sky-600 rounded-md px-3 py-1.5 ml-auto font-semibold text-sm text-white">Save</button>
    </form>
  )
}