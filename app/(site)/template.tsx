export const dynamic = "auto";

import { cookies } from "next/headers";
import { Fragment, FunctionComponent } from "react";

import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";

interface RootTemplateProps {
  children: React.ReactNode;
}

const RootTemplate: FunctionComponent<RootTemplateProps> = async ({ children }) => {
  const cookieStore = cookies();
  const name = cookieStore.get("name")?.value;

  return (
    <Fragment>
      <Navbar name={name ?? undefined} />
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
