import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  async function fetchCurrencyData() {
    const response = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    setData(response.data[currency]);
  }

  useEffect(() => {
    fetchCurrencyData();
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
