import Image from "next/image"

import { ModeToggle } from "@/components/theme-toggle"
import { Hero } from "@/components/hero"
import { ProjectGrid } from "@/components/project-grid"
import { Faq } from "@/components/faq"
import PurposeFeatureGrid from "@/components/purpose-feature-grid";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex w-full">
        <Image src="langhavens-transparent.png" height={36} width={36} alt="Langhavens logo"/>
        <b className="text-2xl outline-solid">Langhavens</b>
        <ModeToggle />
      </nav>
      <main className="flex flex-col gap-40 row-start-2 items-center sm:items-start">
        <Hero />
        <div>
          <h2 className="text-3xl">Purpose</h2>
          <p className="text-2xl mt-2 mb-2">
            The only constant is change.<br/>
            Hitting moving targets requires innovation and continuous learning.<br/>
            Langhavens is a platform for personal development based on this premise.
          </p>
        </div>
        <div className="justify-center">
          <h2 className="text-3xl">Features</h2>
          <PurposeFeatureGrid />
        </div>
        <ProjectGrid />
        <Faq />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Copyright © 2025 Langhavens</p>
        <Image src="langhavens-transparent.png" height={36} width={36} alt="Langhavens logo"/>
        <p>Made in the United States with &lt;3</p>
      </footer>
    </div>
  );
}
