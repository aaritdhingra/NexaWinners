import React from 'react';
import CrewSectionHeader from './CrewSectionHeader';
import './BountyWall.css';

const StarCompassIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 1.8 14 10l8.2 2-8.2 2L12 22.2 10 14l-8.2-2L10 10 12 1.8Z" fill="currentColor" opacity=".16" />
    <path d="M12 1.8 14 10l8.2 2-8.2 2L12 22.2 10 14l-8.2-2L10 10 12 1.8Z" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="12" cy="12" r="2.7" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const RANK_META = [
  { id: '01', subtitle: "THE GRAND LINE'S CHAMPIONS", theme: 'gold' },
  { id: '02', subtitle: 'THE RISING VOYAGERS', theme: 'silver' },
  { id: '03', subtitle: 'THE OCEAN DREAMERS', theme: 'copper' },
];

const FALLBACK_IMAGE = '/assets/luffy.png';

function MemberPoster({ member, role, img, index, theme }) {
  const ref = React.useRef(null);
  const [imageSrc, setImageSrc] = React.useState(img || FALLBACK_IMAGE);

  React.useEffect(() => setImageSrc(img || FALLBACK_IMAGE), [img]);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add/remove the same class so scrolling back up naturally reverses
        // the exact same small CSS transition. No Framer Motion / JS animation loop.
        node.classList.toggle('is-visible', entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`wanted-card wanted-card--${theme}`}
      style={{ '--card-delay': `${index * 55}ms` }}
    >
      <div className="wanted-card__pin" aria-hidden="true"><span /></div>
      <div className="wanted-card__inner">
        <div className="wanted-card__topline">
          <span>THE GRAND TREASURE</span>
          <i>✦</i>
          <span>NO. {String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className="wanted-card__wanted">WANTED</h3>

        <div className="wanted-card__portrait-wrap">
          <div className="wanted-card__portrait">
            <img
              src={imageSrc}
              alt={member || 'Crew member'}
              loading="lazy"
              decoding="async"
              onError={() => {
                if (imageSrc !== FALLBACK_IMAGE) setImageSrc(FALLBACK_IMAGE);
              }}
            />
            <div className="wanted-card__portrait-vignette" />
            <div className="wanted-card__portrait-frame" />
          </div>
        </div>

        <div className="wanted-card__divider"><span /><i>✦</i><span /></div>
        <h4 className="wanted-card__name" title={member}>{member || 'Unknown Voyager'}</h4>
        <p className="wanted-card__role">{role || 'Crew Member'}</p>

        <div className="wanted-card__bottomline">
          <span>DEAD OR ALIVE</span>
          <b>✦</b>
          <span>GRAND LINE</span>
        </div>
      </div>
    </article>
  );
}

const BountyWall = ({ winners = [] }) => {
  const top3 = [...winners]
    .sort((a, b) => (Number(a.rank) || 99) - (Number(b.rank) || 99))
    .slice(0, 3);

  if (!top3.length) return null;

  return (
    <section id="bounty-wall" className="bounty-wall">
      {/* bg3 is the only page background. No animated background layers. */}
      <div className="bounty-wall__bg" aria-hidden="true" />
      <div className="bounty-wall__shade" aria-hidden="true" />

      <div className="bounty-wall__content">
        <header className="bounty-wall__title">
          <p className="bounty-wall__eyebrow">THE GRAND TREASURE • NEXASOUL • CHAMPIONSHIP EDITION</p>
          <h2>THE THREE LEGENDARY CREWS</h2>
          <div className="bounty-wall__strapline">
            <span /><StarCompassIcon />
            <b>FOUR SOULS • ONE VISION • THE GRAND LINE</b>
            <StarCompassIcon /><span />
          </div>
          <p className="bounty-wall__hint">THE GRAND LINE'S TOP THREE • THREE CREWS • TWELVE LEGENDS</p>
        </header>

        <div className="bounty-wall__crews">
          {top3.map((team, index) => {
            const meta = RANK_META[index];
            const crewMembers = Array.isArray(team.crew) ? team.crew.slice(0, 4) : [];

            return (
              <section key={team.id || index} className={`crew-block crew-block--${meta.theme}`}>
                {index > 0 && (
                  <div className="crew-block__separator" aria-hidden="true">
                    <span /><StarCompassIcon /><span />
                  </div>
                )}

                <CrewSectionHeader
                  number={meta.id}
                  title={team.teamName || `CREW ${meta.id}`}
                  subtitle={meta.subtitle}
                  theme={meta.theme}
                />

                <div className="crew-block__meta">
                  <span>RANK {meta.id}</span><i />
                  <span>{team.bounty ? `TOTAL BOUNTY • ${team.bounty}` : 'LEGENDARY CREW'}</span><i />
                  <span>{crewMembers.length} MEMBERS</span>
                </div>

                <div className="crew-block__cards">
                  {crewMembers.map((member, memberIndex) => {
                    const memberName = typeof member === 'object' ? member.name : member;
                    const memberRole = typeof member === 'object' ? member.role : '';
                    const memberImage = typeof member === 'object' ? member.avatar : team.avatar;
                    return (
                      <MemberPoster
                        key={`${team.id || index}-${memberIndex}`}
                        member={memberName}
                        role={memberRole}
                        img={memberImage}
                        index={memberIndex}
                        theme={meta.theme}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BountyWall;
