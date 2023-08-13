import Link from "next/link";
import Social from "./common-footer/Social";

const CopyrightFooter2 = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="bottom-left">
            <div className="logo">
              <Link href="/">
                <img src="images/logo.svg" alt="brand" />
              </Link>
            </div>
            <div className="copyright-text">
              © {new Date().getFullYear()} Construction job board by{" "}
              <a
                href="https://www.twitter.com/st_mccombe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Steven McCombe
              </a>
              . All Rights Reserved.
            </div>
          </div>

          <div className="social-links">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter2;
