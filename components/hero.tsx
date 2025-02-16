"use client"

import * as React from "react"
import { FlipWords } from "@/components/ui/flip-words"

export function Hero() {
  const words = ["A Quixotic", "An impossible", "A continuous", "An endless", "A Sisyphean", "An unceasing", "A constantly evolving"]

  return (
    <div className="flex items-center justify-center w-full group">
        <p className="text-2xl px-4 md:text-4xl lg:text-5xl max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
          <FlipWords words={words} /><br />
          mission creates <b>perpetual learning</b> opportunities.
        </p>
    </div>
  );
}