import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex h-full grow flex-col items-center justify-center space-y-4">
      <h1 className="font-serif text-4xl">Not Found</h1>
      <p>Could not find requested resource</p>
      <Link className="rounded bg-gray-800 px-2 py-1 text-white" href="/">
        Return Home
      </Link>
    </div>
  );
}
