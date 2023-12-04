import { db } from "@/db";
import { redirect } from "next/navigation";

export default function BlockCreatePage() {
  async function createBlock(formData: FormData) {
    "use server";
    // Get the data out of formData
    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const code = formData.get("code") as string;

    // Create a new block in our database using prisma
    await db.block.create({ data: { title, tag, code } });
    // Redirect the user back to the home page
    redirect("/");
  }
  return (
    <form action={createBlock}>
      <h3 className="font-bold m-3">Create a Block</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="tag">
            Tag
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="tag"
            id="tag"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
          />
        </div>
        <button type="submit" className="rounded p-2 text-white bg-blue-500">
          Create
        </button>
      </div>
    </form>
  );
}
