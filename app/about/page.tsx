import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Target, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Assumpta",
      role: "Founder & Executive Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years in community development, Dr. Assumpta leads our mission with passion and expertise.",
    },
    {
      name: "Michael Nehemiah",
      role: "Program Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael oversees our educational programs and ensures quality implementation across all initiatives.",
    },
    {
      name: "Grace Okafor",
      role: "Community Outreach Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Grace builds bridges between our foundation and the communities we serve.",
    },
    {
      name: "David Adebayo",
      role: "Finance & Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David ensures transparency and efficiency in all our financial operations.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Foundation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our journey, values, and the dedicated team working to transform lives across Africa.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-royal-plum mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, the Assumpta Nehemiah Foundation emerged from a simple yet powerful vision: to create
                lasting change in underserved communities across Africa. What started as a small initiative to support
                local education has grown into a comprehensive organization addressing multiple facets of community
                development.
              </p>
              <p className="text-gray-700 mb-4">
                Our founders, inspired by their own experiences growing up in rural Nigeria, understood firsthand the
                challenges faced by communities lacking access to quality education, healthcare, and economic
                opportunities.
              </p>
              <p className="text-gray-700">
                Today, we operate across multiple countries, partnering with local organizations and governments to
                implement sustainable solutions that empower communities to thrive independently.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our foundation's journey"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-deep-pink mx-auto mb-4" />
                <CardTitle className="text-royal-plum">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To provide sustainable solutions to poverty, illiteracy, and social inequality through
                  community-driven programs that empower individuals and transform lives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="w-12 h-12 text-deep-pink mx-auto mb-4" />
                <CardTitle className="text-royal-plum">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A world where every individual has access to quality education, healthcare, and opportunities to reach
                  their full potential, regardless of their background.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-deep-pink mx-auto mb-4" />
                <CardTitle className="text-royal-plum">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-deep-pink text-deep-pink">
                    Compassion
                  </Badge>
                  <Badge variant="outline" className="border-deep-pink text-deep-pink">
                    Integrity
                  </Badge>
                  <Badge variant="outline" className="border-deep-pink text-deep-pink">
                    Excellence
                  </Badge>
                  <Badge variant="outline" className="border-deep-pink text-deep-pink">
                    Sustainability
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-plum mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700">Dedicated professionals working tirelessly to make a difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-royal-plum">{member.name}</CardTitle>
                  <CardDescription className="text-deep-pink font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 bg-royal-plum text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg">Real stories of transformation and hope</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Education Program Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  "Through the scholarship program, over 500 children have completed their primary education, with 95%
                  advancing to secondary school. This represents a 300% increase in educational attainment in our target
                  communities."
                </p>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-deep-pink" />
                  <span className="text-sm">500+ Students Supported</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Healthcare Initiative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  "Our mobile health clinics have provided medical care to over 10,000 individuals in remote areas,
                  reducing preventable diseases by 60% and improving overall community health outcomes."
                </p>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-deep-pink" />
                  <span className="text-sm">10,000+ Lives Touched</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
