import { GrFacebook, GrInstagram } from 'react-icons/gr';
import Link from 'next/link';

const Footer = () => (
    <footer className="bg-claretDark">
        <div className="mx-auto container flex justify-between py-8">
            <Link href="/contact" className="text-grayLighter">
                Zamów rzeźbę
            </Link>
            <div className="flex gap-4">
                <a
                    href="https://www.facebook.com/andrzej.dromert"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <GrFacebook className="fill-grayLighter text-4xl"/>
                </a>
                <a
                    href="https://www.instagram.com/andrzej_dromert/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <GrInstagram className="fill-grayLighter text-4xl"/>
                </a>
            </div>
        </div>
        <div className="text-grayLighter text-center p-4">
            <span>© {new Date().getFullYear()} Copyright: Developard</span>
        </div>
    </footer>
);
export default Footer;
