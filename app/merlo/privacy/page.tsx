import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merlo privacy policy - Lucy Scott Brown",
  description:
    "How Merlo, an app for learning about wine, handles your data: what stays on your phone, the optional usage data and the wine lookup.",
};

const contactEmail = "lucyscottbrown@gmail.com";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-gray-200 py-10">
      <h2 className="text-[18px] font-medium mb-4">{title}</h2>
      <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-gray-700">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-gray-300">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Email() {
  return (
    <a
      href={`mailto:${contactEmail}`}
      className="text-[#185FA5] hover:underline"
    >
      {contactEmail}
    </a>
  );
}

export default function MerloPrivacyPage() {
  return (
    <div className="max-w-[720px] mx-auto px-10 max-sm:px-5">
      <section className="py-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500 mb-4">
          Merlo
        </p>
        <h1 className="text-[32px] font-medium tracking-tight mb-3">
          Privacy policy
        </h1>
        <p className="text-[13px] text-gray-500 mb-8">
          Last updated: 3 November 2026
        </p>
        <p className="text-[15px] leading-[1.75] text-gray-700">
          Merlo is an app for learning about wine. It is made by Lucy Scott
          Brown, an individual developer in the United Kingdom (&quot;I&quot;
          and &quot;me&quot; in this policy). I am responsible for the personal
          data described here. You can contact me at <Email />.
        </p>
      </section>

      <Section title="The short version">
        <List
          items={[
            "Merlo has no accounts. Your progress, reviews, streak and tasting notes are stored only on your phone.",
            "If you agree, the app sends data on how you use it to PostHog, an analytics service, so that I can improve it. You can change your mind at any time in Settings.",
            "If you use the wine lookup, the name you type or the photo of the label you take is sent to my lookup service and to Anthropic, so that the app can identify the wine.",
            "I do not sell your data, show adverts, or use your data to target you.",
          ]}
        />
      </Section>

      <Section title="Data that stays on your phone">
        <p>
          Your lesson progress, review schedule, streak, daily goal, reminder
          time, and the tastings you log (including any notes you write) are
          stored in the app on your phone. They are not sent to me or to anyone
          else. Daily reminders are scheduled on your phone, so no server is
          involved. If you uninstall the app, this data is deleted.
        </p>
      </Section>

      <Section title="Usage data, if you agree">
        <p>
          When you first open Merlo, it asks whether you agree to share usage
          data. Nothing is sent unless you say yes. If you agree, the app
          sends:
        </p>
        <List
          items={[
            "what you do in the app, such as starting and finishing lessons, which questions you answer and whether you answer them correctly, reviews, tastings you save (but not what you wrote), and changes to your goal and reminder settings;",
            "when the app is opened and closed;",
            "a random identifier created for this installation of the app, so that I can see how use changes over time, for example whether people come back after a week;",
            "technical details about the app and your phone, such as the app version, the content version, the type of phone, the operating system version, the screen size, the language setting and the time zone.",
          ]}
        />
        <p>
          This data does not include your name, your email address, anything
          you type, or your tasting notes. It is not used to work out who you
          are.
        </p>
        <p>
          I use this data to see which lessons people find hard or leave
          part-way, whether reminders help, and whether people keep learning
          over time, so that I can fix and improve the app. My legal basis for
          this is your consent.
        </p>
        <p>
          The data is sent to PostHog, which processes it on my behalf and
          stores it in the European Union (Frankfurt, Germany). PostHog&apos;s
          settings for Merlo discard your IP address and do not work out your
          location. The data is kept for up to one year and then deleted.
        </p>
        <p>
          You can stop sharing usage data at any time in Settings, under
          &quot;Usage data&quot;. When you do, the app stops sending data and
          deletes the random identifier from your phone. If you later agree
          again, the app starts with a new identifier that is not linked to the
          old one.
        </p>
      </Section>

      <Section title="The wine lookup">
        <p>
          When you log a tasting, you can ask the app to identify a wine&apos;s
          grape and region, either by typing its name or by photographing its
          label. You can take the photo with the camera or choose one you have
          already taken. If you do, the app sends what you typed or a smaller
          copy of the photo, together with the app&apos;s own list of grapes
          and regions, to my lookup service. The app only uses the camera or
          your photos when you tap the button to do so, and only sends the one
          photo you take or choose. The lookup service is hosted by Vercel
          and sends the request to Anthropic, whose AI model identifies the
          wine. The result is sent back to your phone. Both Vercel and
          Anthropic are based in the United States.
        </p>
        <List
          items={[
            "I do not store what you type or the photo. The lookup service uses your IP address briefly to stop it being overused, and does not keep it. Vercel keeps its standard request logs for a short time.",
            "Anthropic processes the request on my behalf. Under its terms, it does not use the request to train its models, and it deletes it within 30 days, unless it needs to keep it longer to deal with misuse.",
            "My legal basis for this is my legitimate interest in providing the feature you asked to use. If you prefer not to use it, you can log the wine yourself instead.",
          ]}
        />
        <p>
          Avoid typing personal information into the wine lookup, because it
          is only meant for wine names. When you photograph a label, try to
          keep people and anything personal out of the picture.
        </p>
      </Section>

      <Section title="Transfers outside the UK">
        <p>
          PostHog stores usage data in the EU. The wine lookup sends what you
          type, or the label photo, to Vercel and Anthropic in the United
          States. These transfers
          are covered by the safeguards in each provider&apos;s data processing
          terms.
        </p>
      </Section>

      <Section title="Age">
        <p>
          Merlo is only for people who are old enough to buy alcohol where they
          live. The app asks you to confirm this before you can use it, and I
          do not knowingly collect data from anyone younger.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Under UK data protection law, you have the right to ask for a copy of
          your personal data, to have it corrected or deleted, to object to how
          it is used, and to withdraw your consent. To withdraw consent to
          usage data, use the setting in the app. For anything else, contact me
          at <Email />.
        </p>
        <p>
          Usage data is linked only to a random identifier, so I may not be
          able to find your data unless you can tell me that identifier. If I
          cannot identify your data, I will tell you.
        </p>
        <p>
          If you are unhappy with how your data is handled, you can complain to
          the Information Commissioner&apos;s Office (
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#185FA5] hover:underline"
          >
            ico.org.uk
          </a>
          ). I would appreciate the chance to put it right first.
        </p>
      </Section>

      <div className="pb-20">
        <Section title="Changes to this policy">
          <p>
            If I change how Merlo uses data, I will update this policy and the
            date at the top before the change reaches the app. If the change
            needs your consent, the app will ask you again.
          </p>
        </Section>
      </div>
    </div>
  );
}
