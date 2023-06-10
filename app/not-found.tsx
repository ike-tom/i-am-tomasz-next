import BackButton from '@/components/BackButton/BackButton'

export default function Custom404() {
  return (
    <main className="flex flex-col lg:h-screen max-w-screen-2xl font-pixel m-auto justify-between  min-h-screen p-8  lg:px-24 lg:py-12 place-items-center">
      <h1 className="text-center mb-4 flex flex-1 items-center">
        Ooops...
        <br />
        Something went wrong
      </h1>
      <BackButton />
    </main>
  )
}
