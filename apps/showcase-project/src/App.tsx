const features = [
  {
    title: 'Smart Mood Engine',
    body:
      'A conversational agent that curates activities based on emotional state, calendar load, and daylight availability.',
  },
  {
    title: 'Signal-Aware Planner',
    body:
      'Streams live weather, mobility, and commute signals to keep recommendations realistic and easy to follow.',
  },
  {
    title: 'Shareable Stories',
    body:
      'Auto-builds recap cards you can drop into your portfolio or socials to document how the idea evolved.',
  },
];

const milestones = [
  ['Week 1', 'Problem framing, user interviews, North Star metric.'],
  ['Week 2', 'Prototyping decision graphs + hooking into weather + calendar APIs.'],
  ['Week 3', 'UX polish, edge-case handling, launch checklist + retro.'],
];

const stack = ['React 18', 'Typescript', 'Vite', 'Framer Motion', 'Tailwind via UnoCSS', 'Supabase Edge'];

export default function ShowcaseProject(): JSX.Element {
  return (
    <div className="shell">
      <header className="hero">
        <p className="eyebrow">Project Drop · June 2025</p>
        <h1>LaunchPad — a calmer way to plan personal experiments</h1>
        <p className="lede">
          LaunchPad helps me test lifestyle ideas faster. It watches my time, energy, and routines, then
          curates one action each day so momentum never stalls.
        </p>
        <div className="cta-row">
          <a className="primary" href="https://github.com/jatotheson" target="_blank" rel="noreferrer">
            View source
          </a>
          <a className="ghost" href="https://jatotheson.github.io" target="_blank" rel="noreferrer">
            Back to portfolio
          </a>
        </div>
      </header>

      <section className="card-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>

      <section className="spotlight">
        <div>
          <p className="eyebrow">Milestones</p>
          <h2>Three sprints to MVP</h2>
          <ul>
            {milestones.map(([title, body]) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="metrics">
          <p className="eyebrow">Launch metrics</p>
          <div>
            <strong>92%</strong>
            <span>setup completion</span>
          </div>
          <div>
            <strong>37 hrs</strong>
            <span>time to insight</span>
          </div>
          <div>
            <strong>12</strong>
            <span>scenarios automated</span>
          </div>
        </div>
      </section>

      <section className="card stack">
        <p className="eyebrow">Build stack</p>
        <h2>Under the hood</h2>
        <ul>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
