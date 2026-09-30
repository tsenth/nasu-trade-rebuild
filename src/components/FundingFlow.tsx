export function FundingFlow() {
  return <section className="flow section" aria-labelledby="flow-title"><div className="frame">
    <p className="eyebrow">Funding mechanism / The full path</p><h2 className="section-title" id="flow-title">Trace the route.</h2>
    <ol className="flow-list"><li>Trade</li><li className="arrow" aria-hidden="true">→</li><li>Developer rewards</li><li className="arrow" aria-hidden="true">→</li><li>Conversion</li><li className="arrow" aria-hidden="true">→</li><li>Official fundraiser</li></ol>
    <div className="flow-note"><strong>Every developer reward is designated for reconstruction.</strong><p>Crypto allows people who cannot easily donate in UAH to participate in the ecosystem. Developer rewards are converted before funds are sent to the linked reconstruction fundraiser. An individual trade does not directly send money to PrivatBank.</p></div>
  </div></section>;
}
