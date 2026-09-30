"use client";

import { useState } from "react";
import { siteConfig } from "@/src/config/site.config";

export function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const isConfigured = siteConfig.contractAddress !== "CONTRACT_ADDRESS";
  async function copyAddress() {
    if (!isConfigured) return;
    try { await navigator.clipboard.writeText(siteConfig.contractAddress); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  }
  return <div className="contract-wrap">
    <span className={`ledger-value contract ${isConfigured ? "" : "muted"}`}>{siteConfig.contractAddress}</span>
    <button className="copy-button" type="button" onClick={copyAddress} disabled={!isConfigured} aria-label={isConfigured ? "Copy NASU contract address" : "Contract address not configured"}>{copied ? "Copied" : "Copy"}</button>
    <span className="sr-only" aria-live="polite">{copied ? "Contract address copied" : ""}</span>
  </div>;
}
