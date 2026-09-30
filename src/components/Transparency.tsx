import type { DonationData } from "@/src/lib/donations/types";
import { siteConfig } from "@/src/config/site.config";
import { ContractAddress } from "./ContractAddress";

function amount(value: number | null, currency: string | null) {
  if (value === null || !currency) return null;
  return new Intl.NumberFormat("en", { style: "currency", currency, maximumFractionDigits: 2 }).format(value);
}

export function Transparency({ data }: { data: DonationData }) {
  const total = amount(data.totalDonated, data.currency);
  const latest = data.latestTransfer ? `${data.latestTransfer.amount.toLocaleString("en")} ${data.latestTransfer.currency} / ${data.latestTransfer.date}` : null;
  return <section className="transparency section" id="transparency" aria-labelledby="transparency-title"><div className="frame">
    <div className="transparency-top"><div><p className="eyebrow">Public record</p><h2 className="section-title" id="transparency-title">Transparency,<br />not promises.</h2></div><p className="eyebrow status">{data.source === "unavailable" ? "Verified data not yet connected" : `${data.source} data`}</p></div>
    <dl className="ledger">
      <div className="ledger-row"><dt className="eyebrow">Total donated</dt><dd className={`ledger-value ${total ? "" : "muted"}`}>{total ?? "Awaiting first verified transfer"}</dd></div>
      <div className="ledger-row"><dt className="eyebrow">Latest transfer</dt><dd className={`ledger-value ${latest ? "" : "muted"}`}>{latest ?? "—"}</dd></div>
      <div className="ledger-row"><dt className="eyebrow">Developer rewards</dt><dd className="ledger-value">{siteConfig.developerRewards} designated</dd></div>
      <div className="ledger-row"><dt className="eyebrow">Built on</dt><dd className="ledger-value">{siteConfig.chainName}</dd></div>
      <div className="ledger-row"><dt className="eyebrow">{siteConfig.ticker} contract</dt><dd><ContractAddress /></dd></div>
    </dl>
    <p className="ledger-note mono">Figures appear only after a transfer can be verified. Manual entries are never represented as live data. No fundraising total is inferred from token activity.</p>
  </div></section>;
}
