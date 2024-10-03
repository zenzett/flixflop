const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="px-20 py-8 flex flex-col text-gray-500 gap-6">
      <div className="flex items-center justify-between">
        <span>Questions? Contact us.</span>
        <span className="text-sm">© {year} All Rights Reserved.</span>
      </div>
      <div className="flex items-center gap-40 text-sm">
        <div className="flex flex-col justify-center gap-1">
          <span>FAQ</span>
          <span>Privacy</span>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <span>Ways to Watch</span>
          <span>Corporate Information</span>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <span>Help Center</span>
          <span>Terms of Use</span>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <span>Account</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
