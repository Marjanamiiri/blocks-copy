"use server";

export async function createBlock(formData: FormData) {
  // Get the data out of formData
  const title = formData.get("title") as string;
  const tag = formData.get("tag") as string;
  const code = formData.get("code") as string;

  // Create a new block in our database using prisma
  await db.block.create({ data: { title, tag, code } });
  // Redirect the user back to the home page
  redirect("/");
}
