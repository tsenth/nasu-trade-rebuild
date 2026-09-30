import { siteConfig } from "@/src/config/site.config";
import { Navbar } from "./Navbar";

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-label="Documentary footage from Kyiv">
      <source src={siteConfig.heroVideo} type="video/mp4" />
    </video>
    <div className="hero-shade" aria-hidden="true" />
    <Navbar />
    <div className="hero-content frame">
      <div className="hero-identity">NASU — Trade &amp; Rebuild</div>
      <h1 id="hero-title">They hit science.<br /><em>We rebuild it.</em></h1>
      <p>On September 28, 2026, the Presidium of the National Academy of Sciences of Ukraine in Kyiv was struck during a Russian attack.</p>
      <div className="hero-actions"><a className="button button-light" href="#help">Help rebuild</a><a className="text-link" href="#story">Learn what happened <span aria-hidden="true">↓</span></a></div>
    </div>
    <div className="hero-meta frame"><span>28.09.2026</span><span>Kyiv, Ukraine</span></div>
  </section>;
}
