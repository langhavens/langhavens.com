"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {

  return (
    <div>
      <h2 className="text-3xl">F.A.Q.</h2>
      <div className="w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why the name, Langhavens?</AccordionTrigger>
            <AccordionContent>
              <i>Lang</i> roughly translates to &quot;long&quot; in German and Scottish dialects, while <i>Haven</i> means &quot;safe place&quot; in English. Put together, the names represent a &quot;safe place for a long time&quot;.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why re-invent the wheel by implementing tools that already exist?</AccordionTrigger>
            <AccordionContent>
              We are writing our own implementation when we are interested in deep, hands-on learning.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How are you deciding what technologies, tools, etc. to use?</AccordionTrigger>
            <AccordionContent>
              We are picking tools based on what we are interested in learning more about. The most optimal tool might not always be chosen.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}