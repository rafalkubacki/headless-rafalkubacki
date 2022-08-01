import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rafał Kubacki - Chapter Lead ‧ Headless Commerce ‧ Full-Stack ‧ React ‧ WordPress</title>
        <meta name="description" content="I'm Full-Stack Developer with almost 7 years of commercial experience. I also hold the position of a Chapter Lead in Headless Commerce department." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d0d0f" />
        <meta name="msapplication-TileColor" content="#0d0d0f" />
        <meta name="theme-color" content="#0d0d0f" />
      </Head>
      <main className='main'>
        <div className='container'>
          <h1>Developing digital products for<br /> fast-pacing &amp; demanding brands.</h1>
          <p>Hello, my name is Rafał Kubacki and I&apos;m Full-Stack Developer with almost 7 years of commercial experience. I also hold the position of a Chapter Lead in Headless Commerce department. Passionate about React and Next.js, after many years of developing WordPress websites.</p>
          <p>Please keep in mind that what you see is a pre-launch version of the site. If you want more informations about me, what I do, or you simply want to talk, then please follow the links below:</p>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/rafalkubacki/' target='_blank' rel='nofollow noopener noreferrer'>LinkedIn</a>
            </li>
            <li>
              <a href='https://github.com/rafalkubacki' target='_blank' rel='nofollow noopener noreferrer'>GitHub</a>
            </li>
            <li>
              <a href='https://www.pinterest.com/rafalkubacki/' target='_blank' rel='nofollow noopener noreferrer'>Pinterest</a>
            </li>
            <li>
              <a href='tel:+48787622468' target='_blank' rel='nofollow noopener noreferrer'>Phone</a>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
