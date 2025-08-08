'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Phone, TrendingUp, User, BookOpen, Tag, Sparkles } from 'lucide-react'
import Header from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Pregnancy Ultrasound",
    excerpt: "A comprehensive guide to what happens during your ultrasound appointment and what the images show.",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "",
    category: "Medical Guide",
    trending: true,
    image: "/blog1.jpg"
  },
  {
    id: 2,
    title: "Early Pregnancy: Signs and Symptoms",
    excerpt: "Learn to recognize early pregnancy symptoms and when to seek professional medical confirmation.",
    date: "January 12, 2025",
    readTime: "4 min read",
    author: "",
    category: "Women's Health",
    trending: false,
    image: "/blog2.jpg"
  },
  {
    id: 3,
    title: "WIC and Medicaid Documentation Requirements",
    excerpt: "Navigate the documentation process for government assistance programs with our help.",
    date: "January 10, 2025",
    readTime: "6 min read",
    author: "",
    category: "Documentation",
    trending: true,
    image: "/blod3.jpg"
  },
  {
    id: 4,
    title: "Cash-Pay Healthcare Options in Phoenix",
    excerpt: "Explore affordable healthcare alternatives for uninsured patients in the Phoenix area.",
    date: "January 8, 2025",
    readTime: "7 min read",
    author: "",
    category: "Healthcare Access",
    trending: false,
    image: "/blog4.jpg"
  },
  {
    id: 5,
    title: "When to Seek Immediate Medical Care",
    excerpt: "Important information about pregnancy warning signs that require prompt medical attention.",
    date: "January 5, 2025",
    readTime: "5 min read",
    author: "",
    category: "Medical Safety",
    trending: false,
    image: "/blod5.jpg"
  },
  {
    id: 6,
    title: "Preparing for Your First Prenatal Visit",
    excerpt: "Essential preparation tips for your first prenatal appointment and what to expect.",
    date: "January 3, 2025",
    readTime: "8 min read",
    author: "",
    category: "Prenatal Care",
    trending: true,
    image: "/blog6.jpg"
  }
]

const categories = ['All', 'Pregnancy', 'Ultrasound', "Women's Health", 'Medical Guide', 'Documentation', 'Healthcare Access', 'Medical Safety', 'Prenatal Care'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section - Modern Split Layout */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl border border-teal-200/50 dark:border-teal-800/50"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-teal-500 rounded-full mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Health Resources & Expert Insights
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Medical Resources
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  & Health Guides
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-light">
                Expert medical insights and guidance from <span className="font-semibold text-teal-600"></span> on pregnancy, ultrasounds, and women's healthcare.
              </p>
             
            </motion.div>
            
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2"></h3>
                <p className="text-teal-600 font-semibold mb-4">OB-GYN Specialist & Medical Writer</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Board-certified physician with over 10 years of experience in women's healthcare and pregnancy care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.div 
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setActiveCategory(category)}
                  variant="outline"
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 border-teal-200/50 dark:border-teal-800/50 hover:shadow-lg hover:shadow-teal-100/50 dark:hover:shadow-teal-900/20'
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-gray-700/80 border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-gray-900/20'
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          {activeCategory !== 'All' && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Showing posts in: <span className="text-teal-600 dark:text-teal-400">{activeCategory}</span>
            </h2>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-teal-100/30 dark:hover:shadow-teal-900/10">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg shadow-teal-500/20 dark:shadow-teal-900/30"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                    {post.trending && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-teal-600 dark:text-teal-400 mb-3 font-medium">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1.5" />
                        {post.author}
                      </span>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800/50">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
            ) : (
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No posts found</h3>
                <p className="text-gray-500 dark:text-gray-400">We couldn't find any posts in this category.</p>
                <Button 
                  variant="ghost" 
                  className="mt-4 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30"
                  onClick={() => setActiveCategory('All')}
                >
                  View all posts
                </Button>
              </div>
            )}
          </div>
          
          {/* <div className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Load More Articles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div> */}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Get the latest medical insights and health tips delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SameDayUltrasound<span className="text-teal-400">AZ</span></h3>
                </div>
              </div>
              <p className="text-gray-300">
                Professional same-day ultrasound services in Phoenix, Arizona.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>(623) 846-7597</p>
                <p>care@azwomenob.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <div className="space-y-2 text-gray-300">
                <p>4700 N 51st Ave</p>
                <p>Phoenix, AZ 85031</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SameDayUltrasoundAZ.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
