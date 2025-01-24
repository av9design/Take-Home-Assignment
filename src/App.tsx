// App.tsx
import React from "react";
import './App.css';
import { Module } from "./components/Module.tsx";

const App: React.FC = () => (
  <div className="container">
    <div className="module-wrap">
      <Module
        type="Stock"
        colorClass="stock"
        logoSrc="img/nvidia.png"
        name="Nvidia"
        websiteUrl="https://www.cryptofaxreport.com/reports/stock/NVDA"
        bookmarkUrl="./"
        stats={[
          { label: "Price", value: "$137.71", subValue: "USD" },
          { label: "Market cap", value: "$3.31", subValue: "T" },
        ]}
        chipData={{ iconClass: "fa-solid fa-angle-down", percentage: "2.19%", chain: "Change 24hrs", cta: "View report" }}
      />
      <Module
        type="Crypto"
        colorClass="crypto"
        logoSrc="img/bitcoin.png"
        name="Bitcoin"
        websiteUrl="https://www.cryptofaxreport.com/reports/coin/bitcoin"
        bookmarkUrl="./"
        stats={[
          { label: "Price", value: "$96,826.97", subValue: "USD" },
          { label: "Market cap", value: "$2.0", subValue: "T" },
        ]}
        chipData={{ iconClass: "fa-solid fa-angle-up", percentage: "2.19%", chain: "Change 24hrs", cta: "View report" }}
      />
      <Module
        type="NFT"
        colorClass="nft"
        logoSrc="img/pudgyPinguins.png"
        name="Pudgy Penguins"
        websiteUrl="https://www.cryptofaxreport.com/reports/nft/pudgy-penguins"
        bookmarkUrl="./"
        stats={[
          { label: "Floor price", value: "23.12", subValue: "ETH" },
          { label: "Total volume", value: "361", subValue: "ETM", cta: "View Report" },
        ]}
        chipData={{ currency: "Ethereum", chain: "Crypto chain", cta: "View report" }}
      />
    </div>
  </div>
);

export default App;
