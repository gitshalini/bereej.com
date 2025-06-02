// components/Meta.tsx
import Head from 'next/head';

interface MetaProps {
  title: string;
}

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
    </Head>
  );
};

export default Meta;
