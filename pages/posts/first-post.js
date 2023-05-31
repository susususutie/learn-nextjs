import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className="title">
        Read <Link href="/">Home</Link>
      </h1>
    </>
  );
}
