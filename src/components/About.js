import React from 'react';
// count up
import CountUp from 'react-countup';
// intersection obserber hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// varient
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' id='about'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>
            <img src='https://i.ibb.co/Df21rpH/image-6487327-removebg-preview.png' alt=''/>
          </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>
            I'm a Freelancer Front-end developer with over 1 years of experience.

          </h3>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={2} duration={4} />
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={27} duration={4} />
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Complete
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={12} duration={4} />
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Language &<br />
                Frameworks
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href="#" className='text-gradient btn-link'>My portfolio</a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>;
};

export default About;
