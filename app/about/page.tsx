import Image from 'next/image'
import BackButton from '@/components/BackButton/BackButton'

function About() {
  return (
    <main className="flex flex-col lg:flex-row lg:h-screen max-w-screen-2xl font-pixel m-auto">
      <section className="flex flex-col min-h-screen p-8 lg:w-1/2 lg:pl-24 lg:py-12 justify-between">
        <h1 className="text-3xl xl:text-5xl">WHO AM I</h1>
        <div className="flex flex-col text-sm xl:text-base normal-case gap-y-8">
          <p>Lazy, ineffective, and chaotic... - certainly not about me.</p>
          <p>
            My name is Tomasz Ikert. I am creative, communicative, and accurate.
            I love learning new things, so that&apos;s why I started my
            programming journey.
          </p>
          <p>
            &ldquo;Nobody who ever gave his best regretted it&ldquo; -
            that&apos;s my way of life.
          </p>
          <p>
            I read biographies, watch the NFL and motorsports, and ride a bike
            in my spare time.
          </p>
        </div>
        <BackButton />
      </section>
      <div className="lg:w-1/2 relative  h-auto lg:h-screen w-full">
        <div className="h-full w-full">
          <Image
            className="object-contain h-full w-full lg:object-cover"
            src="/images/me.webp"
            priority
            alt="Photo of author"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={1200}
            height={500}
          />
        </div>
      </div>
    </main>
  )
}

export default About
