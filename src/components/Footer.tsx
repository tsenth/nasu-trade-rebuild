import { siteConfig } from "@/src/config/site.config";

export function Footer() {
  const tradeIsExternal = siteConfig.tradeUrl.startsWith("http");
  const sourceIsExternal = siteConfig.officialStatementUrl.startsWith("http");
  return <footer className="footer"><div className="footer-grid frame"><div><p className="footer-title">NASU</p><p className="eyebrow">Trade & Rebuild</p></div><div><p className="eyebrow">{siteConfig.ticker} / {siteConfig.chainName}</p><p>Independent community initiative.<br />Not affiliated with NASU, PrivatBank, or Robinhood.</p></div><nav className="footer-links eyebrow" aria-label="Footer navigation"><a href={siteConfig.tradeUrl} {...(tradeIsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Trade</a><a href={siteConfig.fundraiserUrl} target="_blank" rel="noopener noreferrer">Donate</a><a href={sourceIsExternal ? siteConfig.officialStatementUrl : "#source-unavailable"} {...(sourceIsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Source</a></nav></div></footer>;
}
