import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';

interface Button {
  link: string;
}

export const Button = ({ link }: Button) => (
    <Link
      href={`/${link}`}
      className="focus:shadow-outline flex w-fit items-center justify-center rounded bg-claretDark py-2 px-4 font-medium text-white shadow hover:bg-gray-600 focus:outline-none"
    >
      <span className="pl-1">Czytaj więcej</span>
      <BsArrowRightShort className="text-2xl" />
    </Link>
);
