// components/StatsRow.tsx
import React from "react";
import { Chip, ChipProps } from "./Chip.tsx";

export interface StatsRowProps {
  label: string;
  value: string;
  subValue?: string;
  chipData?: ChipProps;
}

export const StatsRow: React.FC<StatsRowProps> = ({ label, value, subValue, chipData }) => (
  <div className="row">
    <h6>
      {value} <span>{subValue}</span>
    </h6>
    <h6>{label}</h6>
    {chipData && <Chip {...chipData} />}
  </div>
);
