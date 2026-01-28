import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-royal-plum to-deep-pink text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Lives Through Hope</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Assumpta Nehemiah Foundation is dedicated to empowering communities, providing education, and creating
            sustainable change across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-royal-plum hover:bg-gray-100">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-royal-plum bg-transparent"
            >
              <Link href="/programs">Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-plum mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To provide sustainable solutions to poverty, illiteracy, and social inequality through community-driven
              programs that empower individuals and transform lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600"
                alt="Community empowerment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="text-deep-pink mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-royal-plum mb-2">Compassionate Care</h3>
                  <p className="text-gray-700">We approach every initiative with empathy and understanding.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="text-deep-pink mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-royal-plum mb-2">Community Focus</h3>
                  <p className="text-gray-700">Our programs are designed with and for the communities we serve.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="text-deep-pink mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-royal-plum mb-2">Education First</h3>
                  <p className="text-gray-700">We believe education is the foundation of lasting change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-plum mb-4">Featured Programs</h2>
            <p className="text-lg text-gray-700">Making a difference through targeted initiatives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-royal-plum">Education Support</CardTitle>
                <CardDescription>Providing scholarships and educational resources</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://images.unsplash.com/photo-1627423896085-e3e694d88e40?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300"
                  alt="Education program"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Supporting underprivileged children with school fees, books, and learning materials.
                </p>
                <Button asChild className="bg-deep-pink hover:bg-deep-pink/90">
                  <Link href="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-royal-plum">Healthcare Access</CardTitle>
                <CardDescription>Bringing medical care to rural communities</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1682129941003-a982e0fa7474?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300"
                  alt="Healthcare program"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Mobile clinics and health education programs for underserved areas.
                </p>
                <Button asChild className="bg-deep-pink hover:bg-deep-pink/90">
                  <Link href="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-royal-plum">Skills Training</CardTitle>
                <CardDescription>Empowering youth with vocational skills</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://images.unsplash.com/photo-1679134015772-943d09a750ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHlvdXRoJTIwdm9jYXRpb25hbCUyMHRyYWluaW5uZyUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D?height=200&width=300"
                  alt="Skills training program"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Teaching practical skills for sustainable employment and entrepreneurship.
                </p>
                <Button asChild className="bg-deep-pink hover:bg-deep-pink/90">
                  <Link href="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-royal-plum text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg">Numbers that tell our story</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-deep-pink mb-2">500+</div>
              <div className="text-lg">Children Educated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-deep-pink mb-2">50+</div>
              <div className="text-lg">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-deep-pink mb-2">1000+</div>
              <div className="text-lg">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-deep-pink mb-2">25+</div>
              <div className="text-lg">Programs Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-royal-plum mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Your support can transform lives and build stronger communities. Every contribution, no matter the size,
            creates lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-deep-pink hover:bg-deep-pink/90">
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-royal-plum text-royal-plum hover:bg-royal-plum hover:text-white bg-transparent"
            >
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
