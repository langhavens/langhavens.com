"use client"

import * as React from "react"

import { FlipWords } from "@/components/ui/flip-words"

export function Hero() {
  const words = ["A Quixotic", "A Sisyphean", "An unattainable", "A constantly evolving"]

  return (
    <div className="relative h-screen">
      <h1 className="text-5xl mb-5">Langhavens</h1>
      <p className="text-3xl"><FlipWords words={words} /><br/>mission drives perpetual learning.</p>
    </div>
  )
}