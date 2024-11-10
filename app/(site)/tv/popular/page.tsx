import { FunctionComponent } from "react";

import Card from "@/components/molecules/Card";

const TVPopularPage: FunctionComponent = async () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-dark-90" style={{ minHeight: "calc(100vh - 64px)" }}>
      <Card title="TVPopular" />
    </div>
  );
};

export default TVPopularPage;
