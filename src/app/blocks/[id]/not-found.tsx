import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Sorry, your code block was not found</h2>
      <Link href="/">Return to Blocks</Link>
    </div>
  );
}
