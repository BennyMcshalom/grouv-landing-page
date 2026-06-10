const steps = [
  {
    num: 'STEP 01',
    title: 'Name your chapter',
    body: 'Tell us the spaces you\'re living and where you actually are in each — not the headline, the real situation.',
  },
  {
    num: 'STEP 02',
    title: 'We assemble your circle',
    body: 'A small group of people in the same chapter is quietly gathered around you. No follower counts, no feed to game.',
  },
  {
    num: 'STEP 03',
    title: 'Show up honestly',
    body: 'One true sentence at a time, Bonds deepen. When a chapter closes, you archive it and carry what it taught you.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="sect-pad"
      id="how"
      style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-labelledby="how-heading"
    >
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow center reveal">How it works</span>
          <h2 className="reveal d1" id="how-heading">Three honest steps in.</h2>
        </div>

        <ol className="steps">
          {steps.map((step, i) => (
            <div key={step.num} className={`step  d${i + 1} from-left`}>
              <div className="num" aria-hidden="true">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
}
