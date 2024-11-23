import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { School, TrendingUp, Heart, Users, ArrowRight, Download, Calendar } from 'lucide-react';

const schools = [
  {
    name: 'Sakura Elementary School',
    location: 'Tokyo',
    type: 'Public Elementary',
    students: 500,
    results: [
      { label: 'Decrease in Behavioral Incidents', value: '40%' },
      { label: 'Improvement in Test Scores', value: '15%' }
    ],
    quote: {
      text: "Kokoro Quest has been a game-changer for our school. Our students are more engaged, empathetic, and ready to learn.",
      author: 'School Principal'
    }
  },
  {
    name: 'Harmony Middle School',
    location: 'Osaka',
    type: 'Private Middle School',
    students: 350,
    results: [
      { label: 'Increase in Peer Support', value: '45%' },
      { label: 'Reduction in Bullying Incidents', value: '60%' }
    ],
    quote: {
      text: "Our students are not only performing better academically but are also becoming compassionate individuals.",
      author: 'Lead Teacher'
    }
  },
  {
    name: 'Future Leaders Academy',
    location: 'Kyoto',
    type: 'Innovation School',
    students: 400,
    results: [
      { label: 'Increase in Student Engagement', value: '25%' },
      { label: 'Improvement in Self-Awareness', value: '35%' }
    ],
    quote: {
      text: "I love using Kokoro Quest because it feels like the activities are made just for me. It helps me understand myself better.",
      author: 'Student, Grade 8'
    }
  }
];

export default function UseCasesPage() {
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
              Real-World Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover how schools across Japan are transforming education with Kokoro Quest
            </motion.p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-16">
          {schools.map((school, index) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <School className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {school.name}
                      </h2>
                      <p className="text-gray-600">{school.location} • {school.type}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {school.results.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-600">{result.label}</span>
                        <span className="text-2xl font-bold text-purple-600">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-purple-200 pl-4 italic text-gray-600">
                    "{school.quote.text}"
                    <footer className="mt-2 text-sm text-gray-500 non-italic">
                      — {school.quote.author}
                    </footer>
                  </blockquote>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Implementation Highlights
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-600">
                          {school.students} students actively using the platform
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-600">
                          Integrated into daily curriculum
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-600">
                          Regular emotional check-ins
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join these successful schools in nurturing emotional intelligence and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 
                bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                transition-colors"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 
                text-purple-600 bg-white border border-purple-200 rounded-lg 
                hover:bg-purple-50 transition-colors"
            >
              View Pricing
              <Download className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}