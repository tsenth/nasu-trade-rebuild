"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/src/config/site.config";
import { ContractAddress } from "./ContractAddress";

export function TokenDialog() {
  const chartReady = Boolean(siteConfig.chartEmbedUrl);

  return <Dialog>
    <DialogTrigger asChild><button className="button button-glass" type="button">Token &amp; chart</button></DialogTrigger>
    <DialogContent className="token-dialog max-h-[92svh] max-w-[min(980px,calc(100%-2rem))] overflow-y-auto rounded-none border-[#282a24] bg-[#f2efe7] p-0 text-[#171814] shadow-2xl">
      <DialogHeader className="token-dialog-head">
        <p className="choice-label">{siteConfig.ticker} · {siteConfig.chainName}</p>
        <DialogTitle className="token-dialog-title">Token overview</DialogTitle>
        <DialogDescription className="token-dialog-description">Verified market information will appear here only after the contract and chart source are configured.</DialogDescription>
      </DialogHeader>
      <div className="chart-window">
        {chartReady ? <iframe src={siteConfig.chartEmbedUrl!} title={`${siteConfig.ticker} token chart`} loading="lazy" referrerPolicy="no-referrer" /> : <div className="chart-empty"><span>Chart</span><strong>Awaiting verified market source</strong><p>No price or trading data is fabricated.</p></div>}
      </div>
      <div className="token-dialog-contract">
        <div><p className="choice-label">Contract address</p><p>Verify the address before interacting with any crypto asset.</p></div>
        <ContractAddress />
      </div>
    </DialogContent>
  </Dialog>;
}
