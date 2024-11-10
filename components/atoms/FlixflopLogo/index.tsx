import Image from "next/image";
import React from "react";

import logo from "./flixflop.svg";

const FlixFlopLogo: React.FC = () => <Image src={logo} alt="Logo" width={100} height={100} />;

export default FlixFlopLogo;
