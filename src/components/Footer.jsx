import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  {
    url: 'https://github.com/Moazzam6659',
    icon: <FaGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/moazzam-ali-b95a28183/',
    icon: <FaLinkedin />,
  },
  {
    url: 'https://wa.me/918475930938?text=Hey!%20I%20need%20a%20website.',
    icon: <FaWhatsapp />,
  },
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>©Arcadia 2024. All rights reserved</p>
        <div className='flex justify-center gap-4 md:justify-start'>
          {socialLinks.map((link) => (
            <a
              key={link}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
              {link.icon}
            </a>
          ))}
        </div>
        <a href='#privacy-policy' className='text-center text-sm hover:underline md:text-right'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
