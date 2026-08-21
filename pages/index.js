import '../styles/globals.css';

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div>
          <h1>TRUSTFX AI TRADING TERMINAL</h1>
          <span className="demo-badge">DEMO / MOCK DATA</span>
        </div>
        <div className="status">● MARKET SYSTEM ONLINE</div>
      </header>

      <section className="dashboard">
        <aside className="panel watchlist">
          <h2>WATCHLIST</h2>

          <div className="symbol active">
            <span>XAUUSD</span>
            <span>GOLD</span>
          </div>

          <div className="symbol">
            <span>EURUSD</span>
            <span>EUR / USD</span>
          </div>

          <div className="symbol">
            <span>GBPUSD</span>
            <span>GBP / USD</span>
          </div>

          <div className="symbol">
            <span>USDJPY</span>
            <span>USD / JPY</span>
          </div>
        </aside>

        <section className="panel chart-panel">
          <div className="chart-header">
            <div>
              <h2>XAUUSD</h2>
              <p>GOLD / US DOLLAR</p>
            </div>

            <div className="timeframes">
              <button>M5</button>
              <button className="selected">M15</button>
              <button>H1</button>
              <button>H4</button>
            </div>
          </div>

          <div className="chart-placeholder">
            <div className="chart-grid">
              <span>CHART ENGINE</span>
              <strong>DEMO MARKET DATA</strong>
              <small>Real market-data integration will be added in a later phase.</small>
            </div>
          </div>
        </section>

        <aside className="right-column">
          <div className="panel">
            <h2>AI ANALYSIS</h2>
            <span className="demo-badge">DEMO</span>

            <div className="analysis">
              <p><strong>Market:</strong> XAUUSD</p>
              <p><strong>Timeframe:</strong> M15</p>
              <p><strong>Bias:</strong> Waiting for analysis</p>
              <p><strong>Signal:</strong> No active signal</p>
            </div>
          </div>

          <div className="panel">
            <h2>RISK MANAGEMENT</h2>

            <div className="risk-row">
              <span>Account</span>
              <strong>$100,000 DEMO</strong>
            </div>

            <div className="risk-row">
              <span>Risk / Trade</span>
              <strong>1%</strong>
            </div>

            <div className="risk-row">
              <span>Open P/L</span>
              <strong>$0.00</strong>
            </div>
          </div>
        </aside>
      </section>

      <footer>
        TRUSTFX AI TRADING TERMINAL • PHASE 1 • DEMO / MOCK DATA
      </footer>
    </main>
  );
}
