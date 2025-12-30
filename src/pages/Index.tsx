import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, BarChart3, Users, Zap, Shield, Globe, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Drag & Drop Builder",
      description: "Create complex surveys in minutes with our intuitive visual builder. No coding required."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
      title: "Real-time Analytics",
      description: "Visualize responses instantly with interactive charts and exportable reports."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Team Collaboration",
      description: "Invite team members, assign roles, and manage surveys together seamlessly."
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-600" />,
      title: "Multi-language Support",
      description: "Reach a global audience with built-in translation and localization tools."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Enterprise Security",
      description: "GDPR compliant data protection with advanced encryption and access controls."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-rose-600" />,
      title: "Smart Logic",
      description: "Create dynamic paths with advanced skip logic and branching conditions."
    }
  ];

  const testimonials = [
    {
      quote: "SurveyCraft transformed how we gather customer feedback. The analytics are a game-changer.",
      author: "Sarah Johnson",
      role: "Product Manager at TechFlow",
      avatar: "SJ"
    },
    {
      quote: "The intuitive builder saved us countless hours. It's the most user-friendly tool we've used.",
      author: "Michael Chen",
      role: "Director of Marketing at ScaleUp",
      avatar: "MC"
    },
    {
      quote: "Enterprise-grade security features were a must for us. SurveyCraft delivered beyond expectations.",
      author: "Emma Davis",
      role: "CTO at SecureNet",
      avatar: "ED"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                SurveyCraft
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-white opacity-50 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-indigo-50 to-white opacity-50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              New: AI-Powered Analysis 2.0
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
              Craft Beautiful Surveys <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Without Limits
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empower your team with the most intuitive survey builder. Collect data, gain insights, and drive growth—all in one platform.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 hover:scale-105 transition-all w-full sm:w-auto">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg hover:bg-gray-50 border-gray-200 w-full sm:w-auto">
                  View Live Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            {['Acme Corp', 'GlobalTech', 'Nebula', 'Velocity', 'FoxRun'].map((name) => (
              <span key={name} className="text-xl font-bold font-serif text-gray-400 hover:text-gray-800 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for modern teams. From simple forms to complex enterprise surveys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-gray-50 rounded-xl w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform scale-150 rotate-12 translate-y-20 translate-x-20" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to transform your data?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join 10,000+ companies using SurveyCraft to make better decisions. Start your free trial today.
              </p>
              <Link to="/register">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg shadow-lg hover:scale-105 transition-all">
                  Create Your First Survey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <span className="text-2xl font-bold text-gray-900 mb-4 block">SurveyCraft</span>
              <p className="text-gray-500 text-sm">
                Making data collection effortless and insightful for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Templates</a></li>
                <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Guides</a></li>
                <li><a href="#" className="hover:text-blue-600">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 SurveyCraft. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">GitHub</a>
              <a href="#" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
