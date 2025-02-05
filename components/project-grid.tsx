

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function ProjectGrid() {
  return (
    <div className="container">
      <h2 className="text-3xl">Projects - In Development</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <Card>
          <CardHeader>
            <CardTitle>Schwab API Java Client SDK</CardTitle>
            <CardDescription>Public GitHub repository coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p>An open-source Java client for the Schwab Market Data developer API. This implementation features a reactive, non-blocking client as well as a traditional, blocking client.</p>
          </CardContent>
          <CardFooter>
            <Badge className="mr-1">Open-source</Badge>
            <Badge className="mr-1">Java</Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>GenAI Market Recap Newsletter</CardTitle>
            <CardDescription>Sign-up page coming soon!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Get a daily recap on market events with real data and analysis from Generative AI.</p>
          </CardContent>
          <CardFooter>
            <Badge className="mr-1">Public</Badge>
            <Badge className="mr-1">GenAI</Badge>
          </CardFooter>
        </Card>
      </div>
      <h2 className="text-3xl">Projects - In the Backlog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <Card>
          <CardHeader>
            <CardTitle>Securities Master</CardTitle>
            <CardDescription>Langhavens custom implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Corporate actions like stock splits and symbol name changes create inconsistencies when looking back in time to compare financial data. A securities master keeps track of all these changes and transforms the data into a normalized format with respect to time.</p>
          </CardContent>
          <CardFooter>
            <Badge className="mr-1">Quantitative Research Tool</Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Backtest Engine</CardTitle>
            <CardDescription>Langhavens custom implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Past performance is no guarantee of future results, but back-tests attempt to forecast an algorithm&apos;s future returns using historical data. The backtest engine provides the environment for these tests to run.</p>
          </CardContent>
          <CardFooter>
            <Badge className="mr-1">Quantitative Research Tool</Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Black-box Policy Proximal Optimization Algorithm</CardTitle>
            <CardDescription>A hands-on learning experiment</CardDescription>
          </CardHeader>
          <CardContent>
            <p>A learning experiment to predict future price candles using machine learning.</p>
          </CardContent>
          <CardFooter>
            <Badge className="mr-1">Trading</Badge>
            <Badge className="mr-1">Machine Learning</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}