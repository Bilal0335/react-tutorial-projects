import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((datas) => {
        setData(datas[currency] || {});
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
