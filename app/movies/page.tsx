import Card from "@/components/molecules/Card";

export default function Movies() {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap bg-dark-90"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <Card
        title="Grand Prix"
        imageUrl="https://m.media-amazon.com/images/M/MV5BMTUyMzE2NjgyMV5BMl5BanBnXkFtZTgwNjUwOTYxMTE@._V1_.jpg"
        href="/home"
      />
    </div>
  );
}
