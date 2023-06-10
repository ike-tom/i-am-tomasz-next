import Link from 'next/link'

function BackButton() {
  return (
    <Link className="pt-4 place-self-start hover:animate-blink" href="">
      Back
    </Link>
  )
}

export default BackButton
