import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const social = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/tharindugamage13/', 
  },
  {
    name: 'Github',
    icon: <FaGithub />,
    path: 'https://github.com/TharinduGamage',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    path: 'https://youtube.com/@your-channel',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    path: 'https://wa.me/94787962180', // your WhatsApp number
  },
]

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyle} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
