import Head from 'next/head'
import Image from 'next/image'
import parse from 'html-react-parser'

const imageBase = '/images/'

const links = [
  {
    url: 'https://www.linkedin.com/in/rafalkubacki/',
    title: 'LinkedIn'
  },
  {
    url: 'https://github.com/rafalkubacki',
    title: 'GitHub'
  },
  {
    url: 'https://www.pinterest.com/rafalkubacki/',
    title: 'Pinterest'
  },
  {
    url: 'tel:+48787622468',
    title: 'Phone'
  },
]

const projects = [
  {
    case: true,
    image: 'porsche-centrum-wroclaw.jpg',
    title: 'Porsche <br>Centrum Wrocław'
  },
  {
    case: true,
    url: 'https://mowisalmon.com/',
    image: 'mowi.jpg',
    title: 'MOWI'
  },
  {
    case: true,
    url: 'https://duzerabaty.pl/',
    image: 'duze-rabaty.jpg',
    title: 'DużeRabaty.pl'
  },
  {
    case: true,
    url: 'https://f-design.pl/',
    image: 'ferro-design.jpg',
    title: 'F-Design'
  },
  {
    case: true,
    url: 'https://kioskpolis.pl/',
    image: 'kiosk-polis.jpg',
    title: 'KioskPolis.pl'
  },
  {
    case: true,
    image: 'fitness-world.jpg',
    title: 'Well Fitness <br>(Fitness World)'
  },
  {
    case: true,
    url: 'https://toscom.pl/',
    image: 'toscom.jpg',
    title: 'Toscom Development'
  },
  {
    case: true,
    url: 'https://misioohandmade.pl/',
    image: 'misioo.jpg',
    title: 'Misioo Handmade'
  },
  {
    url: 'https://jakubroskosz.com/',
    image: 'jakub-roskosz.jpg',
    title: 'Jakub Roskosz'
  },
  {
    url: 'https://ferro.pl/',
    image: 'ferro.jpg',
    title: 'Ferro Group'
  },
  {
    image: 'mobile-vikings.jpg',
    title: 'Mobile Vikings'
  },
  {
    url: 'https://www.dom3e.com/',
    image: 'dom3e.jpg',
    title: 'Dom3E'
  },
  {
    url: 'https://www.mobilkarm.pl/',
    image: 'mobilkarm.jpg',
    title: 'Mobilkarm'
  },
  {
    url: 'https://unimax.pl/',
    image: 'unimax.jpg',
    title: 'UNIMAX Development'
  },
  {
    url: 'https://medisensonic.com/',
    image: 'medisensonic.jpg',
    title: 'Medisensonic'
  },
  {
    image: 'uber.jpg',
    title: 'UBER'
  },
  {
    url: 'https://izerskiresort.pl/',
    image: 'izerski-resort.jpg',
    title: 'IzerSKI Resort'
  },
  {
    url: 'https://purebiologics.com/',
    image: 'pure-biologics.jpg',
    title: 'Pure Biologics'
  },
  {
    image: 'doctor-brew.jpg',
    title: 'Doctor Brew'
  },
  {
    url: 'https://lokummonte.pl/',
    image: 'lokum.jpg',
    title: 'Lokum Deweloper'
  },
  {
    url: 'http://medlekarz.pl/',
    image: 'medlekarz.jpg',
    title: 'MedLekarz'
  },
  {
    image: 'crowdway.jpg',
    title: 'CrowdWay'
  },
  {
    url: 'https://domar.pl/katalog/',
    image: 'domar.jpg',
    title: 'Galeria Wnętrz Domar'
  },
  {
    image: 'medicover.jpg',
    title: 'Medicover'
  },
  {
    image: 'jakosc-obslugi.jpg',
    title: 'Jakość Obsługi'
  },
  {
    image: 'hes.jpg',
    title: 'HES'
  },
  {
    image: 'sat-revolution.jpg',
    title: 'SatRev <br>(SatRevolution)'
  },
  {
    image: 'hes-academy.jpg',
    title: 'HES Academy'
  },
]

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
      <header className='header'>
        <div className='container'>
          <h1>Developing digital products for<br /> fast-pacing &amp; demanding brands.</h1>
          <p>Hello, my name is Rafał Kubacki and I&apos;m Full-Stack Developer with almost 7 years of commercial experience. I also hold the position of a Chapter Lead in Headless Commerce department. Passionate about React and Next.js, after many years of developing WordPress websites.</p>
          <p>Please keep in mind that what you see is a pre-launch version of the site. If you want more informations about me, what I do, or you simply want to talk, then please follow the links below:</p>
          <ul>
            {
              links.map((node, i) => (
                <li key={i}>
                  <a href={node.url} target='_blank' rel='nofollow noopener noreferrer'>{node.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </header>
      <main className='main'>
        <ul className='list'>
          {
            projects.map((node, i) => (
              <li key={i} className='listItem'>
                {
                  node.url ?
                  <a className='project' href={node.url} target='_blank' rel='nofollow noopener noreferrer'>
                    <Image className='projectImage' src={imageBase + node.image} alt={node.title} layout='fill' objectFit='cover' />
                    <div className='projectContent'>
                      <h2 className='projectName'>{parse(node.title)}</h2>
                      <div className='projectLink'>Visit live &rarr;</div>
                      { node.case === true ? <div className='projectCase'>Case study <span>soon</span></div> : '' }
                    </div>
                  </a>
                  :
                  <div className='project'>
                    <Image className='projectImage' src={imageBase + node.image} alt={node.title} layout='fill' objectFit='cover' />
                    <div className='projectContent'>
                      <h2 className='projectName'>{parse(node.title)}</h2>
                      { node.case === true ? <div className='projectCase'>Case study <span>soon</span></div> : '' }
                    </div>
                  </div>
                }
              </li>
            ))
          }
        </ul>
      </main>
    </>
  )
}
