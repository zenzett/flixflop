export const dynamic = "auto";

import { Fragment, FunctionComponent } from "react";

import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";

interface RootTemplateProps {
  children: React.ReactNode;
}

const RootTemplate: FunctionComponent<RootTemplateProps> = async ({
  children,
}) => {
  return (
    <Fragment>
      <Navbar />
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="w-full p-8">{children}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default RootTemplate;
