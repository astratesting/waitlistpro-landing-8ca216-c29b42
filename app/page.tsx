const features = [
  {
    name: 'Referral-based waitlist with gamified progress bars',
    detail: 'Turn every signup into a growth loop with creator-branded milestones, share cards, and reward ladders.',
  },
  {
    name: 'Automated email sequences to nurture your audience',
    detail: 'Welcome subscribers, trigger referral nudges, and warm your list before launch day without babysitting campaigns.',
  },
  {
    name: 'Social proof widgets that convert visitors into signups',
    detail: 'Show live joins, trending creators, and launch momentum exactly when visitors are deciding to opt in.',
  },
  {
    name: 'Real-time analytics dashboard',
    detail: 'Track source quality, referral velocity, conversion dips, and launch readiness from one clean command center.',
  },
  {
    name: 'Customizable landing page builder',
    detail: 'Ship a polished waitlist page with your voice, visuals, rewards, and launch promise in minutes.',
  },
  {
    name: 'Seamless integrations with your favorite tools',
    detail: 'Sync qualified leads into Stripe, ConvertKit, Beehiiv, Notion, Zapier, HubSpot, and your launch stack.',
  },
];

const steps = [
  ['01', 'Create your waitlist in minutes', 'Pick a template, add creator-specific perks, and publish a conversion-ready page before your next post goes live.'],
  ['02', 'Share your unique referral link', 'Drop one link into your newsletter, bio, podcast notes, or community and let WaitlistPro attribute every signup.'],
  ['03', 'Watch your audience grow exponentially', 'Fans climb tiers, unlock rewards, and bring more aligned subscribers into your launch orbit.'],
];

const testimonials = [
  {
    quote: 'WaitlistPro turned my course idea into a 9,400-person launch list before I recorded module one.',
    name: 'Maya Chen',
    role: 'Design educator, StudioSignal',
  },
  {
    quote: 'The referral tiers gave my community a reason to share. We hit our podcast beta goal in six days.',
    name: 'Andre Moss',
    role: 'Creator, Founder Frequency',
  },
  {
    quote: 'I stopped duct-taping forms and spreadsheets. WaitlistPro showed which channels brought buyers, not vanity emails.',
    name: 'Lena Ortiz',
    role: 'Indie maker, Prompt Pantry',
  },
];

const tiers = [
  ['3 referrals', 'Early access invite'],
  ['10 referrals', 'Private founder Q&A'],
  ['25 referrals', 'Lifetime creator discount'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-chalk">
      <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-ink/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between gap-5">
          <a href="#hero" className="flex items-center gap-3 focus-ring rounded-full">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-violet text-lg font-black shadow-glow">W</span>
            <span className="font-display text-xl font-semibold tracking-tight">WaitlistPro</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-fog md:flex">
            <a className="transition hover:text-chalk" href="#features">Features</a>
            <a className="transition hover:text-chalk" href="#how">How It Works</a>
            <a className="transition hover:text-chalk" href="#pricing">Pricing</a>
          </div>
          <a href="#join" className="focus-ring rounded-full bg-chalk px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-coral hover:text-white">
            Join waitlist
          </a>
        </div>
      </nav>

      <section id="hero" className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-fog">
              <span className="h-2 w-2 rounded-full bg-coral shadow-coral" />
              Live launch engine for creator-led products
            </div>
            <h1 className="font-display text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              Stop guessing. <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet via-chalk to-coral">Start growing.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-fog md:text-2xl">
              WaitlistPro helps creators build hype, capture leads, and launch with momentum.
            </p>
            <form id="join" className="mt-9 flex max-w-xl flex-col gap-3 rounded-[2rem] border border-white/10 bg-white/[0.05] p-2 shadow-2xl shadow-violet/10 sm:flex-row">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="creator@yourstudio.com"
                className="focus-ring min-h-14 flex-1 rounded-full border border-transparent bg-black/30 px-5 text-base text-chalk placeholder:text-fog/70 outline-none"
              />
              <button className="focus-ring min-h-14 rounded-full bg-violet px-7 font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-coral" type="submit">
                Claim your spot
              </button>
            </form>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-fog">
              <strong className="font-display text-2xl text-chalk">12,847</strong>
              <span>creators already on the waitlist</span>
              <span className="rounded-full bg-coral/15 px-3 py-1 text-coral">+418 this week</span>
            </div>
          </div>

          <div className="float-card relative rounded-[2.5rem] border border-white/10 bg-[#11111a]/90 p-5 shadow-2xl shadow-violet/20">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-coral/30 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-violet/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-fog">Launch readiness</p>
                  <p className="font-display text-3xl font-bold">83%</p>
                </div>
                <div className="rounded-full bg-violet/15 px-4 py-2 text-sm font-bold text-violet">Trending</div>
              </div>
              <div className="space-y-5">
                {['Newsletter', 'Referral loop', 'Social widget'].map((label, index) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{label}</span>
                      <span className="text-fog">{[92, 76, 68][index]}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-violet to-coral" style={{ width: `${[92, 76, 68][index]}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {['4.8K leads', '31% share', '12 days'].map((stat) => (
                  <div key={stat} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm font-bold">
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-8">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-center md:grid-cols-3">
          <div><strong className="font-display text-4xl">50K+</strong><p className="text-fog">creators building launch lists</p></div>
          <div><strong className="font-display text-4xl">2M+</strong><p className="text-fog">signups captured</p></div>
          <div><strong className="font-display text-4xl">98%</strong><p className="text-fog">deliverability across sequences</p></div>
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.35em] text-coral">Creator growth stack</p>
            <h2 className="mt-4 font-display text-5xl font-black tracking-[-0.04em] md:text-7xl">One waitlist. Six growth levers.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article key={feature.name} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-violet/60 hover:bg-white/[0.07]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet/15 font-display text-xl font-bold text-violet group-hover:bg-coral/20 group-hover:text-coral">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-extrabold leading-tight">{feature.name}</h3>
                <p className="mt-4 leading-7 text-fog">{feature.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12">
          <h2 className="font-display text-5xl font-black tracking-[-0.04em] md:text-7xl">How it works</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(([num, title, detail]) => (
              <div key={title} className="relative rounded-[2rem] bg-ink/70 p-6">
                <span className="font-display text-6xl font-black text-white/10">{num}</span>
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 leading-7 text-fog">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="marquee-track flex w-[200%] gap-5 px-6">
          {[...testimonials, ...testimonials].map((item, index) => (
            <figure key={`${item.name}-${index}`} className="w-[28rem] shrink-0 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <blockquote className="text-xl font-semibold leading-8">“{item.quote}”</blockquote>
              <figcaption className="mt-8 text-sm text-fog"><strong className="block text-chalk">{item.name}</strong>{item.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.35em] text-violet">Referral program</p>
            <h2 className="mt-4 font-display text-5xl font-black tracking-[-0.04em] md:text-7xl">Reward fans who grow your launch.</h2>
            <p className="mt-6 text-xl leading-8 text-fog">WaitlistPro turns referrals into visible progress. Subscribers see their rank, next unlock, and exact link performance so sharing feels like a game, not a chore.</p>
          </div>
          <div className="space-y-4">
            {tiers.map(([referrals, reward], index) => (
              <div key={referrals} className="tier-glow relative rounded-[2rem] bg-ink p-[1px]">
                <div className="rounded-[2rem] bg-[#11111a] p-6">
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-fog">Tier {index + 1}</p>
                      <h3 className="mt-2 text-2xl font-black">{referrals}</h3>
                    </div>
                    <p className="text-right font-bold text-coral">{reward}</p>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet to-coral" style={{ width: `${[28, 58, 88][index]}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(108,99,255,.35),transparent_28rem),radial-gradient(circle_at_80%_40%,rgba(255,101,132,.25),transparent_24rem),#11111a] p-10 text-center shadow-glow md:p-16">
          <h2 className="font-display text-5xl font-black tracking-[-0.05em] md:text-7xl">Build demand before you build everything else.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-fog">Launch with proof, not hope. Capture your earliest fans, learn which channels work, and turn every subscriber into a distribution partner.</p>
          <a href="#join" className="focus-ring mt-9 inline-flex rounded-full bg-coral px-8 py-4 font-black text-white shadow-coral transition hover:-translate-y-1 hover:bg-violet">
            Start your WaitlistPro launch
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-fog">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p><span className="font-display text-xl text-chalk">WaitlistPro</span> — creator waitlists that compound.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#features" className="hover:text-chalk">Features</a>
            <a href="#how" className="hover:text-chalk">How It Works</a>
            <a href="#pricing" className="hover:text-chalk">Pricing</a>
            <a href="#join" className="hover:text-chalk">Join Waitlist</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
