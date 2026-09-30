import { siteConfig } from "@/src/config/site.config";

export function AttackStory() {
  const hasSource = siteConfig.officialStatementUrl.startsWith("http");
  return <section className="story section" aria-labelledby="attack-title"><div className="frame">
    <div className="story-grid">
      <div><div className="date-stamp mono">28 SEPT<br />2026<br />KYIV</div></div>
      <div className="story-copy">
        <p className="eyebrow">28 September 2026 / Kyiv</p>
        <h2 className="section-title" id="attack-title">Science was hit.</h2>
        <p className="body-lg">The Presidium building of the National Academy of Sciences of Ukraine in central Kyiv was struck during a Russian attack.</p>
        {hasSource ? <a className="source-link eyebrow" href={siteConfig.officialStatementUrl} target="_blank" rel="noopener noreferrer">Source: National Academy of Sciences of Ukraine ↗</a> : <p className="eyebrow" id="source-unavailable">Official statement link pending verification</p>}
      </div>
    </div>
    <p className="manifesto">A building can be destroyed.<span>Science cannot.</span></p>
  </div></section>;
}
