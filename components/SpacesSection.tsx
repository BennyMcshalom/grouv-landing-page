import { SPACES } from '@/lib/data';
import { SPACE_ICONS } from '@/lib/icons';

export default function SpacesSection() {
  return (
    <section className="sect-pad" id="spaces" aria-labelledby="spaces-heading">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow center reveal">The eight Spaces</span>
          <h2 className="reveal d1" id="spaces-heading">
            Pick the <em>chapters</em> you&#39;re living.
          </h2>
          <p className="reveal d2">
            You hold up to four at once. Grouv places you alongside people in the same one —
            not the whole internet.
          </p>
        </div>

        <div className="spaces-grid" role="list">
          {SPACES.map((space, i) => {
            const Icon = SPACE_ICONS[space.name];
            return (
              <article
                key={space.name}
                className={`space-card reveal d${(i % 4) + 1} scale`}
                role="listitem"
              >
                <div className="swatch" style={{ background: space.color }} aria-hidden="true">
                  {Icon && <Icon size={22} strokeWidth={1.7} />}
                </div>
                <h3>{space.name}</h3>
                <p>{space.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
