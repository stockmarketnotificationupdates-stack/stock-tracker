"use client";

import React, { memo } from "react";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import StockCard from "@/components/StockCard";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 500,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <StockCard title={title}>
      <div
        ref={containerRef}
        className="tradingview-widget-container w-full overflow-hidden rounded-xl"
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </StockCard>
  );
};

export default memo(TradingViewWidget);
