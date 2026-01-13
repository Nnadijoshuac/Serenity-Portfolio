import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const BusinessValue = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Real impact</p>
        <h2 className={styles.sectionHeadText}>I Build What Moves Revenue.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I help small businesses turn ideas into working products. No fluff, no endless timelines—just clean code and solutions that actually work.
      </motion.p>

      <div className='mt-20 grid md:grid-cols-2 gap-10'>
        {/* Left Column - What I Do */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className='bg-tertiary p-8 rounded-2xl border border-[#915EFF]/20'
        >
          <div className='mb-6'>
            <h3 className='text-white font-bold text-[24px] mb-2'>
              What I do for small businesses
            </h3>
            <div className='w-16 h-1 bg-gradient-to-r from-[#915EFF] to-transparent'></div>
          </div>
          
          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <span className='text-[#915EFF] text-[20px] mt-1'>→</span>
              <p className='text-white-100 text-[16px] leading-relaxed'>
                Turn vague ideas into clean websites people actually use
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#915EFF] text-[20px] mt-1'>→</span>
              <p className='text-white-100 text-[16px] leading-relaxed'>
                Build landing pages that explain fast and push users to act
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#915EFF] text-[20px] mt-1'>→</span>
              <p className='text-white-100 text-[16px] leading-relaxed'>
                Fix broken UX flows—forms, checkout, booking, WhatsApp conversion
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#915EFF] text-[20px] mt-1'>→</span>
              <p className='text-white-100 text-[16px] leading-relaxed'>
                Speed up slow sites and make them mobile-first
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#915EFF] text-[20px] mt-1'>→</span>
              <p className='text-white-100 text-[16px] leading-relaxed'>
                Add simple automation—contact forms, email capture, basic dashboards
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#915EFF] text-[20px] mt-1'>→</span>
              <p className='text-white-100 text-[16px] leading-relaxed'>
                Ship updates fast. No endless "coming soon"
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right Column - How I Solve Problems */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className='bg-black-100 p-8 rounded-2xl border border-[#915EFF]/20'
        >
          <div className='mb-6'>
            <h3 className='text-white font-bold text-[24px] mb-2'>
              How I solve problems
            </h3>
            <div className='w-16 h-1 bg-gradient-to-r from-[#915EFF] to-transparent'></div>
          </div>
          
          <div className='space-y-6'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#915EFF] flex items-center justify-center text-white font-bold'>
                1
              </div>
              <div>
                <p className='text-white font-semibold text-[16px]'>Understand the real goal</p>
                <p className='text-secondary text-[14px] mt-1'>Not the noisy request—what actually moves the needle</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#915EFF] flex items-center justify-center text-white font-bold'>
                2
              </div>
              <div>
                <p className='text-white font-semibold text-[16px]'>Map the shortest path to value</p>
                <p className='text-secondary text-[14px] mt-1'>Skip the bloat, focus on what delivers</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#915EFF] flex items-center justify-center text-white font-bold'>
                3
              </div>
              <div>
                <p className='text-white font-semibold text-[16px]'>Build clean + responsive</p>
                <p className='text-secondary text-[14px] mt-1'>Desktop, mobile, tablet—works everywhere</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#915EFF] flex items-center justify-center text-white font-bold'>
                4
              </div>
              <div>
                <p className='text-white font-semibold text-[16px]'>Test with real usage</p>
                <p className='text-secondary text-[14px] mt-1'>Polish the edges, remove friction</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#915EFF] flex items-center justify-center text-white font-bold'>
                5
              </div>
              <div>
                <p className='text-white font-semibold text-[16px]'>Ship, iterate, keep it stable</p>
                <p className='text-secondary text-[14px] mt-1'>Live fast, improve as you go</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.8, 0.75)}
        className='mt-16 text-center'
      >
        <p className='text-white text-[20px] font-medium mb-6'>
          Got a small business problem? I can build the fix.
        </p>
        <a href='#contact'>
          <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-all duration-300 hover:scale-105'>
            Let's Talk
          </button>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(BusinessValue, "business");

