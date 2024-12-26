import { db } from "@/db";
import Link from "next/link";
import { Key } from "react";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map(
    (snippet: {
      id: Key | null | undefined | string;
      title: number | null | undefined | string | boolean;
      code: number | null | undefined | string | boolean;
    }) => {
      return (
        <Link
          key={snippet.id}
          href={`/snippets/${snippet.id}`}
          className="flex justify-between items-center p-2 border rounded"
        >
          <div>{snippet.title}</div>
          <div>{snippet.code}</div>
          <div>View</div>
        </Link>
      );
    }
  );
  return (
    <div>
      <div className="flex justify-between m-2 items-center">
        <h1 className="text-xl font-bold"> Snippets </h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderSnippets}</div>
    </div>
  );
}
