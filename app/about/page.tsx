export default function About() {
  return (
    <div className="max-w-[640px] mx-auto px-10">
      <section className="py-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-4">
          About
        </p>
        <h1 className="text-[32px] font-medium tracking-tight mb-10">
          Lucy Scott Brown
        </h1>

        {/* Prose */}
        <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-gray-700">
          <p>
            Good product work starts with being honest about what you're
            actually looking at.
          </p>
          <p>
            Not what you hoped the data would say, or what the brief assumed,
            or what would make the business case easier to write. What it
            actually says. That sounds obvious, but in practice it's the thing
            that gets compromised most often — by timelines, by internal
            pressure, by the discomfort of telling people their hypothesis is
            wrong. I've found that doing it anyway, consistently, is what
            separates product work that holds up from product work that doesn't.
          </p>
          <p>
            That belief has shaped how I've worked across eight years in product
            — at Shell, where I was part of an early-stage venture team and
            learned what real customer discovery looks like before there's
            anything to sell; through scaling a B2B IoT product across five
            global markets; and most recently at Clavium, where I led GTM
            strategy for a treasury management platform and spent months at
            industry conferences testing assumptions about who the real customer
            was before committing to a direction.
          </p>
          <p>
            The through-line across all of it has been working across the whole
            picture. I've rarely sat neatly inside a product function — the work
            has always pulled across commercial strategy, positioning, how the
            thing gets built, and how it gets talked about. I've come to think
            that's actually where the interesting and important work happens: in
            the joins between those things, where the gaps tend to be.
          </p>
          <p>
            Technically, my deepest domain is digital assets and financial
            infrastructure. I understand the regulatory complexity, the
            institutional buyer, and the genuine technical challenges — things
            like tracing transactions through smart contracts, or building
            governance structures for organisations that aren't sure yet what
            governance they need. But I've worked in enough different contexts
            to know the skills transfer, and I'm more interested in the right
            problem than the familiar one.
          </p>
          <p>
            I also care about how teams work, not just what they produce. I've
            managed product owners, run AI working groups, and coached
            early-stage founders — and in all of those situations the thing that
            moved things forward was the same: being clear about what you know,
            honest about what you don't, and building the conditions for other
            people to do good work.
          </p>
          <p>
            Outside of work, I'm based in Dubai. I founded a fashion brand for
            petite women (LacunaFit) that ran for four years and taught me more
            about customer relationships, operations, and the reality of running
            something than most things I've done — and I think about that
            experience more than you might expect when I'm doing product work in
            very different contexts.
          </p>
        </div>

        {/* Additional items */}
        <div className="mt-14 pt-10 border-t border-gray-200 grid grid-cols-3 gap-6">
          {[
            { label: "Speaking", content: "Link to be added" },
            { label: "Writing", content: "Link to be added" },
            { label: "CV", content: "Link to be added" },
          ].map(({ label, content }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                {label}
              </span>
              <span className="text-[13px] text-gray-400">{content}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex gap-4 text-[14px]">
            <a
              href="mailto:lucyscottbrown@gmail.com"
              className="text-[#185FA5] hover:underline"
            >
              lucyscottbrown@gmail.com
            </a>
            <span className="text-gray-300">·</span>
            <a
              href="https://www.linkedin.com/in/lucyscottbrown"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#185FA5] hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
