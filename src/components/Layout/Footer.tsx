import Link from 'next/link';
import { GrFacebook, GrInstagram } from 'react-icons/gr';

const Footer = () => (
  <footer className="bg-claretDark">
    <div className="container mx-auto flex justify-between py-8">
      <Link href="/contact" className="text-grayLighter">
        Zamów rzeźbę
      </Link>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/andrzej.dromert"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Idź do mojego profilu na Facebooku"
        >
          <GrFacebook className="fill-grayLighter text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/andrzej_dromert/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Idź do mojego profilu na Instagramie"
        >
          <GrInstagram className="fill-grayLighter text-4xl" />
        </a>
      </div>
    </div>
    <div className="p-4 text-center text-grayLighter">
      <span>© {new Date().getFullYear()} Copyright: Developard</span>
    </div>
  </footer>
);
export default Footer;
