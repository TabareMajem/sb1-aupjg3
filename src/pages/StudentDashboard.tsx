import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Send,
  Brain,
  Heart,
  Sparkles
} from 'lucide-react';
import JournalEntry from '../components/JournalEntry';
import MoodTrendChart from '../components/insights/MoodTrendChart';
import AICompanionWidget from '../components/companions/AICompanionWidget';
import DailySELActivity from '../components/sel/DailySELActivity';
import MoodSelector from '../components/MoodSelector';
import MangaViewer from '../components/manga/MangaViewer';

// Mock data
const mockMoodData = [
  { date: '2024-03-01', mood: { value: 0.8, dominantEmotion: 'happy', confidence: 0.9 } },
  { date: '2024-03-02', mood: { value: 0.6, dominantEmotion: 'content', confidence: 0.85 } },
  { date: '2024-03-03', mood: { value: 0.9, dominantEmotion: 'excited', confidence: 0.95 } },
  { date: '2024-03-04', mood: { value: 0.7, dominantEmotion: 'happy', confidence: 0.8 } },
  { date: '2024-03-05', mood: { value: 0.85, dominantEmotion: 'joyful', confidence: 0.9 } }
];

export default function StudentDashboard() {
  const [journalContent, setJournalContent] = useState('');
  const [showManga, setShowManga] = useState(false);
  const [currentManga, setCurrentManga] = useState<any>(null);
  const [selectedMood, setSelectedMood] = useState('');

  const handleJournalSubmit = async (content: string) => {
    // Mock manga data for demonstration
    const mockManga = {
      panels: [
        {
          id: '1',
          imageUrl: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=600',
          speechBubbles: [
            {
              id: 'bubble-1',
              text: content,
              position: { x: 50, y: 50 },
              type: 'speech'
            }
          ]
        }
      ]
    };

    setCurrentManga(mockManga);
    setShowManga(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Mood Check-in */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome back, Sarah! 👋
          </h1>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-purple-500" />
              How are you feeling today?
            </h2>
            <MoodSelector
              selectedMood={selectedMood}
              onMoodSelect={setSelectedMood}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Companion Widget */}
            <AICompanionWidget mood={selectedMood} />

            {/* Daily SEL Activity */}
            <DailySELActivity mood={selectedMood} />

            {/* Journal Entry */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-purple-500" />
                Today's Journal
              </h2>
              <JournalEntry
                content={journalContent}
                onContentChange={setJournalContent}
                onGenerateManga={handleJournalSubmit}
              />
            </div>

            {/* Mood Trends */}
            <MoodTrendChart data={mockMoodData} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => {/* Navigate to AR activities */}}
                  className="w-full py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 
                    transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Try AR Activity
                </button>
                <button
                  onClick={() => {/* Navigate to quiz */}}
                  className="w-full py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 
                    transition-colors flex items-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Take SEL Quiz
                </button>
                <button
                  onClick={() => {/* Share progress */}}
                  className="w-full py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 
                    transition-colors flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Share Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manga Viewer Modal */}
      {showManga && currentManga && (
        <MangaViewer
          panels={currentManga.panels}
          onClose={() => setShowManga(false)}
        />
      )}
    </div>
  );
}