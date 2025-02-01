import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { ModeToggle } from "@/components/theme-toggle"
import { ProjectGrid } from "@/components//project-grid"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ModeToggle />
        <h1>Langhavens</h1>
        <div>
          <p>Building trading algorithms as a platform for personal development.</p>
        </div>
        <ProjectGrid />
        <div>
          <h2>F.A.Q.</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What does Langhavens mean?</AccordionTrigger>
              <AccordionContent>
              Langhavens is a concatenation of two surnames with great sentimental value, <i>Lang</i> and <i>Havens</i>. When distintively defined, they roughly translate to &quot;long&quot; and &quot;safe place&quot; respectively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
  );
}
