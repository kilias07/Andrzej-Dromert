import Head from 'next/head';

const Error500 = () => (
  <>
    <Head>
      <title>500 - Wystąpił błąd po stronie serwera</title>
    </Head>
    <div className="heightAdjustScreen container mx-auto flex items-center justify-center">
      <h1 className="text-2xl lg:text-4xl">Wystąpił błąd po stronie serwera</h1>
    </div>
  </>
);

export default Error500;
