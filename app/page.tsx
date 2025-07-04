"use client"

import { useState } from "react"
import { Heart, Shield, Bell, Gift, Lock, Star, ArrowRight, Check, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: "Partner Profile",
      description: "Store your loved one's details, photos, and important dates in one secure place.",
    },
    {
      icon: <Gift className="h-6 w-6 text-purple-500" />,
      title: "Gift Ideas & Wishlists",
      description: "Never forget their favorite things. Track gift ideas and surprise them perfectly.",
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-500" />,
      title: "Smart Reminders",
      description: "Get notified about birthdays, anniversaries, and special occasions in advance.",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Privacy & Security",
      description: "Your data is encrypted and protected with PIN or biometric authentication.",
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: "Custom Categories",
      description: "Organize information by clothing sizes, favorites, allergies, and more.",
    },
    {
      icon: <Lock className="h-6 w-6 text-indigo-500" />,
      title: "Secure Storage",
      description: "Local or encrypted cloud storage options to keep your memories safe.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Finally, I can remember all the little details that make my husband smile. This app has saved our anniversaries!",
      rating: 5,
    },
    {
      name: "Michael R.",
      text: "The reminder feature is a lifesaver. I never miss important dates anymore, and my wife thinks I'm the most thoughtful person ever.",
      rating: 5,
    },
    {
      name: "Emma L.",
      text: "Love how secure and private this app is. I can store personal details without worrying about privacy.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 font-system">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-semibold text-gray-900">My Partner</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Reviews
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <Link href="/auth">
                <Button variant="outline" className="mr-2 bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-pink-500 hover:bg-pink-600">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Reviews
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <Link href="/auth">
                    <Button variant="outline" className="w-full bg-transparent">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth">
                    <Button className="w-full bg-pink-500 hover:bg-pink-600">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Never Forget What
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}
                Matters Most
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Keep your partner's details, preferences, and special moments organized in one secure place. Be the
              thoughtful partner they deserve with smart reminders and personalized insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-lg px-8 py-3">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Free to start • No credit card required</p>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                      <p className="text-sm text-gray-600">Birthday in 12 days</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Favorite Color</span>
                      <span className="font-medium">Sage Green</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Shoe Size</span>
                      <span className="font-medium">8.5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Favorite Restaurant</span>
                      <span className="font-medium">The Italian Corner</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Bell className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-blue-900">Upcoming Reminder</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Sarah's birthday is coming up! Consider getting her favorite perfume.
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-4 w-4 text-pink-500" />
                      <span className="font-medium text-pink-900">Gift Ideas</span>
                    </div>
                    <p className="text-sm text-pink-700">Kindle Paperwhite, Yoga mat, Concert tickets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Be Thoughtful</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you remember, organize, and celebrate what matters most in your
              relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Loved by Thoughtful Partners</h2>
            <p className="text-xl text-gray-600">
              See how My Partner is helping couples strengthen their relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free and upgrade when you're ready for more features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                  <p className="text-gray-600">Perfect for getting started</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>One partner profile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic reminders</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>50 custom fields</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>PIN protection</span>
                  </li>
                </ul>
                <Link href="/auth">
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-gradient-to-br from-pink-500 to-purple-600 text-white border-0 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <div className="text-4xl font-bold mb-2">$4.99</div>
                  <p className="text-pink-100">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span>Multiple partner profiles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span>Advanced reminders</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span>Unlimited custom fields</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span>Biometric authentication</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span>Cloud sync & backup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span>Export to PDF</span>
                  </li>
                </ul>
                <Link href="/auth">
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">Start Premium Trial</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Become the Most Thoughtful Partner?
          </h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of couples who never miss a special moment</p>
          <Link href="/auth">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-lg px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Start free forever</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-lg font-semibold">My Partner</span>
              </div>
              <p className="text-gray-400">
                Helping couples stay connected through thoughtful organization and smart reminders.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 My Partner. All rights reserved. Made with ❤️ for thoughtful couples.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
