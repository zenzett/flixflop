import React, { FunctionComponent, HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
};

const Card: FunctionComponent<CardProps> = ({ title, ...attrs }) => {
  return (
    <div
      className="w-60 h-80 p-2 rounded-lg bg-gray-800 text-orange-40 shadow-xl shadow-orange-10"
      {...attrs}
    >
      <span className="font-bold">{title ? title : "-"}</span>
    </div>
  );
};

export default Card;
