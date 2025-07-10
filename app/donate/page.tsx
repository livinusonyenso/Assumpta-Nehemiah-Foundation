"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Shield, Users } from "lucide-react"

export default function DonatePage() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000]

  const impactExamples = [
    { amount: 25, impact: "Provides school supplies for 1 child for a month" },
    { amount: 50, impact: "Funds a health check-up for 5 community members" },
    { amount: 100, impact: "Supports a child's education for 3 months" },
    { amount: 250, impact: "Provides vocational training for 1 adult" },
    { amount: 500, impact: "Funds a mobile clinic visit to a remote village" },
    { amount: 1000, impact: "Builds a clean water access point for a community" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your generous donation helps us continue our mission of transforming lives and building stronger communities
            across Africa.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-royal-plum">Choose Your Donation</CardTitle>
                <CardDescription>Every contribution, no matter the size, makes a meaningful impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Donation Type</Label>
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="one-time"
                        name="donationType"
                        value="one-time"
                        checked={donationType === "one-time"}
                        onChange={(e) => setDonationType(e.target.value)}
                        className="text-deep-pink"
                      />
                      <Label htmlFor="one-time">One-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="monthly"
                        name="donationType"
                        value="monthly"
                        checked={donationType === "monthly"}
                        onChange={(e) => setDonationType(e.target.value)}
                        className="text-deep-pink"
                      />
                      <Label htmlFor="monthly">Monthly</Label>
                    </div>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Select Amount (USD)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((presetAmount) => (
                      <Button
                        key={presetAmount}
                        variant={amount === presetAmount.toString() ? "default" : "outline"}
                        className={amount === presetAmount.toString() ? "bg-deep-pink hover:bg-deep-pink/90" : ""}
                        onClick={() => {
                          setAmount(presetAmount.toString())
                          setCustomAmount("")
                        }}
                      >
                        ${presetAmount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount" className="text-sm">
                      Custom Amount
                    </Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setAmount("")
                      }}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Share why you're supporting our cause..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Payment Method</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="cursor-pointer border-2 hover:border-deep-pink">
                      <CardContent className="flex items-center space-x-3 p-4">
                        <CreditCard className="w-6 h-6 text-deep-pink" />
                        <div>
                          <div className="font-medium">Credit/Debit Card</div>
                          <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer border-2 hover:border-deep-pink">
                      <CardContent className="flex items-center space-x-3 p-4">
                        <Shield className="w-6 h-6 text-deep-pink" />
                        <div>
                          <div className="font-medium">Bank Transfer</div>
                          <div className="text-sm text-gray-600">Direct bank transfer</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Button className="w-full bg-deep-pink hover:bg-deep-pink/90 text-lg py-6">
                  Donate ${customAmount || amount || "0"} {donationType === "monthly" ? "Monthly" : "Now"}
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Your donation is secure and encrypted. We never store your payment information.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-royal-plum">Your Impact</CardTitle>
                <CardDescription>See how your donation makes a difference</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <Badge className="bg-deep-pink text-white">${example.amount}</Badge>
                      <p className="text-sm text-gray-700">{example.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-royal-plum">Why Donate?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-deep-pink mt-1" />
                    <div>
                      <div className="font-medium">Direct Impact</div>
                      <div className="text-sm text-gray-600">100% of donations go directly to programs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-deep-pink mt-1" />
                    <div>
                      <div className="font-medium">Transparency</div>
                      <div className="text-sm text-gray-600">Regular updates on fund usage</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-deep-pink mt-1" />
                    <div>
                      <div className="font-medium">Lasting Change</div>
                      <div className="text-sm text-gray-600">Sustainable community development</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-royal-plum text-white">
              <CardHeader>
                <CardTitle>Monthly Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Join our monthly giving program for sustained impact. Monthly donors help us plan long-term projects
                  and provide consistent support to our communities.
                </p>
                <Badge className="bg-deep-pink text-white">Special Recognition</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
