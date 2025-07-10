import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-royal-plum text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Assumpta Nehemiah Foundation</h3>
            <p className="text-gray-300 mb-4">
              Transforming lives through hope, education, and community empowerment. Together, we build stronger, more
              resilient communities across Africa.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-deep-pink hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-deep-pink hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-deep-pink hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-deep-pink">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-deep-pink">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-deep-pink">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-deep-pink">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-deep-pink">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-deep-pink" />
                <span className="text-gray-300">info@anf.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-deep-pink" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-deep-pink" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Assumpta Nehemiah Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
