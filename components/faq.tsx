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
              At first, Langhavens is definitely a safe place to learn, but hopefully it will also be a safe place for money to be used in active trading.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why re-invent the wheel by implementing tools that already exist?</AccordionTrigger>
            <AccordionContent>
              Langhavens places on premium on learning, and the results of the trading algorithms and research tools come second. To gain a deeper understanding of the concepts and technologies we&apos;re learning,
              we have decided to write custom implementations when hands-on learning is beneficial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why deploy everything on AWS and not another cloud provider?</AccordionTrigger>
            <AccordionContent>
              For now, we want to master concepts inside of AWS because of its popularity. Even if another cloud provider has better pricing or more effective services for a given use-case, we are using 
              AWS to focus our learning on AWS.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}