import Link from 'next/link'

export default function Home() {
  const menu = ['about', 'portfolio', 'contact']

  const currentYear = new Date().getFullYear()

  return (
    <div className="flex h-screen max-w-screen-2xl font-pixel m-auto flex-col justify-between">
      <header className="flex  flex-col items-center justify-between ">
        <h1 className="font-pacman pt-8 text-center text-5xl lg:text-7xl">
          Hi
          <br />I am Tomasz
        </h1>
      </header>
      <main className="flex  flex-col items-center justify-between ">
        <nav>
          <ul className="text-xl lg:text-3xl font-pixel flex flex-col items-center justify-between lg:flex gap-8">
            {menu.map((item, index) => {
              return (
                <li key={index} className="hover:animate-blink">
                  <Link href={`/${item}`}>{item}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </main>
      <footer className="flex  flex-col items-center justify-between font-pixel text-xs lg:text-sm pb-8">
        <p>&#174; {currentYear} TOMASZ IKERT</p>
        <p>ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  )
}
