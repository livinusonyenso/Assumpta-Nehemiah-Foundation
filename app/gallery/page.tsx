"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Share2, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [mediaType, setMediaType] = useState("All")

  const categories = ["All", "Education", "Healthcare", "Community", "Events", "Infrastructure"]
  const mediaTypes = ["All", "Photos", "Videos"]

  const galleryItems = [
    {
      id: 1,
      type: "photo",
      title: "School Opening Ceremony",
      description: "Opening of the new primary school in Kano, Nigeria",
      category: "Education",
      location: "Kano, Nigeria",
      date: "December 2024",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["education", "school", "ceremony"],
    },
    {
      id: 2,
      type: "video",
      title: "Mobile Health Clinic in Action",
      description: "Our medical team providing healthcare services in rural Ghana",
      category: "Healthcare",
      location: "Rural Ghana",
      date: "November 2024",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3:45",
      tags: ["healthcare", "mobile clinic", "rural"],
    },
    {
      id: 3,
      type: "photo",
      title: "Skills Training Workshop",
      description: "Women learning tailoring skills in our vocational center",
      category: "Community",
      location: "Lagos, Nigeria",
      date: "November 2024",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["skills", "training", "women empowerment"],
    },
    {
      id: 4,
      type: "photo",
      title: "Clean Water Celebration",
      description: "Community celebrating the completion of a new borehole",
      category: "Infrastructure",
      location: "Nakuru, Kenya",
      date: "October 2024",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["water", "infrastructure", "celebration"],
    },
    {
      id: 5,
      type: "video",
      title: "Annual Fundraising Gala",
      description: "Highlights from our 2024 fundraising gala event",
      category: "Events",
      location: "Lagos, Nigeria",
      date: "September 2024",
      image: "/placeholder.svg?height=400&width=600",
      duration: "5:20",
      tags: ["fundraising", "gala", "event"],
    },
    {
      id: 6,
      type: "photo",
      title: "Scholarship Recipients",
      description: "Group photo with our 2024 scholarship recipients",
      category: "Education",
      location: "Accra, Ghana",
      date: "September 2024",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["scholarship", "students", "education"],
    },
    {
      id: 7,
      type: "photo",
      title: "Community Garden Project",
      description: "Families working together in the community garden",
      category: "Community",
      location: "Bamako, Mali",
      date: "August 2024",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["agriculture", "community", "sustainability"],
    },
    {
      id: 8,
      type: "video",
      title: "Volunteer Training Session",
      description: "New volunteers learning about our programs and approach",
      category: "Community",
      location: "Kampala, Uganda",
      date: "August 2024",
      image: "/placeholder.svg?height=400&width=600",
      duration: "4:15",
      tags: ["volunteers", "training", "orientation"],
    },
    {
      id: 9,
      type: "photo",
      title: "Medical Equipment Donation",
      description: "Delivering medical equipment to rural health centers",
      category: "Healthcare",
      location: "Northern Nigeria",
      date: "July 2024",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["medical equipment", "donation", "healthcare"],
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = activeFilter === "All" || item.category === activeFilter
    const typeMatch =
      mediaType === "All" ||
      (mediaType === "Photos" && item.type === "photo") ||
      (mediaType === "Videos" && item.type === "video")
    return categoryMatch && typeMatch
  })

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-blue-100 text-blue-800",
      Healthcare: "bg-green-100 text-green-800",
      Community: "bg-purple-100 text-purple-800",
      Events: "bg-pink-100 text-pink-800",
      Infrastructure: "bg-orange-100 text-orange-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore photos and videos from our programs, events, and the communities we serve. See the real impact of
            our work through these powerful visual stories.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Category Filters */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-royal-plum mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className={activeFilter === category ? "bg-deep-pink hover:bg-deep-pink/90" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Media Type Filters */}
            <div>
              <h3 className="text-lg font-semibold text-royal-plum mb-3">Media Type</h3>
              <div className="flex gap-2">
                {mediaTypes.map((type) => (
                  <Button
                    key={type}
                    variant={mediaType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMediaType(type)}
                    className={mediaType === type ? "bg-royal-plum hover:bg-royal-plum/90" : ""}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600">
            Showing {filteredItems.length} of {galleryItems.length} items
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-deep-pink rounded-full flex items-center justify-center cursor-pointer">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                      <span className="text-white font-medium">{item.duration}</span>
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}>{item.category}</Badge>

                {/* Media Type Badge */}
                <Badge variant="secondary" className="absolute top-3 right-3 bg-black bg-opacity-50 text-white">
                  {item.type === "photo" ? "Photo" : "Video"}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-royal-plum mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>

                <div className="flex items-center text-xs text-gray-600 mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="mr-3">{item.location}</span>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{item.date}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button size="sm" className="bg-deep-pink hover:bg-deep-pink/90">
                    View Full Size
                  </Button>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-royal-plum text-royal-plum hover:bg-royal-plum hover:text-white bg-transparent"
          >
            Load More Media
          </Button>
        </div>
      </div>

      {/* Featured Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-royal-plum mb-4">Featured Documentary</h2>
            <p className="text-lg text-gray-700">
              Watch our latest documentary showcasing the impact of our work across Africa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Featured documentary"
                  width={800}
                  height={500}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-deep-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-deep-pink/90 transition-colors mx-auto mb-4">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Transforming Lives: Our Journey</h3>
                    <p className="text-lg">Duration: 15:30</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
