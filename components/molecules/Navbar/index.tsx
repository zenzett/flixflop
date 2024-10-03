const Navbar = () => {
  return (
    <div className="h-16 px-20 py-4 flex justify-between items-center text-orange-40">
      <span className="text-xl font-bold">FlixFlop</span>
      <div className="flex gap-8">
        <div>Movies</div>
        <div>TV Show</div>
        <div>People</div>
        <div>My Watchlist</div>
      </div>
      <div>
        <span>My Profile</span>
      </div>
    </div>
  );
};

export default Navbar;
