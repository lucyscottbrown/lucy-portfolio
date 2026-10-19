import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Lucy Scott Brown",
  description:
    "Who I am, how I work, and the eight years of product work behind it.",
};

export default function About() {
  return (
    <div className="max-w-[640px] mx-auto px-10 max-sm:px-5">
      <section className="py-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500 mb-4">
          About
        </p>
        <h1 className="text-[32px] font-medium tracking-tight mb-10">
          Lucy Scott Brown
        </h1>

        {/* Prose */}
        <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-gray-700">
          <p>
            Good product work starts with being honest about what the evidence
            says. That means looking at what the data and the users are actually
            telling you, rather than what the brief assumed or what would make
            the business case easier to write.
          </p>
          <p>
            This is easy to agree with and harder to do. Under timeline
            pressure, or when someone senior is invested in a hypothesis, it is
            often the first thing to be dropped, usually without anyone deciding
            to drop it. I try to keep doing it anyway, including when the
            finding is inconvenient.
          </p>
          <p>
            That approach has shaped eight years of product work in quite
            different settings. I started in an early-stage venture team at
            Shell, where I learned how customer discovery works before
            there&rsquo;s anything to sell. I then scaled Shell Remote Sense, a
            machine-learning condition monitoring product, across five markets.
            Most recently, at Clavium, I drove the product strategy for a
            blockchain analytics platform and led the go-to-market strategy for
            a treasury management product. That included months of research at
            industry conferences to find out who the real customer was before
            committing to a direction.
          </p>
          <p>
            My roles have usually stretched beyond the core product function
            into commercial strategy, positioning and delivery. I&rsquo;ve found
            that useful, because the problems that stall a product often sit
            between those areas rather than inside one of them.
          </p>
          <p>
            The work I enjoy most is on complex B2B software for technical
            users, where the product has to earn their trust before they will
            act on what it tells them. My background covers industrial IoT,
            applied AI and financial infrastructure, including payments and
            blockchain analytics. The skills carry across industries, so I
            choose roles by the problem rather than by the sector.
          </p>
          <p>
            I also care about how teams work. I&rsquo;ve line-managed product
            owners and set up a company-wide AI working group. In both cases,
            being open about what we knew and what we didn&rsquo;t helped the
            team make better decisions.
          </p>
          <p>
            Outside of work, I&rsquo;m based in Dubai. I train most days, mainly weights and reformer pilates, with padel when I can find people who take it as seriously as I do. I cook properly, drink wine I&rsquo;ve actually thought about, and dance when the occasion calls for it, which is more often than you&rsquo;d think.
          </p>
        </div>

      </section>
    </div>
  );
}
