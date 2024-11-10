import { FunctionComponent } from "react";

import Card from "@/components/molecules/Card";

const TVAiringTodayPage: FunctionComponent = async () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-dark-90" style={{ minHeight: "calc(100vh - 64px)" }}>
      <Card title="TVAiringToday" />
    </div>
  );
};

export default TVAiringTodayPage;
