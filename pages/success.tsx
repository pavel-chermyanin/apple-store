import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Success = () => {
  return (
    <div>
      <Head>
        <title>Thank you - Apple</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <header className='mx-auto max-w-xl'>
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer opacity-75 transition hover:opacity-100 lg:hidden">
            <Image
              src="https://rb.gy/vsvv2o"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </header>
      <main>
        <section>
          <Link href="/">
            <div className="relative hidden ml-14 h-24 w-12 cursor-pointer transition lg:inline-flex">
              <Image
                src="https://rb.gy/vsvv2o"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Success