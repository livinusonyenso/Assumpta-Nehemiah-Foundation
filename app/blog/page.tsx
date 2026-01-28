import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Transforming Education in Rural Nigeria: A Year of Impact",
    excerpt:
      "Reflecting on our education program's achievements and the lives we've touched across rural Nigerian communities in the past year.",
    author: "Dr. Sarah Assumpta",
    date: "December 15, 2024",
    category: "Education",
    image: "https://images.unsplash.com/photo-1744809495173-217ca4faa8bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGRyZW4lMjBsZWFybmluZyUyMGluJTIwQWZyaWNhfGVufDB8fDB8fHww?height=400&width=800",
    readTime: "5 min read",
  }

  const blogPosts = [
    {
      id: 2,
      title: "Mobile Health Clinics: Bringing Healthcare to Remote Areas",
      excerpt:
        "How our mobile health initiative is addressing healthcare gaps in underserved communities across West Africa.",
      author: "Dr. Michael Adebayo",
      date: "December 10, 2024",
      category: "Healthcare",
      image: "/blogImage1.jpg?height=300&width=400",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Empowering Women Through Skills Training Programs",
      excerpt:
        "Stories of transformation from our vocational training centers and how women are building sustainable livelihoods.",
      author: "Grace Okafor",
      date: "December 5, 2024",
      category: "Empowerment",
      image: "/blogImage2.jpg?height=300&width=400",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Clean Water Initiative: Progress Report 2024",
      excerpt: "An update on our clean water projects and the communities that now have access to safe drinking water.",
      author: "David Adebayo",
      date: "November 28, 2024",
      category: "Water & Sanitation",
      image: "https://upload.wikimedia.org/wikipedia/en/6/69/Villagers_using_a_water_pump_%28Balogun%2C_Nigeria%29.jpg?height=300&width=400",
      readTime: "3 min read",
    },
    // {
    //   id: 5,
    //   title: "Partnership Spotlight: Working with Local Communities",
    //   excerpt:
    //     "How collaboration with local leaders and organizations strengthens our impact and ensures sustainability.",
    //   author: "Grace Okafor",
    //   date: "November 20, 2024",
    //   category: "Partnerships",
    //   image: "/placeholder.svg?height=300&width=400",
    //   readTime: "5 min read",
    // },
    // {
    //   id: 6,
    //   title: "Youth Entrepreneurship: Creating Future Leaders",
    //   excerpt:
    //     "Meet the young entrepreneurs who are transforming their communities through our business development programs.",
    //   author: "Michael Nehemiah",
    //   date: "November 15, 2024",
    //   category: "Youth Development",
    //   image: "/placeholder.svg?height=300&width=400",
    //   readTime: "4 min read",
    // },
  ]

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Empowerment",
    "Water & Sanitation",
    "Partnerships",
    "Youth Development",
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-blue-100 text-blue-800",
      Healthcare: "bg-green-100 text-green-800",
      Empowerment: "bg-purple-100 text-purple-800",
      "Water & Sanitation": "bg-cyan-100 text-cyan-800",
      Partnerships: "bg-orange-100 text-orange-800",
      "Youth Development": "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-plum to-deep-pink text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stories of impact, insights from the field, and updates on our mission to transform lives across Africa.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <Button className="bg-deep-pink hover:bg-deep-pink/90">Search</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-deep-pink hover:text-white hover:border-deep-pink"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-royal-plum mb-6">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(featuredPost.category)}>{featuredPost.category}</Badge>
                    <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl text-royal-plum mb-2">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-gray-700">{featuredPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <Button asChild className="bg-deep-pink hover:bg-deep-pink/90">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-royal-plum mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className={`absolute top-3 left-3 ${getCategoryColor(post.category)}`}>{post.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-lg text-royal-plum hover:text-deep-pink">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-deep-pink hover:text-deep-pink/80">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-royal-plum text-royal-plum hover:bg-royal-plum hover:text-white bg-transparent"
          >
            Load More Articles
          </Button>
        </div> */}
      </div>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-royal-plum text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest stories, updates, and insights from our work in the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
            <Button className="bg-deep-pink hover:bg-deep-pink/90">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
