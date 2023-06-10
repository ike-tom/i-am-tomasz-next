import Image from 'next/image'
import { projects } from '../../const/const'
import BackButton from '@/components/BackButton/BackButton'

function Portfolio() {
  return (
    <main className="flex flex-col lg:h-screen max-w-screen-2xl font-pixel m-auto justify-between  min-h-screen p-8  lg:pl-24 lg:py-12 place-items-center">
      <h1 className="text-center text-3xl xl:text-5xl">Portfolio</h1>
      <section className="flex lg:w-3/4 gap-6 md:gap-10 flex-wrap justify-center my-8">
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              className={`transition-top transition-left  left-0 duration-300 ease-in-out top-0  max-h-32 md:max-h-40 w-80 relative hover:-top-2 hover:-left-2  hover:shadow-3xl`}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <Image
                  className="object-cover h-full w-full"
                  src={item.img}
                  priority
                  alt={item.alt}
                  width={500}
                  height={360}
                />
              </a>
            </div>
          )
        })}
      </section>
      <BackButton />
    </main>
  )
}

export default Portfolio
