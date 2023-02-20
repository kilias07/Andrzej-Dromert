import Head from 'next/head';

const Error404 = () => (
  <>
    <Head>
      <title>404 - Strona nie istnieje</title>
    </Head>
    <div className="heightAdjustScreen container mx-auto flex items-center justify-center">
      <h1 className="text-2xl lg:text-4xl">Ta strona nie istnieje</h1>
    </div>
  </>
);
export default Error404;
