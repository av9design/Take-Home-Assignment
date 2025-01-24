// components/Graphic.tsx
import React from "react";

export interface GraphicProps {
  type: string;
  logoSrc: string;
  name: string;
  bookmarkUrl: string;
}

export const Graphic: React.FC<GraphicProps> = ({ type, logoSrc, name, bookmarkUrl }) => (
  <div className="graphic">
    <span className="type">{type}</span>
    <img src={logoSrc} alt={`${name} Logo`} />
    <h6 className="name">{name}</h6>
    <div className="bookmark">
      <a href={bookmarkUrl}>
        <i className="fa-solid fa-bookmark"></i>
      </a>
    </div>
  </div>
);
