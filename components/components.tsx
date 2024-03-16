/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iQhaLiCm4vT
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function components() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <nav className="items-center space-x-4">
            <Link className="flex items-center space-x-2" href="#">
              <SunIcon className="h-6 w-6" />
              <span className="font-bold">Home</span>
            </Link>
            <Link className="font-medium hover:underline underline-offset-4" href="#">
              Jobs
            </Link>
            <Link className="font-medium hover:underline underline-offset-4" href="#">
              Companies
            </Link>
            <Link className="font-medium hover:underline underline-offset-4" href="#">
              Remote
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="flex items-center space-x-2">
              <SearchIcon className="h-4 w-4 opacity-50" />
              <Input
                className="w-0 placeholder-gray-500 flex-1 appearance-none"
                placeholder="Search for jobs"
                type="search"
              />
            </form>
            <div className="relative">
              <Button className="w-10 h-10 rounded-full" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full object-cover"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">View profile</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:space-y-8 md:flex-row md:px-6 lg:space-y-12">
            <div className="space-y-2 text-center md:mr-10 lg:text-left lg:space-y-4 xl:space-y-6">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Welcome to the Platform
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Find your dream job</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access the best jobs in tech. Let your career take off with opportunities from top companies.
              </p>
            </div>
            <div className="w-full max-w-[400px] mx-auto space-y-4 md:space-y-6 lg:order-last lg:max-w-[400px]">
              <form className="grid gap-2">
                <Input className="rounded-md" placeholder="Enter your email" type="email" />
                <Button className="w-full" type="submit">
                  Create Account
                </Button>
              </form>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link className="underline underline-offset-2" href="#">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Jobs</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Apply to the best jobs in tech. New opportunities added daily.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid gap-4 sm:gap-6 lg:gap-10">
              <div className="flex items-center gap-4">
                <img
                  alt="Company"
                  className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Frontend Engineer</h3>
                  <p className="text-sm text-gray-500">Acme Inc</p>
                </div>
                <Button size="sm">View</Button>
              </div>
              <div className="flex items-center gap-4">
                <img
                  alt="Company"
                  className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Product Designer</h3>
                  <p className="text-sm text-gray-500">Example Corp</p>
                </div>
                <Button size="sm">View</Button>
              </div>
              <div className="flex items-center gap-4">
                <img
                  alt="Company"
                  className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Backend Developer</h3>
                  <p className="text-sm text-gray-500">Sample Co</p>
                </div>
                <Button size="sm">View</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Find your dream job</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Search for jobs in tech. Find the perfect role at the best companies.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid gap-4 sm:gap-6 lg:gap-10">
              <div className="flex items-center gap-4 py-4 border-t border-gray-200 first:mt-4 first:border-0 dark:border-gray-800">
                <img
                  alt="Company"
                  className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Frontend Engineer</h3>
                  <p className="text-sm text-gray-500">Acme Inc</p>
                </div>
                <Button size="sm">View</Button>
              </div>
              <div className="flex items-center gap-4 py-4 border-t border-gray-200 first:mt-4 first:border-0 dark:border-gray-800">
                <img
                  alt="Company"
                  className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Product Designer</h3>
                  <p className="text-sm text-gray-500">Example Corp</p>
                </div>
                <Button size="sm">View</Button>
              </div>
              <div className="flex items-center gap-4 py-4 border-t border-gray-200 first:mt-4 first:border-0 dark:border-gray-800">
                <img
                  alt="Company"
                  className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Backend Developer</h3>
                  <p className="text-sm text-gray-500">Sample Co</p>
                </div>
                <Button size="sm">View</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Testimonials</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by the best teams in the world. We help teams of all sizes.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl grid gap-4 sm:gap-6 md:max-w-4xl lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500">
                  “I found my dream job through the platform. The process was seamless and the opportunities were
                  amazing.”
                </p>
                <div className="flex items-center gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover object-center"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Alice Johnson</h3>
                    <p className="text-xs text-gray-500">Web Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500">
                  “The platform provided me with the best job listings and I was able to land a job at a top tech
                  company. I highly recommend it to anyone looking for tech jobs.”
                </p>
                <div className="flex items-center gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover object-center"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Bob Smith</h3>
                    <p className="text-xs text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container grid items-center justify-center h-16 px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex items-center justify-end space-x-4">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
