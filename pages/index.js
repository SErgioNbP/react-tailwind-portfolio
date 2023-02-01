import Head from 'next/head';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/avatar.png";
import logo from "../public/logo.png";
import logoWhite from "../public/logo-white.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import React, { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>Sérgio Neves Portfolio</title>
        <meta name="description" content="My work portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white dark:bg-gray-900 px-10 md:px-20 lg:px40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            {/* <h1 className='text-xl font-burtons'>SN</h1> */}
            {darkMode
              ?
              <Image
                src={logoWhite}
                alt="logo white"
                width={200}
                height={35}
              />
              :
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={35}
              />
            }
            <ul className='flex items-center'>
              <li>
                {darkMode
                  ?
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer' />
                  :
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer' />
                }
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h1 className="mb-4 text-9xl text-left font-extrabold text-gray-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 block uppercase">Hello.</span>
              <span className="block uppercase">I&#39;m</span>
              <span className="block uppercase">Sérgio</span>
              <span className="block uppercase">Neves</span>
            </h1>
            {/* <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>Hello. I&#39;m Sérgio Neves</h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>I&#39;m a Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>Follow me on this journey throughout the creative power of programming.</p> */}
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto border-4 border-gray-100 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96'>
            <Image
              src={avatar}
              layout="fill"
              objectFit="cover"
              alt="avatar"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
            <p className="text-md py-10 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a
              developer, I&#39;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
                alt="web1"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
                alt="web2"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
                alt="web3"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
                alt="web4"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
                alt="web5"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
                alt="web6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
