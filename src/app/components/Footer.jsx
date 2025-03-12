import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[40vh] bg-slate-800/55 text-white flex flex-col px-16 py-8">

        <h2 className="text-lg">All rights reserved &copy; <link href='www.linkedin.com/in/franc-enemuo' target="_blank">Coderite</link> {new date().getFullYear()}</h2>

    </footer>
  )
}