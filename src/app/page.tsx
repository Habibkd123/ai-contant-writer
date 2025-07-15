"use client"
import Link from 'next/link'
import { ArrowRight, Check, Star, Zap, Brain, FileText, Sparkles, Clock, Users, Shield, Play, ChevronRight } from 'lucide-react'
import { UserButton, useUser } from "@clerk/nextjs";
export default function ContentGeneratorLanding() {
  const { isSignedIn } = useUser();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ContentAI</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#templates" className="text-gray-300 hover:text-white transition-colors">
                Templates
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#examples" className="text-gray-300 hover:text-white transition-colors">
                Examples
              </Link>
            </div>

            {/* Right - Auth + CTA */}
            <div className="flex items-center space-x-4">
              {isSignedIn ? (
                <>
                <UserButton  />
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition duration-200">
                  Dashboard
                </Link>
                </>
              ) : (
                <Link href="/sign-in" className="text-gray-300 hover:text-white transition duration-200">
                  Sign In
                </Link>
              )}
              <Link
                href="/sign-up"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-purple-700 transition duration-200"
              >
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm mb-8 border border-blue-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI • Generate in Seconds
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Create Amazing
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Content</span>
              <br />
              in Seconds with AI
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into compelling blog posts, marketing copy, social media content,
              and more with our advanced AI content generator. Write 10x faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center">
                Generate Content Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="flex items-center text-white border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                <div className="text-gray-400">Faster Content Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Content Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-400">Languages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Generate Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From blog posts to ad copy, our AI creates high-quality content for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Blog Posts & Articles",
                description: "SEO-optimized long-form content that engages your audience",
                examples: ["How-to guides", "Listicles", "Industry insights"]
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Marketing Copy",
                description: "Persuasive sales copy that converts visitors into customers",
                examples: ["Product descriptions", "Landing pages", "Email campaigns"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Social Media Content",
                description: "Engaging posts optimized for every social platform",
                examples: ["Instagram captions", "Tweet threads", "LinkedIn posts"]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Ad Copy",
                description: "High-converting ads for Google, Facebook, and other platforms",
                examples: ["Google Ads", "Facebook Ads", "Display banners"]
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Website Content",
                description: "Professional web copy that builds trust and authority",
                examples: ["About pages", "Service pages", "FAQ sections"]
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Creative Writing",
                description: "Stories, scripts, and creative content for any purpose",
                examples: ["Short stories", "Video scripts", "Product names"]
              }
            ].map((contentType, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="text-blue-400 mb-4">
                  {contentType.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {contentType.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {contentType.description}
                </p>
                <div className="space-y-1">
                  {contentType.examples.map((example, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <ChevronRight className="w-3 h-3 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose ContentAI?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI technology meets intuitive design for the ultimate content creation experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast Generation",
                description: "Generate high-quality content in seconds, not hours"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Advanced AI Models",
                description: "Powered by state-of-the-art language models for superior quality"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "50+ Content Templates",
                description: "Pre-built templates for every type of content you need"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "SEO Optimized",
                description: "Built-in SEO best practices to help your content rank higher"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Multiple Languages",
                description: "Generate content in 25+ languages for global reach"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Plagiarism Free",
                description: "100% original content that passes all plagiarism checks"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your content creation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$19",
                period: "per month",
                description: "Perfect for individuals and small projects",
                features: [
                  "10,000 words/month",
                  "20+ templates",
                  "Basic AI models",
                  "Email support",
                  "Export to PDF/Word"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$49",
                period: "per month",
                description: "Best for content creators and marketers",
                features: [
                  "50,000 words/month",
                  "50+ templates",
                  "Advanced AI models",
                  "Priority support",
                  "SEO optimization",
                  "Plagiarism checker",
                  "Team collaboration"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "per month",
                description: "For agencies and large teams",
                features: [
                  "Unlimited words",
                  "All templates",
                  "Premium AI models",
                  "24/7 phone support",
                  "Custom templates",
                  "API access",
                  "White-label solution",
                  "Dedicated account manager"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-white/10'} hover:bg-white/10 transition-all transform hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Examples Section */}
      <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              See ContentAI in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real examples of content generated by our AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-white font-semibold">Blog Post Title</span>
              </div>
              <div className="bg-black/20 rounded-lg p-4 text-gray-300">
                <p className="font-semibold text-white mb-2">"10 Proven Strategies to Boost Your Email Marketing ROI in 2024"</p>
                <p className="text-sm">Email marketing continues to be one of the highest-ROI channels for businesses. In this comprehensive guide, we'll explore ten actionable strategies that can help you maximize your email marketing return on investment...</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-white font-semibold">Product Description</span>
              </div>
              <div className="bg-black/20 rounded-lg p-4 text-gray-300">
                <p className="font-semibold text-white mb-2">Premium Wireless Headphones</p>
                <p className="text-sm">Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium materials for ultimate comfort during extended listening sessions...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and businesses who are already creating amazing content with AI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="text-white border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              View All Templates
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ContentAI</span>
              </div>
              <p className="text-gray-300">
                The most advanced AI content generator for creating high-quality content in seconds.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Templates</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">API</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Content Guide</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Examples</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ContentAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}