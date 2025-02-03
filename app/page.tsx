
// import { NavigationBar } from "@/components/navigation-bar"
import { Hero } from "@/components/hero"
import { ProjectGrid } from "@/components/project-grid"
import { Faq } from "@/components/faq"
import PurposeFeatureGrid from "@/components/purpose-feature-grid";

export default function Home() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <Hero />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div>
            <h2 className="text-3xl">Purpose</h2>
            <p className="text-2xl mt-2 mb-2">
              The only constant is change.<br/>
              Hitting moving targets requires innovation and continuous learning.<br/>
              Langhavens is a platform for personal development based on this premise.
            </p>
          </div>
          <div className="justify-center">
            <PurposeFeatureGrid />
          </div>
          <ProjectGrid />
          <Faq />
          <h2>Contact</h2>
          <div>
            <p>info@langhavens.com</p>
            <p><a href="https://www.linkedin.com/company/langhavens" rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/langhavens" rel="noreferrer">GitHub</a></p>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Copyright © 2025 Langhavens</p>
          <p>Made in the United States with &lt;3</p>
        </footer>
      </div>
    </div>
  );
}
