import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import './Footer.css';

type contactType = {
  icon: React.ComponentType,
  href: string
}

const contactIcons: Array<contactType> = [
  { icon: FaGithub, href: "https://github.com/pannguyen2001" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nh%E1%BA%ADt-ph%E1%BA%A1m-anh-b036a81b6/" },
  { icon: FaFacebook, href: "https://www.facebook.com/phamnhat11" },
  { icon: FaMailBulk, href: "mailto:anhnhatpham2001@gmail.com" }
]

const Footer = () => {
  return (
    <footer className="footer py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} -P.A.N-  All rights reserved.
          </p>
          <div className="flex items-center justify-center mt-4 sm:mt-0 gap-4">
            {
              contactIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <icon.icon className="h-6 w-6" />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
