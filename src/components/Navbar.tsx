import { siteConfig } from "@/src/config/site.config";

export function Navbar() {
  return <nav className="nav" aria-label="Primary navigation">
    <a className="wordmark" href="#top" aria-label="NASU home">{siteConfig.projectName}<span>{siteConfig.ticker}</span></a>
    <div className="nav-links mono"><a href="#mission">MISSION</a><a href="#transparency">TRANSPARENCY</a><a href="#donate">DONATE</a></div>
  </nav>;
}
