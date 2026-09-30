import { siteConfig } from "@/src/config/site.config";

export function DirectDonation() {
  return <section className="donate section" id="donate" aria-labelledby="donate-title"><div className="donate-inner frame"><p className="eyebrow">Don’t want to trade?</p><h2 className="section-title" id="donate-title">Donate directly.</h2><p className="body-lg">You do not need to buy {siteConfig.ticker} to support reconstruction.</p><a className="button" href={siteConfig.fundraiserUrl} target="_blank" rel="noopener noreferrer">Open official fundraiser ↗</a></div></section>;
}
