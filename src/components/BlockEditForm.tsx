"use client";
export default function BlockEditForm({ block }) {
  return <MonacoEditor defaultValue={block.code} />;
}
