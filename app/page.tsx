"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Star,
  Search,
  Phone,
  Eye,
  Globe,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Menu,
  Send,
  Mail,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function WebDesignServicesPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<number | null>(null)
  const [expandedPricing, setExpandedPricing] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Added state for mobile menu
  const [consultationPopupOpen, setConsultationPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const togglePricing = (plan: string) => {
    setExpandedPricing((prev) => (prev === plan ? null : plan))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    setConsultationPopupOpen(false)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const portfolioItems = [
    {
      name: "Coastal Dental Groups",
      image: "/coastal-dental-groups-website-design-with-dentist-.jpg",
      description:
        "A fully custom designed dental practice website that focuses on the UX, UI, and Content marketing strategy.",
      fullDescription:
        "It's a responsive and user-friendly custom design dental website that converts 10 times better than other website design companies who design the website for dental practices.",
      price: "$199",
      features: [
        "Free Mockup Design",
        "Responsive Design",
        "Onpage SEO optimized",
        "Graphics",
        "Chat Support",
        "24/7 Email Support",
      ],
    },
    {
      name: "Immigration Med Exams",
      image: "/immigration-medical-exams-website-blue-background-.jpg",
      description:
        "A fully custom designed the small business website that focuses on the UX, UI, and Content marketing strategy.",
      fullDescription:
        "It's a responsive and user-friendly custom design small business website that converts 10 times better than other website design companies who design the website for small businesses.",
      price: "$150",
      features: [
        "Free Mockup Design",
        "Responsive Design",
        "Onpage SEO optimized",
        "Graphics",
        "Chat Support",
        "24/7 Email Support",
      ],
    },
    {
      name: "New Era Consulting",
      image: "/new-era-consulting-website-professional-business-w.jpg",
      description: "Professional business consulting website with modern design and lead generation focus.",
      fullDescription:
        "A responsive and conversion-optimized consulting website that helps establish credibility and attract high-value clients through strategic design and content.",
      price: "$299",
      features: [
        "Free Mockup Design",
        "Responsive Design",
        "Onpage SEO optimized",
        "Graphics",
        "Chat Support",
        "24/7 Email Support",
      ],
    },
    {
      name: "Plumbing & Heating Service",
      image: "/plumbing-and-heating-service-website-green-van-tru.jpg",
      description: "Local service business website designed to generate emergency service calls and appointments.",
      fullDescription:
        "A mobile-first responsive website that makes it easy for customers to request emergency services and schedule appointments, resulting in increased call volume and bookings.",
      price: "$150",
      features: [
        "Free Mockup Design",
        "Responsive Design",
        "Onpage SEO optimized",
        "Graphics",
        "Chat Support",
        "24/7 Email Support",
      ],
    },
    {
      name: "Private Car Transportation",
      image: "/private-car-transportation-service-website-luxury-.jpg",
      description: "Luxury transportation service website with online booking system and fleet showcase.",
      fullDescription:
        "An elegant and sophisticated website design that reflects the premium nature of the service, with seamless booking functionality and detailed fleet information.",
      price: "$299",
      features: [
        "Free Mockup Design",
        "Responsive Design",
        "Onpage SEO optimized",
        "Online Booking System",
        "24/7 Email Support",
      ],
    },
    {
      name: "South Coast Enterprises",
      image: "/south-coast-enterprises-laboratory-furnishings-web.jpg",
      description: "B2B laboratory furnishings website with comprehensive product catalog and quote system.",
      fullDescription:
        "A professional B2B website designed to showcase laboratory equipment and furnishings, with an integrated quote request system that streamlines the sales process.",
      price: "$399",
      features: [
        "Free Mockup Design",
        "Responsive Design",
        "Onpage SEO optimized",
        "Product Catalog",
        "Quote Request System",
        "24/7 Email Support",
      ],
    },
  ]

  const handlePrevious = () => {
    if (selectedPortfolio !== null && selectedPortfolio > 0) {
      setSelectedPortfolio(selectedPortfolio - 1)
    }
  }

  const handleNext = () => {
    if (selectedPortfolio !== null && selectedPortfolio < portfolioItems.length - 1) {
      setSelectedPortfolio(selectedPortfolio + 1)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image
              src="https://topposition.com/wp-content/uploads/2023/01/top-position-logo.svg"
              alt="Top Position - Digital Marketing Agency"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden rounded-full w-10 h-10 border border-gray-300 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="hidden lg:flex rounded-full w-10 h-10 border border-gray-300 hover:bg-gray-50"
            >
              <Search className="w-4 h-4 text-gray-700" />
            </Button>
            <Button
              size="icon"
              className="rounded-full w-10 h-10 hover:bg-blue-700 bg-blue-600"
              onClick={() => (window.location.href = "tel:+13237666998")}
            >
              <Phone className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Phone number bar - Desktop only */}
        <div className="hidden md:block bg-gray-50 border-t border-gray-200 py-2 text-center">
          <a href="tel:+13237666998" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
            Call now +1(323)-766-6998
          </a>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Contact
              </button>
              <a
                href="tel:+13237666998"
                className="text-left bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium py-3 px-4 rounded-lg text-center"
              >
                Call +1(323)-766-6998
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div
          className="hidden md:block absolute right-0 top-0 w-1/2 h-full bg-blue-600"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>

        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-full">
              <p className="text-blue-600 font-semibold mb-4 uppercase text-xs md:text-sm tracking-wide break-words">
                Make it easier for your target customers to find you online
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words">
                Web Design and Development Services
              </h1>

              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed break-words">
                Top Position provides responsive web design & development services to help you get more customers
                online.
              </p>

              <Button
                onClick={() => setConsultationPopupOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-md shadow-lg w-full sm:w-auto"
              >
                Book A Free Consultation
              </Button>

              <Card className="mt-12 p-4 md:p-6 bg-white shadow-lg border-0 max-w-full">
                <div className="flex items-start gap-3 md:gap-4">
                  <Image
                    src="/professional-business-man-headshot-portrait.jpg"
                    alt="Vadim Pechersky"
                    width={60}
                    height={60}
                    className="rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 break-words">Vadim Pechersky</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 break-words">
                      Director at Rush In Documentation
                    </p>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed break-words">
                      The team of professionals not only successfully optimized the web resource but also created web
                      pages for the advertising
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative hidden md:block">
              <div className="relative z-10">
                <div className="absolute top-4 md:top-8 right-8 md:right-12 bg-blue-900 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold shadow-lg z-20 whitespace-nowrap">
                  Website turnkey
                </div>

                <div className="flex items-end gap-4 justify-center">
                  {/* Mobile mockup with real screenshot */}
                  <div className="relative w-48 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-2xl flex items-center justify-center">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    <Image
                      src="/mobile-notary-immigration-website-design-blue-yell.jpg"
                      alt="Mobile website mockup"
                      width={192}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Desktop mockup with real screenshot */}
                  <div className="relative w-80 h-56 bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                    <div className="h-6 bg-gray-800 flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <Image
                      src="/desktop-notary-immigration-website-design-professi.jpg"
                      alt="Desktop website mockup"
                      width={320}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900">Our clients</h2>

          <div className="relative">
            <div className="flex animate-marquee">
              {/* First set of logos */}
              <div className="flex items-center gap-12 md:gap-16 lg:gap-20 px-6 md:px-10 flex-shrink-0">
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-Factoring.svg"
                    alt="Factoring Express"
                    width={140}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-eauclare.svg"
                    alt="Eau Claire"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-Rent.svg"
                    alt="Rent for Event"
                    width={180}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-RushIn.svg"
                    alt="Rush In Documentation Center"
                    width={160}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-LAWellness.svg"
                    alt="LA Wellness Home"
                    width={140}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-PPT.svg"
                    alt="PPT Pacific Plumbing Team"
                    width={160}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-emulate.svg"
                    alt="Emulate Treatment Center"
                    width={140}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-PURE.svg"
                    alt="Pure"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-rock.svg"
                    alt="Rock"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 md:gap-16 lg:gap-20 px-6 md:px-10 flex-shrink-0">
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-Factoring.svg"
                    alt="Factoring Express"
                    width={140}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-eauclare.svg"
                    alt="Eau Claire"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-Rent.svg"
                    alt="Rent for Event"
                    width={180}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-RushIn.svg"
                    alt="Rush In Documentation Center"
                    width={160}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-LAWellness.svg"
                    alt="LA Wellness Home"
                    width={140}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-PPT.svg"
                    alt="PPT Pacific Plumbing Team"
                    width={160}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-emulate.svg"
                    alt="Emulate Treatment Center"
                    width={140}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-PURE.svg"
                    alt="Pure"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="https://topposition.com/wp-content/uploads/2024/08/logo-rock.svg"
                    alt="Rock"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-900">
            How our web development services work for your business
          </h2>

          <div className="max-w-3xl mx-auto mb-12 md:mb-16 relative">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt=""
              width={80}
              height={80}
              className="absolute -left-16 top-0 opacity-20"
            />
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt=""
              width={60}
              height={60}
              className="absolute -right-12 top-12 opacity-20"
            />
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt=""
              width={80}
              height={80}
              className="absolute left-1/4 -top-8 opacity-20"
            />
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt=""
              width={100}
              height={100}
              className="absolute -left-8 bottom-0 opacity-20"
            />
            <div className="absolute right-1/4 -bottom-8 text-6xl opacity-20 font-mono text-gray-400">JS</div>

            <Card className="bg-blue-600 text-white p-12 rounded-3xl shadow-2xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">✨</div>
                <h3 className="text-3xl font-bold">Fun fact</h3>
              </div>
              <p className="text-xl leading-relaxed">
                Did you know that{" "}
                <span className="font-bold">56% of consumers don't trust a business without a website?</span>
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              At Top Position, this is the problem we solve. Our web development solutions are tailored to produce
              responsive, fast-loading, and intuitive websites that your target customers will love.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We will help you launch a website that works on all screen sizes. This means customers can book or buy
              from your business on their computer, phone, or tablet, which translates to more income for your business!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              So, if you're looking for the next best investment for your business, our professional web development
              services are surely a smart choice.
            </p>
          </div>
        </div>
      </section>

      {/* Why Your Business Needs Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-blue-900">
            Why does your business need a responsive website?
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            A responsive website design adjusts and functions on all screen sizes, giving your potential customers the
            best user experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-shadow border-0 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">First impressions matter</h3>
              <p className="text-gray-600 leading-relaxed">
                If you want to leave a good impression on your potential customers, investing in professional web design
                services would be a smart move. According to research, websites influence 97% of customers' purchasing
                decisions, and 75% of internet users judge a business's credibility based on their website design.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-shadow border-0 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Get found online</h3>
              <p className="text-gray-600 leading-relaxed">
                To date, there are over 2.64 billion digital shoppers worldwide. And guess what? The only thing
                separating you and this giant pool of customers is a responsive website! With a well-designed website,
                your business can be easily found online by customers who are actively searching for products or
                services.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-shadow border-0 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Mobile is the future</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 55% of internet users use their mobile phones to buy online. Good thing our full-service web design
                can give you a mobile-optimized online presence, so your customers will find it easy to do business with
                you!
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-shadow border-0 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Drive more conversions</h3>
              <p className="text-gray-600 leading-relaxed">
                Your target customers are searching online and finding your competitors! Now is the best time to explore
                full-service website development so your business will also appear as the top choice in their search
                results.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-shadow border-0 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Get more leads</h3>
              <p className="text-gray-600 leading-relaxed">
                Our web design and development service makes it easy for your customers to take action. You'll get more
                orders, sign-ups, quote requests, scheduled consultations, and appointments! Your business will be
                booked with a steady flow of customers coming from your website.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-shadow border-0 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Enhance user experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Did you know that slow-loading websites cost retailers $2.6 billion in sales annually? Your business
                doesn't have to be part of this number! Our web developer service will ensure that you have a speedy
                website for the best user experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee and Detailed Pricing Section */}
      <section
        id="pricing"
        className="py-12 md:py-16 lg:py-20 bg-white md:bg-gradient-to-br md:from-blue-500 md:to-blue-700 relative"
      >
        <div className="container mx-auto px-4 relative z-20">
          {/* Guarantee Banner */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="border-2 border-dashed border-blue-300 md:border-white/40 rounded-2xl p-6 md:p-8 text-center bg-blue-50 md:bg-blue-600/30 md:backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 md:text-white mb-2">
                100% Satisfaction and Money Back Guarantee
              </h3>
              <p className="text-xl md:text-2xl font-bold text-orange-500 md:text-orange-400">Refund Policy</p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* STARTER */}
            <Card className="p-6 bg-blue-600 text-white border-2 border-blue-400 rounded-2xl shadow-xl overflow-hidden relative z-20">
              <h3 className="text-2xl font-bold mb-2">STARTER</h3>
              <p className="text-blue-100 text-sm mb-6">Perfect for your blog</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl line-through text-blue-300">$199</span>
                  <span className="text-4xl font-bold">$150</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  Show Sample Websites
                </Button>
                <Button
                  onClick={() => togglePricing("starter")}
                  variant="outline"
                  className="w-full bg-white text-blue-900 hover:bg-gray-100 font-semibold"
                >
                  {expandedPricing === "starter" ? "SHOW LESS INFO" : "SHOW MORE INFO"}
                </Button>
              </div>

              <p className="text-sm text-blue-100 mb-6">Up to 6 Page Custom Design</p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedPricing === "starter" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-blue-700 text-white -mx-6 px-6 py-6 mb-6 space-y-3 text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                  <p className="font-semibold">6 Page Custom Web Design</p>
                  <p>SEO Friendly Design</p>
                  <p>Free Basic Logo Design</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">
                    Easy Content Management (CMS)
                  </p>
                  <p>Responsive Design and Mobile Friendly</p>
                  <p>Professional Contact Form and Call Action</p>
                  <p>Social Media and Google Map Integration</p>
                  <p>Professional and Clean Look</p>
                  <p>Slider / Banner</p>
                  <p>Up To 2 Revision</p>
                  <p>Delivery Within 7 Business Days</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">Each Additional Page $35</p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                Order Now
              </Button>
            </Card>

            {/* REGULAR - Highlighted */}
            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0 rounded-2xl shadow-2xl transform lg:scale-105 overflow-hidden relative z-20">
              <h3 className="text-2xl font-bold mb-2">REGULAR</h3>
              <p className="text-green-100 text-sm mb-6">Everything you need</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl line-through text-green-200">$299</span>
                  <span className="text-4xl font-bold">$199</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Show Sample Websites
                </Button>
                <Button
                  onClick={() => togglePricing("regular")}
                  variant="outline"
                  className="w-full bg-white text-green-900 hover:bg-gray-100 font-semibold"
                >
                  {expandedPricing === "regular" ? "SHOW LESS INFO" : "SHOW MORE INFO"}
                </Button>
              </div>

              <p className="text-sm text-green-100 mb-6">Up to 10 Page Custom Design</p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedPricing === "regular" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-blue-700 text-white -mx-6 px-6 py-6 mb-6 space-y-3 text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                  <p className="font-semibold">10 Page Custom Web Design</p>
                  <p>SEO Friendly Design</p>
                  <p>Free Basic Logo Design</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">
                    Easy Content Management (CMS)
                  </p>
                  <p>Responsive Design and Mobile Friendly</p>
                  <p>Professional Contact Form and Call Action</p>
                  <p>Social Media and Google Map Integration</p>
                  <p>Professional and Clean Look</p>
                  <p>Slider / Banner</p>
                  <p>Up To 2 Revision</p>
                  <p>Delivery Within 10 Business Days</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">Each Additional Page $30</p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                Order Now
              </Button>
            </Card>

            {/* PLUS */}
            <Card className="p-6 bg-blue-600 text-white border-2 border-blue-400 rounded-2xl shadow-xl overflow-hidden relative z-20">
              <h3 className="text-2xl font-bold mb-2">PLUS</h3>
              <p className="text-blue-100 text-sm mb-6">Awesome capacity</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl line-through text-blue-300">$399</span>
                  <span className="text-4xl font-bold">$299</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full hover:bg-blue-700 text-white font-semibold bg-[rgba(255,104,0,1)]"
                >
                  Show Sample Websites
                </Button>
                <Button
                  onClick={() => togglePricing("plus")}
                  variant="outline"
                  className="w-full bg-white text-blue-900 hover:bg-gray-100 font-semibold"
                >
                  {expandedPricing === "plus" ? "SHOW LESS INFO" : "SHOW MORE INFO"}
                </Button>
              </div>

              <p className="text-sm text-blue-100 mb-6">Up to 16 Page Custom Design</p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedPricing === "plus" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-blue-700 text-white -mx-6 px-6 py-6 mb-6 space-y-3 text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                  <p className="font-semibold">16 Page Custom Web Design</p>
                  <p>SEO Friendly Design</p>
                  <p>Free Basic Logo Design</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">
                    Easy Content Management (CMS)
                  </p>
                  <p>Responsive Design and Mobile Friendly</p>
                  <p>Professional Contact Form and Call Action</p>
                  <p>Social Media and Google Map Integration</p>
                  <p>Professional and Clean Look</p>
                  <p>Slider / Banner</p>
                  <p>Up To 2 Revision</p>
                  <p>Delivery Within 15 Business Days</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">Each Additional Page $25</p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                Order Now
              </Button>
            </Card>

            {/* ENTERPRISE */}
            <Card className="p-6 bg-blue-600 text-white border-2 border-blue-400 rounded-2xl shadow-xl overflow-hidden relative z-20">
              <h3 className="text-2xl font-bold mb-2">ENTERPRISE</h3>
              <p className="text-blue-100 text-sm mb-6">Large corporation choice</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl line-through text-blue-300">$499</span>
                  <span className="text-4xl font-bold">$399</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full hover:bg-blue-700 text-white font-semibold bg-accent"
                >
                  Show Sample Websites
                </Button>
                <Button
                  onClick={() => togglePricing("enterprise")}
                  variant="outline"
                  className="w-full bg-white text-blue-900 hover:bg-gray-100 font-semibold"
                >
                  {expandedPricing === "enterprise" ? "SHOW LESS INFO" : "SHOW MORE INFO"}
                </Button>
              </div>

              <p className="text-sm text-blue-100 mb-6">Up to 25 Page Custom Design</p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedPricing === "enterprise" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-blue-600 text-white -mx-6 px-6 py-6 mb-6 space-y-3 text-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                  <p className="font-semibold">25 Page Custom Web Design</p>
                  <p>SEO Friendly Design</p>
                  <p>Free Basic Logo Design</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">
                    Easy Content Management (CMS)
                  </p>
                  <p>Responsive Design and Mobile Friendly</p>
                  <p>Professional Contact Form and Call Action</p>
                  <p>Social Media and Google Map Integration</p>
                  <p>Professional and Clean Look</p>
                  <p>Slider / Banner</p>
                  <p>Up To 2 Revision</p>
                  <p>Delivery Within 18 Business Days</p>
                  <p className="text-orange-400 underline cursor-pointer font-semibold">Each Additional Page $20</p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                Order Now
              </Button>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-12 md:mt-16 max-w-4xl mx-auto px-4">
            <p className="text-gray-700 md:text-white text-sm">
              *Domain and Hosting are not included in above packages.{" "}
              <a
                href="#"
                className="text-orange-500 md:text-orange-400 hover:text-orange-600 md:hover:text-orange-300 underline font-semibold"
              >
                Please contact us if you need domain and hosting
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio/Examples Section */}
      <section id="portfolio" className="py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4 md:mb-6">
            Take A Look At Our Small Business Website Design Examples
          </h2>
          <p className="text-center text-gray-300 text-base md:text-lg mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            We design the best website for small business owners at low cost. We have design business website for every
            industry from startup to corporation with 99% satisfaction rate. Check out our examples of business website
            design below.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setSelectedPortfolio(index)}>
                <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-xl font-bold text-center px-4">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-md bg-transparent"
            >
              VIEW COMPLETE PORTFOLIO
            </Button>
          </div>
        </div>
      </section>

      {/* Start of updates to the modal */}
      {selectedPortfolio !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-0 md:p-4 overflow-y-auto"
          onClick={() => setSelectedPortfolio(null)}
        >
          <div
            className="relative w-full max-w-7xl bg-gray-900 md:rounded-2xl overflow-hidden md:my-8 min-h-screen md:min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPortfolio(null)}
              className="fixed md:absolute top-2 right-2 md:top-4 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Navigation buttons - hidden on mobile, shown on desktop */}
            {selectedPortfolio > 0 && (
              <button
                onClick={handlePrevious}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {selectedPortfolio < portfolioItems.length - 1 && (
              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Modal content - Stacks vertically on mobile, two columns on desktop */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 max-h-screen md:max-h-[90vh] overflow-y-auto">
              {/* Left side - Website screenshot */}
              <div className="relative bg-gray-800 flex items-center justify-center p-4 md:p-6 lg:p-8 min-h-[40vh] md:min-h-0">
                <Image
                  src={portfolioItems[selectedPortfolio].image || "/placeholder.svg"}
                  alt={portfolioItems[selectedPortfolio].name}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Right side - Project details */}
              <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-12 flex flex-col">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-blue-400 leading-tight pr-12 md:pr-0">
                  Website Development For Small Business "{portfolioItems[selectedPortfolio].name}"
                </h3>

                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                  {portfolioItems[selectedPortfolio].description}
                </p>

                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                  {portfolioItems[selectedPortfolio].fullDescription}
                </p>

                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  <span className="font-bold text-white">Top Position</span> has small{" "}
                  <span className="font-bold text-white">business website design specialist</span> who ready to drive
                  your business forward.
                </p>

                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  If you looking for website development for small business then you are in right place. Our{" "}
                  <span className="font-bold text-white">small business website cost</span> affordable. We provide the
                  lowest price for small business web design so that a website doesn't garb your business growth.
                </p>

                {/* Price Quote */}
                <div className="bg-blue-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg mb-4 md:mb-6 inline-block">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold">
                    Price Quote: {portfolioItems[selectedPortfolio].price}
                  </p>
                </div>

                {/* Delivered features */}
                <div className="mb-6 md:mb-8">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-blue-400">
                    Top Position Delivered:
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    {portfolioItems[selectedPortfolio].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm md:text-base lg:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto pb-4 md:pb-0">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-md flex-1">
                    LAUNCH WEBSITE
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-md flex-1 bg-transparent"
                  >
                    ORDER A WEBSITE LIKE THIS
                  </Button>
                </div>

                {/* Mobile navigation arrows at bottom */}
                <div className="flex md:hidden justify-center gap-4 mt-6 pb-4">
                  {selectedPortfolio > 0 && (
                    <button
                      onClick={handlePrevious}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                  )}
                  {selectedPortfolio < portfolioItems.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End of updates to the modal */}

      {/* CTA Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to transform your online presence?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's create a website that drives results for your business
          </p>
          <Button
            onClick={() => setConsultationPopupOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-md shadow-lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {consultationPopupOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setConsultationPopupOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setConsultationPopupOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Modal content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ready to Dominate Local Search?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Get a free consultation and discover how we can help your business rank #1 in Google My Business.
              </p>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your business..."
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />

                {/* Primary CTA */}
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg rounded-lg shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Get Free Consultation
                </Button>
              </form>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => (window.location.href = "tel:+13237666998")}
                  className="py-4 text-base border-2 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => (window.location.href = "mailto:info@topposition.com")}
                  className="py-4 text-base border-2 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">Free GMB audit included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">Results in 30-60 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20%282%29-YtHfGEMIceDSNgEqbYx0YMbInx513I.png"
                alt="Top Position - Digital Marketing Agency"
                width={180}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-400">Digital Marketing Agency</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">+1(323)-766-6998</p>
              <p className="text-sm">West Palm Beach, FL</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Top Position. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
