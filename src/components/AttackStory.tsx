import { siteConfig } from "@/src/config/site.config";

export function AttackStory() {
  const sourceReady = siteConfig.officialStatementUrl.startsWith("http");
  return <section className="story section" id="story" aria-labelledby="story-title"><div className="frame">
    <header className="story-intro"><p className="kicker">What happened</p><h2 id="story-title">An attack on a place built for knowledge.</h2><div className="story-columns"><p>The Presidium building of the National Academy of Sciences of Ukraine stands in central Kyiv. It is part of the institutional fabric that supports Ukrainian research, scholarship, and scientific life.</p><p>On September 28, 2026, the building was struck during a Russian attack and damaged. The photographs record both the destruction and the people caught inside it—a human event, not an abstract loss of architecture.</p></div></header>
    <figure className="photo photo-wide"><img src="/media/people-escaping.jpg" alt="People outside the damaged building as smoke and fire rise behind it" width="1200" height="770" loading="lazy" /><figcaption>People leave the area as the building burns. Documentary image supplied to the project.</figcaption></figure>
    <div className="photo-story"><figure className="photo"><img src="/media/building-damage.jpg" alt="Smoke pouring from the damaged Presidium building in Kyiv" width="1194" height="796" loading="lazy" /><figcaption>Damage to the Presidium building, Kyiv. Documentary image supplied to the project.</figcaption></figure><div className="human-copy"><p className="kicker">Why it matters</p><h3>Science is infrastructure. It is also people.</h3><p>Institutions like this preserve knowledge, coordinate research, and sustain generations of scientific work. Reconstruction is about restoring the physical place where that work can continue—and supporting the people who depend on it.</p></div></div>
    <div className="source-row">{sourceReady ? <a href={siteConfig.officialStatementUrl} target="_blank" rel="noopener noreferrer">Official statement — National Academy of Sciences of Ukraine ↗</a> : <span>Official statement link pending verification</span>}</div>
  </div></section>;
}
