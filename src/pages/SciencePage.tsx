import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Star, Award, Book, Heart, Users, ArrowRight, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'AI-Powered Personalization',
    description: "Our AI companions adapt to each student's unique needs, providing personalized support and guidance throughout their learning journey.",
    icon: Brain
  },
  {
    title: 'Engaging Gamification',
    description: 'Game-based elements increase motivation and participation, making emotional learning both fun and effective.',
    icon: Star
  }
];

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Evidence-Based Approach to Social-Emotional Learning
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover how Kokoro Quest leverages proven psychological principles and 
              cutting-edge technology to foster emotional intelligence and academic success.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Research-Backed Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '11%',
                label: 'Academic Achievement',
                description: 'Gain in academic performance through SEL integration',
                source: 'Durlak et al. (2011)'
              },
              {
                stat: '30%',
                label: 'Emotional Regulation',
                description: 'Reduction in behavioral incidents',
                source: 'Weisz et al. (2006)'
              },
              {
                stat: '25%',
                label: 'Parent Engagement',
                description: 'Increase in parent-child emotional discussions',
                source: 'Henderson & Mapp (2002)'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {item.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-sm text-gray-500">Source: {item.source}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Integration of SEL and CBT
                </h3>
                <p className="text-gray-600 mb-4">
                  Our platform seamlessly combines Social-Emotional Learning (SEL) with 
                  Cognitive Behavioral Therapy (CBT) principles, creating a comprehensive 
                  approach to emotional development.
                </p>
                <ul className="space-y-3">
                  {[
                    'Evidence-based SEL framework',
                    'Age-appropriate CBT techniques',
                    'Personalized learning paths',
                    'Real-time emotional support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technology-Enhanced Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI and gamification elements work together to create an 
                  engaging and effective learning experience.
                </p>
                <ul className="space-y-3">
                  {[
                    'AI-powered emotional recognition',
                    'Adaptive learning algorithms',
                    'Interactive manga creation',
                    'Real-time progress tracking'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 
            text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Experience the Science Behind Kokoro Quest
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the growing number of schools and families benefiting from our 
              research-backed approach to emotional learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 
                  bg-white text-purple-600 rounded-lg hover:bg-purple-50 
                  transition-colors"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="inline-flex items-center justify-center px-6 py-3 
                  bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                  transition-colors"
              >
                View Success Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}