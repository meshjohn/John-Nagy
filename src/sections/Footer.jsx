import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={socialImg.imgPath}
                  alt={socialImg.name}
                  className={
                    socialImg.name === "github"
                      ? "w-3/5 h-3/5"
                      : socialImg.name === "cv"
                      ? "w-[70%] h-[70%] invert"
                      : ""
                  }
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} John Nagy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
