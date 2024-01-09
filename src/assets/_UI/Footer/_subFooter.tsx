export default function SubFooter() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4 items-center">
      <p className="font-semibold">2023 @CareerHub. All rights reserved.</p>
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6"
          src="/images/Footer/facebook.png"
          alt="Facebook"
        />
        <img className="w-6 h-6" src="/images/Footer/reddit.png" alt="Reddit" />
        <img className="w-6 h-6" src="/images/Footer/google.png" alt="Google" />
        <img
          className="w-6 h-6"
          src="/images/Footer/twitter.png"
          alt="Twitter"
        />
        <img
          className="w-6 h-6"
          src="/images/Footer/linkedin.png"
          alt="Linkedin"
        />
      </div>
    </div>
  );
}
