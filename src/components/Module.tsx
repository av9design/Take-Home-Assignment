// components/Module.tsx
import React from "react";
import { Card, CardProps } from "./Card.tsx";

export interface ModuleProps extends CardProps {
  colorClass: string;
}

export const Module: React.FC<ModuleProps> = (props) => (
  <div className={`module ${props.colorClass}`}>
    <label htmlFor="type">
      <span>{props.type}</span>
    </label>
    <Card {...props} />
  </div>
);
