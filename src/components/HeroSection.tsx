import Link from "next/link"

function HeroSection () {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1>Master the Art of Music</h1>
        <p>Dive into our comprehensive music courses and transform your passion into expertise. Whether you're a beginner or looking to refine your advanced skills, we have something for everyone.</p>
        <div className="mt-4">
            <Link href={"/courses"}> Explore courses
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
