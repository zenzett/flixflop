import React, { FunctionComponent, HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  imageUrl: string;
  href: string;
};

const Card: FunctionComponent<CardProps> = ({
  title,
  imageUrl,
  href,
  ...attrs
}) => {
  return (
    <div
      className="w-60 p-2 rounded-lg bg-gray-800 text-orange-400 shadow-xl shadow-orange-10 transition-transform hover:scale-105"
      style={{ height: "355px" }}
      {...attrs}
    >
      <Link href={href} passHref>
        <Image
          src={imageUrl}
          alt={title}
          width={330}
          height={500}
          className="rounded-lg"
          layout="responsive"
          style={{ objectFit: "cover" }}
        />
        <div className="pt-2">
          <span className="font-bold">{title || "-"}</span>
        </div>
      </Link>
    </div>
  );
};
export default Card;
