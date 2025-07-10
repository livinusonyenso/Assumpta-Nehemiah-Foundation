import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Amina Hassan",
      role: "Scholarship Recipient",
      location: "Kano, Nigeria",
      category: "Education",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "Thanks to the Assumpta Nehemiah Foundation, I was able to complete my secondary education and now I'm studying medicine at university. They didn't just give me a scholarship; they gave me hope and a future.",
      rating: 5,
      program: "Education Support Program",
    },
    {
      id: 2,
      name: "Dr. Emmanuel Osei",
      role: "Community Health Worker",
      location: "Kumasi, Ghana",
      category: "Healthcare",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The mobile health clinics have transformed healthcare delivery in our rural communities. We've seen a 70% reduction in preventable diseases since the program started. The foundation's approach is both practical and sustainable.",
      rating: 5,
      program: "Healthcare Access Initiative",
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      role: "Small Business Owner",
      location: "Kaduna, Nigeria",
      category: "Empowerment",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The skills training program taught me tailoring and business management. Today, I employ 8 women in my tailoring shop and we're supporting 12 families. This foundation changed not just my life, but my entire community.",
      rating: 5,
      program: "Skills Development Program",
    },
    {
      id: 4,
      name: "Chief Joseph Mwangi",
      role: "Community Leader",
      location: "Nakuru, Kenya",
      category: "Community",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "When ANF came to our village, they didn't just implement programs—they listened to us, worked with us, and respected our culture. The clean water project has eliminated waterborne diseases in our community.",
      rating: 5,
      program: "Clean Water Project",
    },
    {
      id: 5,
      name: "Sarah Volunteer",
      role: "International Volunteer",
      location: "United States",
      category: "Volunteer",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "Volunteering with ANF was life-changing. The organization's commitment to sustainable development and community empowerment is genuine. I've seen firsthand how they're creating lasting impact.",
      rating: 5,
      program: "Volunteer Program",
    },
    {
      id: 6,
      name: "Ibrahim Diallo",
      role: "Youth Entrepreneur",
      location: "Bamako, Mali",
      category: "Youth",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The entrepreneurship training gave me the confidence and skills to start my own tech company. We now provide digital solutions to local businesses and have created jobs for other young people in our community.",
      rating: 5,
      program: "Youth Entrepreneurship Program",
    },
  ]

  const impactStats = [
    { number: "500+", label: "Lives Transformed", icon: Heart },
    { number: "50+", label: "Communities Served", icon: Users },
    { number: "95%", label: "Satisfaction Rate", icon: Star },
    { number: "1000+", label: "Testimonials Received", icon: Quote },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-blue-100 text-blue-800",
      Healthcare: "bg-green-100 text-green-800",
      Empowerment: "bg-purple-100 text-purple-800",
      Community: "bg-orange-100 text-orange-800",
      Volunteer: "bg-pink-100 text-pink-800",
      Youth: "bg-cyan-100 text-cyan-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories of Impact</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear directly from the people whose lives have been transformed through our programs. These are the voices
            that inspire us to continue our mission.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="space-y-2">
                  <IconComponent className="w-8 h-8 text-deep-pink mx-auto" />
                  <div className="text-3xl font-bold text-royal-plum">{stat.number}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-plum mb-4">What People Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real stories from beneficiaries, volunteers, partners, and community leaders who have experienced our work
              firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={300}
                      height={300}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg text-royal-plum">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role} • {testimonial.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(testimonial.category)}>{testimonial.category}</Badge>
                    <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="w-6 h-6 text-deep-pink mb-3" />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="text-sm text-gray-600 font-medium">Program: {testimonial.program}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-royal-plum mb-4">Video Stories</h2>
            <p className="text-lg text-gray-700">Watch our beneficiaries share their transformation stories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Video testimonial ${video}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-deep-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-deep-pink/90 transition-colors">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-royal-plum mb-2">
                    {video === 1 && "Amina's Education Journey"}
                    {video === 2 && "Community Health Transformation"}
                    {video === 3 && "From Training to Business Success"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {video === 1 && "Watch Amina share how education changed her life"}
                    {video === 2 && "See the impact of our mobile health clinics"}
                    {video === 3 && "Fatima's journey from student to entrepreneur"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-royal-plum text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have you been impacted by our work? We'd love to hear from you and share your story to inspire others and
            show the real impact of our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-deep-pink hover:bg-deep-pink/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Submit Your Story
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-royal-plum px-8 py-3 rounded-md font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
