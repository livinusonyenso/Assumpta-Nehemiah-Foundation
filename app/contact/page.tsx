"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions, want to volunteer, or are interested in partnering
            with us, we're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-royal-plum">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <select
                        id="inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-pink focus:border-deep-pink"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="partnership">Partnership</option>
                        <option value="donation">Donation Questions</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-deep-pink hover:bg-deep-pink/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-royal-plum">Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-deep-pink mt-1" />
                  <div>
                    <div className="font-medium">Main Office</div>
                    <div className="text-sm text-gray-600">
                      123 Foundation Street
                      <br />
                      Victoria Island, Lagos
                      <br />
                      Nigeria
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-deep-pink mt-1" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-gray-600">+234 903 230 1920</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-deep-pink mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-600">info@anf.org</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-deep-pink mt-1" />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-sm text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-royal-plum">Regional Offices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium">Ghana Office</div>
                  <div className="text-sm text-gray-600">Accra, Ghana</div>
                  <div className="text-sm text-gray-600">+233 123 456 789</div>
                </div>
                <div>
                  <div className="font-medium">Kenya Office</div>
                  <div className="text-sm text-gray-600">Nairobi, Kenya</div>
                  <div className="text-sm text-gray-600">+254 123 456 789</div>
                </div>
                <div>
                  <div className="font-medium">Uganda Office</div>
                  <div className="text-sm text-gray-600">Kampala, Uganda</div>
                  <div className="text-sm text-gray-600">+256 123 456 789</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-royal-plum text-white">
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">For urgent matters or emergencies related to our programs:</p>
                <div className="font-medium">+234 903 230 1920</div>
                <div className="text-sm">Available 24/7</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-royal-plum">Find Us</CardTitle>
              <CardDescription>Our main office location in Lagos, Nigeria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive map would be embedded here</p>
                  <p className="text-sm">123 Foundation Street, Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
