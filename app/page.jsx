import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import {Button} from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <section className='h-full'>
     <div className="container mx-auto h-full">
     <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
      {/* text */}
      <div className='text-center xl:text-left order-2 xl:order-none'>
        <span className='text-xl'>Frontend Developer &<br /> Mobile App Developer</span>
        <h1 className='h1 mb-6'>
          Hello I&apos;m <br /><span className='text-accent'>Tharindu Gamage</span>
        </h1>
        <p className='max-w-[500px] mb-9 text-white/80'>I’m Tharindu Gamaga, a final-year HNDIT student with hands-on experience in programming, web development, and software engineering. I am passionate about building real-world IT solutions and have successfully completed my HND along with an internship where I gained practical experience in applying my skills to real projects.</p>
    {/* btn and social */}
      <div className='flex flex-col xl:flex-row  items-center gap-8'>
     <Button
  asChild  // Important: tells the Button to use the child element
  variant="outline"
  size="lg"
  className="uppercase flex items-center gap-2"
>
  <a href="/assets/Tharindu.pdf" download>
    <span>Download CV</span>
    <FiDownload className="text-xl" />
  </a>
</Button>


        <div className='mb-8 xl:mb-0'>
<Social 
  containerStyle="flex gap-4" 
  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" 
/>        </div>
      </div>
      </div>
        {/* photo */}
      <div className='order-1 xl:order-none mb-8 xl:mb-0'><Photo /></div>
     </div>
     </div>
     <Stats />
    </section>
  )
}

export default Home
