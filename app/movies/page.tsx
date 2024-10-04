import Card from "@/components/molecules/Card";

export default function Movies() {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap bg-dark-90"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <Card title="Movies" />
    </div>
  );
}
