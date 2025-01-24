// components/Chip.tsx
import React from "react";

export interface ChipProps {
  iconClass: string;
  percentage: string;
}

export const Chip: React.FC<ChipProps> = ({ iconClass, percentage, currency, chain, cta }) => (
    <div className="chain">
      {percentage && <div className="chip">
        <i className={iconClass}></i>
        {percentage}
      </div>}
        {/* <h6>Etherium</h6>
        <h6>Change 24hrs</h6>
        <button>View Report</button> */}
      {currency && <h6>{currency}</h6>}
      {chain && <h6>{chain}</h6>}
      {cta && <button>{cta}</button>}
    </div>
  );
  
