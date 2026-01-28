import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Briefcase, Home, Utensils, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: "Education Support Program",
      description:
        "Providing scholarships, school supplies, and educational infrastructure to underserved communities.",
      icon: BookOpen,
      status: "Active",
      beneficiaries: "500+ Students",
      location: "Nigeria, Ghana, Kenya",
      image: "https://www.developafrica.org/files/kids-excitement-school-supplies.jpg?height=300&width=400",
      details:
        "Our flagship program focuses on breaking the cycle of poverty through education. We provide full scholarships, learning materials, and support infrastructure including libraries and computer labs.",
    },
    {
      id: 2,
      title: "Healthcare Access Initiative",
      description: "Mobile clinics and health education programs bringing medical care to rural areas.",
      icon: Heart,
      status: "Active",
      beneficiaries: "10,000+ Patients",
      location: "Rural Nigeria, Uganda",
      image: "https://cdn.vanguardngr.com/wp-content/uploads/2023/05/Pix-4-scaled.jpg?height=300&width=400",
      details:
        "Through our mobile health units, we provide primary healthcare, preventive care, and health education to communities with limited access to medical facilities.",
    },
    {
      id: 3,
      title: "Skills Development Program",
      description: "Vocational training and entrepreneurship support for youth and adults.",
      icon: Briefcase,
      status: "Active",
      beneficiaries: "300+ Trainees",
      location: "Lagos, Accra, Nairobi",
      image: "https://pindfoundation.org/wp-content/uploads/2024/03/pind-yep.jpg?height=300&width=400",
      details:
        "We offer training in high-demand skills including tailoring, carpentry, digital literacy, and small business management to promote economic independence.",
    },
    {
      id: 4,
      title: "Housing & Infrastructure",
      description: "Building homes and community infrastructure for displaced families.",
      icon: Home,
      status: "Ongoing",
      beneficiaries: "150+ Families",
      location: "Northern Nigeria",
      image: "https://bullionriseconsult.com/wp-content/uploads/2024/06/site-preparation-and-foundation-work-bullionrise-consult-1024x576.webp?height=300&width=400",
      details:
        "Providing safe, affordable housing and essential infrastructure like wells, schools, and community centers for families affected by conflict or natural disasters.",
    },
    {
      id: 5,
      title: "Nutrition & Food Security",
      description: "Addressing malnutrition and food insecurity through sustainable agriculture.",
      icon: Utensils,
      status: "Active",
      beneficiaries: "2,000+ Individuals",
      location: "Rural Communities",
      image: "https://www.vsointernational.org/sites/default/files/styles/600x400/public/RS58435__52H2998-lpr.jpg?itok=_XoRrOtj?height=300&width=400",
      details:
        "Teaching sustainable farming techniques, providing seeds and tools, and establishing community gardens to ensure long-term food security.",
    },
    {
      id: 6,
      title: "Clean Water Project",
      description: "Drilling boreholes and installing water systems in underserved areas.",
      icon: Droplets,
      status: "Expanding",
      beneficiaries: "5,000+ People",
      location: "Chad, Niger, Mali",
      image: "https://www.planet.gr/sites/default/files/2024-12/Nigeria%201.jpg?height=300&width=400",
      details:
        "Providing access to clean, safe drinking water through borehole drilling, water treatment systems, and hygiene education programs.",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Ongoing":
        return "bg-blue-100 text-blue-800"
      case "Expanding":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive initiatives designed to address the root causes of poverty and inequality while empowering
            communities to build sustainable futures.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-royal-plum mb-4">Making Impact Across Multiple Sectors</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our holistic approach addresses education, healthcare, economic empowerment, and basic needs to create
              lasting change in the communities we serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon
              return (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="w-1/3">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <IconComponent className="w-6 h-6 text-deep-pink" />
                            <Badge className={getStatusColor(program.status)}>{program.status}</Badge>
                          </div>
                        </div>
                        <CardTitle className="text-royal-plum text-xl">{program.title}</CardTitle>
                        <CardDescription className="text-gray-600">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Beneficiaries:</span>
                            <span className="font-medium text-deep-pink">{program.beneficiaries}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Location:</span>
                            <span className="font-medium">{program.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">{program.details}</p>
                        <Button className="bg-deep-pink hover:bg-deep-pink/90 w-full">Learn More</Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-royal-plum mb-4">Program Impact</h2>
            <p className="text-lg text-gray-700">Measurable results across all our initiatives</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-deep-pink mb-2">18,000+</div>
              <div className="text-gray-700">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-deep-pink mb-2">6</div>
              <div className="text-gray-700">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-deep-pink mb-2">8</div>
              <div className="text-gray-700">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-deep-pink mb-2">95%</div>
              <div className="text-gray-700">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 bg-royal-plum text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Programs</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your contribution can help us expand these vital programs and reach even more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-deep-pink hover:bg-deep-pink/90">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-royal-plum bg-transparent"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
