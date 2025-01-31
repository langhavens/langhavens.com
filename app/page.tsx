

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Langhavens</h1>
        <div>
          <p>Building trading algorithms as a platform for personal development.</p>
        </div>
        <h2>In Development</h2>
        <div>
          <p>Schwab API Java Client SDK</p>
          <p>An open-source Java client for the Schwab Market Data developer API. This implementation features a reactive, non-blocking client as well as a traditional, blocking client.</p>
        </div>
        <div>
          <p>Generative AI Market Day Recap Newsletter</p>
          <p>A free newsletter generating daily recaps on the financial markets, powered by generative AI.</p>
        </div>
        <h2>In the Backlog</h2>
        <div>
          <p>Langhavens Securities Master</p>
          <p>A securities master translates adjusted prices and standardizes identifiers for securities. Corporate actions like stock splits and symbol name changes create inconsistencies when looking back in time to compare financial data. A securities master keeps track of all these changes and transforms the data into a normalized format with respect to time.</p>
        </div>
        <div>
          <p>Backtest Engine</p>
          <p>Past performance is no guarantee of future results, but back-testing can provide some indication of an algorithm&apos;s forecasted returns. I want to write my own implementation of a backtesting engine because so many algorithmic traders use them, and I want to understand the nitty-gritty details of how they work.</p>
        </div>
        <div>
          <p>Black-box Policy Proximal Optimization Algorithm</p>
          <p>A machine learning algorithm for trading with lots of indicators. It&apos;s not expected to be effective, but it is a great opportunity for applied research.</p>
        </div>
        <h2>F.A.Q.</h2>
        <div>
          <p>What does Langhavens mean?</p>
          <p>Langhavens is a concatenation of two surnames with great sentimental value, <i>Lang</i> and <i>Havens</i>. When distintively defined, they roughly translate to "long" and "safe place" respectively.</p>
        </div>
        <h2>Contact</h2>
        <div>
          <p>info@langhavens.com</p>
          <p><a href=&quot;https://www.linkedin.com/company/langhavens&quot;>LinkedIn</a></p>
          <p><a href=&quot;https://github.com/langhavens&quot;>GitHub</a></p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Copyright © 2025 Langhavens</p>
        <p>Made in the United States with &lt;3</p>
      </footer>
    </div>
  );
}
