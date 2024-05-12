/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/rSavodqLseV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"

export function page() {
  function scroll(id: string) {
    const scrollTarget = document.querySelector(`#${id}`);

    if (scrollTarget) {
      const scroll =
        scrollTarget.getBoundingClientRect().top + window.scrollY - 100;

      console.log(scroll);

      window.scrollTo({
        top: scroll,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-4 border-b shrink-0 bg-white md:px-6">
        <div className="flex items-center gap-2 text-lg font-semibold sm:text-base">
          <Link href="#">
            <p>🏰</p>
            <span className="sr-only">Nodes Fortress</span>
          </Link>
        </div>
        <div className="flex items-center gap-5 text-sm lg:gap-6 ml-auto">
          {/* <Link className="text-gray-500 dark:text-gray-400" href="#">
            <TwitterIcon className="w-5 h-5" />
          </Link> */}
          {/* <Link className="text-gray-500 dark:text-gray-400" href="#">
            <SignalIcon className="w-5 h-5" />
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            <ScanIcon className="w-5 h-5" />
          </Link> */}
          <Link className="text-gray-500 dark:text-gray-400" target="_blank" rel="noopener noreferrer" href="https://github.com/artemd24">
            <GithubIcon className="w-5 h-5"/>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#0072C6] to-[#00A0E3]">
          <div className="container px-4 md:px-6 text-center text-white mx-auto max-w-[800px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nodes Fortress Validator
              </h1>
              <p className="text-lg md:text-xl">
                Our team of experts provides comprehensive validation services to ensure the security and reliability of
                your blockchain infrastructure.
              </p>
              <form data-scroll="#stake" action="#stake">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#0072C6] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Stake with us
                </Button>
              </form>
            </div>
          </div>
        </section>
        <section id="advantages" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-3 lg:justify-center mx-auto max-w-[800px]">
            <div className="space-y-4">
              <InfoIcon className="h-12 w-12 text-[#0072C6]" />
              <h3 className="text-2xl font-bold blackTextOverride">Expertise</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of seasoned blockchain experts has deep knowledge of consensus mechanisms, cryptography, and
                network architecture.
              </p>
            </div>
            <div className="space-y-4">
              <NetworkIcon className="h-12 w-12 text-[#00A0E3]" />
              <h3 className="text-2xl font-bold blackTextOverride">24/7 Nodes Maintaining</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of experts provides round-the-clock monitoring and maintenance of your blockchain nodes to
                ensure maximum uptime and reliability.
              </p>
            </div>
            <div className="space-y-4">
              <FocusIcon className="h-12 w-12 text-[#0072C6]" />
              <h3 className="text-2xl font-bold blackTextOverride">Impact to decentralisation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team has a proven track record of helping clients secure their blockchain networks and achieve
                regulatory compliance, contributing to the overall decentralization of the ecosystem.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0072C6] to-[#00A0E3] text-white">
          <div className="container px-4 md:px-6 space-y-4 text-center mx-auto max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Philosophy</h2>
            <p className="text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Nodes Fortress, we believe in the power of blockchain technology to transform industries and empower
              individuals. We are committed to providing the highest level of validation services to ensure the security
              and reliability of our clients blockchain infrastructure.
            </p>
          </div>
        </section>
        <section id="stake" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto max-w-[800px]">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl blackTextOverride">Networks we validate</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stake with us to support the future of decentralized technologies
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="Ethereum Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="https://www.ux.xyz/_nuxt/img/ux.f3e783d.png"
                  width="140"
                />
                <p className="blackTextOverride">Umee</p>
                <p className="blackTextOverride">APR: ~12.9%</p>
                <Button className="inline-flex h-8 items-center justify-center rounded-md bg-[#0072C6] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#00A0E3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Stake
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0072C6] to-[#00A0E3]">
          <div className="container px-4 md:px-6 text-center text-white mx-auto max-w-[800px]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to secure your blockchain?
              </h2>
              <p className="text-lg md:text-xl">
                Contact our validation team today to learn how we can help you protect your network and ensure
                compliance.
              </p>
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#0072C6] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FocusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function NetworkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function ScanIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}


function SignalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
