"use client";

import TradingViewWidget from "@/components/TradingViewWidget";
import StockCard from "@/components/StockCard";

import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

interface Props {
  initialStocks: StockWithWatchlistStatus[];
}

export default function StocksClient({ initialStocks }: Props) {
  const base = "https://s3.tradingview.com/external-embedding/embed-widget-";

  return (
    <div className="space-y-10">
      {/* Top widgets */}
      <section className="grid gap-8 xl:grid-cols-2">
        <StockCard title="Market Overview">
          <TradingViewWidget
            scriptUrl={`${base}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={460}
          />
        </StockCard>

        <StockCard title="Stock Heatmap">
          <TradingViewWidget
            scriptUrl={`${base}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            height={460}
          />
        </StockCard>
      </section>

      {/* Bottom widgets */}
      <section className="grid gap-8 xl:grid-cols-2">
        <StockCard title="Top Stories">
          <TradingViewWidget
            scriptUrl={`${base}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={420}
          />
        </StockCard>

        <StockCard title="Market Data">
          <TradingViewWidget
            scriptUrl={`${base}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={420}
          />
        </StockCard>
      </section>
    </div>
  );
}
