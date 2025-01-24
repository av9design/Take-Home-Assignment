// components/Card.tsx
import React from "react";
import { Graphic } from "./Graphic.tsx";
import { StatsRow } from "./StatsRow.tsx";

export interface CardProps {
  type: string;
  logoSrc: string;
  name: string;
  websiteUrl: string;
  bookmarkUrl: string;
  stats: {
    label: string;
    value: string;
    subValue?: string;
  }[];
  chipData?: {
    iconClass: string;
    percentage: string;
  };
}

export const Card: React.FC<CardProps> = ({
  type,
  logoSrc,
  name,
  websiteUrl,
  bookmarkUrl,
  stats,
  chipData,
}) => (
  <div className="card">
    <div className="logo">
      <div className="website">
        <a href={websiteUrl} target="blank">
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
      <Graphic type={type} logoSrc={logoSrc} name={name} bookmarkUrl={bookmarkUrl} />
    </div>
    <div className="stats">
      {stats.map((stat, index) => (
        <StatsRow
          key={index}
          label={stat.label}
          value={stat.value}
          subValue={stat.subValue}
          chipData={index === 0 ? chipData : undefined}
        />
      ))}
    </div>
  </div>
);
