import { searchStocks } from "@/lib/actions/finnhub.actions";
import StocksClient from "./stocks.client";

export default async function StocksPage() {
  // preload popular stocks for search
  const initialStocks = await searchStocks();

  return <StocksClient initialStocks={initialStocks} />;
}
