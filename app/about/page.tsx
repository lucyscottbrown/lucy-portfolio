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
            Good product work starts with being honest about what you're actually looking at. Not what you hoped the data would say, or what the brief assumed, or what would make the business case easier to write. What it actually says.
          </p>
          <p>
            That sounds obvious. In practice it's the thing that gets compromised most often, usually quietly, under timeline pressure or because someone senior is invested in their hypothesis being right. Doing it anyway, consistently, is what separates product work that holds up from product work that doesn't. Most of the job is refusing to look away from the inconvenient finding.
          </p>
          <p>
            That belief has shaped eight years of work across pretty different contexts. I started in an early-stage venture team at Shell, where I learned what real customer discovery looks like before there's anything to sell. Then I scaled a B2B IoT product across five markets. Most recently at Clavium I led GTM for a treasury management platform, and spent months at industry conferences testing assumptions about who the real customer was before committing to a direction. Different industries, but the work rhymes.
          </p>
          <p>
            The through-line is that I've rarely sat neatly inside a product function. The work has always pulled across commercial strategy, positioning, how the thing gets built, and how it gets talked about. I used to think I should pick a lane. Actually, I think the interesting work happens in the joins between those things, where the gaps tend to be and where nobody's really watching.
          </p>
          <p>
            Technically, my deepest domain is digital assets and financial infrastructure. I understand the regulatory complexity, the institutional buyer, and the genuine technical challenges, things like tracing transactions through smart contracts or building governance for organisations that haven't yet figured out what governance they need. I've worked in enough different contexts to know the underlying skills transfer, and at this point I'm more interested in the right problem than the familiar one.
          </p>
          <p>
            I also care about how teams work, not just what they produce. I've managed product owners, run AI working groups, and coached early-stage founders. The thing that moved things forward in all of those was the same: being clear about what you know, honest about what you don't, and building the conditions for other people to do good work.
          </p>
          <p>
            Outside of work, I'm based in Dubai. I train most days, mainly weights and reformer pilates, with padel when I can find people who take it as seriously as I do. I cook properly, drink wine I've actually thought about, and dance when the occasion calls for it, which is more often than you'd think.
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
