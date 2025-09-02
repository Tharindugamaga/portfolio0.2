import { motion } from "framer-motion"

//variants
const stairAnimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top: ["100%","0%"],
    },
}
//calculate delay reverse index for staggered index
const reverseIndex =(index) =>{
    const totalSteps = 10; //total number of steps
    return totalSteps - index - 1;
}



const Stairs  = () => {
  return (
    <>
      {/*render & motion divs , each representing step of the stairs
      Each div will have the same animation define by the stairAnimation object
      the delay for each div is calculated sinamically based on its resrsed index,
      creating a staggered effect with decreasing delay for each subsequent step
      
      */}
      {[...Array(10)].map((_,index)=>{
       return( 
       <motion.div 
       key={index} 
       variants={stairAnimation} 
       initial="initial"
        animate ="animate" 
        exit="exit" 
        transition={{
          duration:0.4,  
          ease:"easeInOut",
          delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-white relative"
        
        
        />
        );
      })}
    </>
  )
}

export default Stairs 
