import type { Metadata } from "next";
import Bookshelf from "@/components/Bookshelf";
import { readBooks, unreadBooks } from "@/lib/books";

export const metadata: Metadata = {
  title: "Bookshelf - Lucy Scott Brown",
  description:
    "What I'm reading, what I took from it, and what it turned into.",
};

export default function BookshelfPage() {
  return (
    <div className="max-w-[720px] mx-auto px-10">
      <section className="py-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-4">
          The wider lens
        </p>
        <h1 className="text-[32px] font-medium tracking-tight mb-3">
          Bookshelf
        </h1>
        <div className="text-[15px] leading-[1.75] text-gray-500 max-w-[480px] flex flex-col gap-4">
          <p>
            Most of the books that change how I think about product aren&rsquo;t
            product books.
          </p>
          <p>
            So this is what&rsquo;s on the shelf right now - what I took from
            each one, and where it turned into something I ended up writing
            about.
          </p>
          <p>
            The &ldquo;up next&rdquo; pile is a bit more aspirational than
            I&rsquo;d like it to be...
          </p>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-12 pb-20">
        <Bookshelf read={readBooks} unread={unreadBooks} />
      </section>
    </div>
  );
}
