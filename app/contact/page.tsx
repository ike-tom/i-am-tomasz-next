import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import BackButton from '@/components/BackButton/BackButton'
import { email } from '@/const/const'
import { githubAcc } from '@/const/const'
import { linkedinAcc } from '@/const/const'

function Contact() {
  const contactOptions = [
    { link: { email }, icon: faEnvelope },
    { link: { githubAcc }, icon: faGithub },
    { link: { linkedinAcc }, icon: faLinkedin },
  ]

  return (
    <main className="flex flex-col lg:h-screen max-w-screen-2xl font-pixel m-auto justify-between  min-h-screen p-8  lg:px-24 lg:py-12 place-items-center">
      <h1 className="text-center text-3xl xl:text-5xl">Get in touch</h1>
      <div className="w-full">
        <h2 className="pb-16 lg:pb-32 text-center">Please contact me at</h2>
        <div className="flex  w-full justify-between items-center">
          {contactOptions.map((item, index) => {
            return (
              <a key={index} href={item.link.email}>
                <FontAwesomeIcon
                  className="h-12 md:h-24 lg:h-40"
                  icon={item.icon}
                />
              </a>
            )
          })}
        </div>
      </div>
      <BackButton />
    </main>
  )
}

export default Contact
