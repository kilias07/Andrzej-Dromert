import { PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  marks: {
    bold: ({ children }) => <strong className="font-medium">{children}</strong>,
    italic: ({ children }) => <em className="italic">{children}</em>,

    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a href={value?.href} target={target}>
          {children}
        </a>
      );
    },
  },
  // @todo add class border-1
  block: {
    h1: ({ children }) => <h1 className="text-7xl">{children}</h1>,
    h2: ({ children }) => <h2 className="my-10 text-6xl">{children}</h2>,
    h3: ({ children }) => <h3 className="my-10 text-5xl">{children}</h3>,
    h4: ({ children }) => <h4 className="my-10 text-4xl">{children}</h4>,
    h5: ({ children }) => <h5 className="my-10 text-3xl">{children}</h5>,
    h6: ({ children }) => <h6 className="my-10 text-2xl">{children}</h6>,

    p: ({ children }) => <p className="my-4 md:text-lg">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    hr: () => <hr className="border-1 my-8 h-px border-gray-200" />,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal">{children}</ol>,
  },
};
export default components;
