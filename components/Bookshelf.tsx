"use client";

import { useState } from "react";
import type { Book } from "@/lib/books";

function Spine({
  book,
  selected,
  onSelect,
}: {
  book: Book;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className="book"
      data-selected={selected}
      aria-expanded={selected}
      aria-label={`${book.title} by ${book.author}`}
      onClick={onSelect}
      style={
        {
          "--thickness": `${book.thickness}px`,
          "--height": `${book.height}px`,
          "--cover-width": `${Math.round(book.height * 0.66)}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="book-spine"
        style={{ background: book.colour, color: book.ink }}
      >
        <span className="book-band" />
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author}</span>
        <span className="book-band" />
      </div>

      <div
        className="book-cover"
        style={{ background: book.colour, color: book.ink }}
      >
        <span className="book-cover-title">{book.title}</span>
        <span className="book-cover-author">{book.author}</span>
      </div>
    </button>
  );
}

function Shelf({
  books,
  selected,
  onSelect,
}: {
  books: Book[];
  selected: string | null;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="shelf">
      <div className="shelf-row">
        {books.map((book) => (
          <Spine
            key={book.slug}
            book={book}
            selected={selected === book.slug}
            onSelect={() => onSelect(book.slug)}
          />
        ))}
      </div>
      <div className="shelf-board" />
    </div>
  );
}

function Detail({ book }: { book: Book }) {
  return (
    <div className="border border-gray-200 rounded p-6 mt-8">
      <div className="flex items-start gap-4 mb-4">
        <span
          className="w-1 self-stretch rounded-full flex-shrink-0"
          style={{ background: book.colour }}
          aria-hidden
        />
        <div>
          <h3 className="text-[18px] font-medium leading-snug">{book.title}</h3>
          <p className="text-[13px] text-gray-400 mt-1">{book.author}</p>
        </div>
      </div>

      {book.fullTitle && book.fullTitle !== book.title && (
        <p className="text-[12px] italic text-gray-400 mb-4 leading-[1.5]">
          {book.fullTitle}
        </p>
      )}

      <p className="text-[14px] leading-[1.7] text-gray-600">{book.blurb}</p>

      {book.takeaway && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5] mb-3">
            What I took from it
          </p>
          <p className="text-[14px] leading-[1.7] text-gray-600">
            {book.takeaway}
          </p>
        </div>
      )}

      {book.postHook && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-3">
            I wrote about this
          </p>
          <p className="text-[14px] leading-[1.7] text-gray-500 italic">
            &ldquo;{book.postHook}&rdquo;
          </p>
          {book.postUrl && (
            <a
              href={book.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[13px] text-[#185FA5] hover:underline"
            >
              Read the post &rarr;
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Bookshelf({
  read,
  unread,
}: {
  read: Book[];
  unread: Book[];
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (slug: string) =>
    setSelected((current) => (current === slug ? null : slug));

  const selectedBook =
    [...read, ...unread].find((b) => b.slug === selected) ?? null;

  return (
    <div>
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-6">
          Read
        </p>
        <Shelf books={read} selected={selected} onSelect={toggle} />
      </section>

      <section className="mt-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-6">
          Up next
        </p>
        <Shelf books={unread} selected={selected} onSelect={toggle} />
      </section>

      {selectedBook ? (
        <Detail book={selectedBook} />
      ) : (
        <p className="text-[13px] text-gray-400 mt-8">
          Click a spine and I&rsquo;ll tell you what I made of it.
        </p>
      )}
    </div>
  );
}
