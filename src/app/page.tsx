'use client';

import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
}

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'activity';
  description: string;
}

interface ScheduleItem {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'deadline' | 'meeting' | 'presentation';
  description: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Atharva Lade', role: 'Software Developer' },
  { name: 'Aniket Avasare', role: 'System Design' },
  { name: 'Danny Torres', role: 'UI/UX Designer' },
  { name: 'Hayden Hoppe', role: 'Project Manager' },
  { name: 'Jake Boles', role: 'AI Engineer' },
];

const meetings: Meeting[] = [
  // September 2025 - Tuesdays and Thursdays
  {
    id: 1,
    title: 'Introductions',
    date: '2025-09-02',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Team introductions and course overview'
  },
  {
    id: 2,
    title: 'Stage 1 Planning',
    date: '2025-09-04',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Initial project planning and requirements gathering'
  },
  {
    id: 3,
    title: 'SRS Review',
    date: '2025-09-09',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Software Requirements Specification review session'
  },
  {
    id: 4,
    title: 'Database Planning',
    date: '2025-09-11',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Database schema design and planning'
  },
  {
    id: 5,
    title: 'UI Brainstorm',
    date: '2025-09-16',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'User interface design brainstorming session'
  },
  {
    id: 6,
    title: 'Code Development',
    date: '2025-09-18',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Development sprint and code implementation'
  },
  {
    id: 7,
    title: 'Progress Review',
    date: '2025-09-23',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Review development progress and blockers'
  },
  {
    id: 8,
    title: 'Code Development',
    date: '2025-09-25',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Continued development and feature implementation'
  },
  {
    id: 9,
    title: 'Integration Testing',
    date: '2025-09-30',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Testing and integration of components'
  },
  // October 2025
  {
    id: 10,
    title: 'Slide Practice',
    date: '2025-10-02',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Presentation preparation and practice'
  },
  {
    id: 11,
    title: 'Final Review',
    date: '2025-10-07',
    time: '5:00 PM - 6:20 PM',
    type: 'meeting',
    description: 'Final project review and preparation'
  },
];

const upcomingSchedule: ScheduleItem[] = [
  {
    id: 1,
    title: 'Stage 2',
    date: '2025-10-14',
    time: '11:59 PM',
    type: 'deadline',
    description: 'Stage 2 project deliverable submission'
  },
  {
    id: 2,
    title: 'UI for the Project',
    date: '2025-10-21',
    time: '11:59 PM',
    type: 'deadline',
    description: 'User interface design and implementation deadline'
  },
  {
    id: 3,
    title: 'Backend Development',
    date: '2025-10-28',
    time: '11:59 PM',
    type: 'deadline',
    description: 'Backend development and API integration deadline'
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'members' | 'meetings' | 'schedule'>('members');

  const formatDate = (dateString: string) => {
    // Parse date as local time to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'activity':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'deadline':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'presentation':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Phoenix
              </span>
            </h1>
            <p className="text-xl text-gray-600">CS 4366 Development Team</p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {[
              { key: 'members', label: 'Team Members', icon: '👥' },
              { key: 'meetings', label: 'Meetings & Activities', icon: '📅' },
              { key: 'schedule', label: 'Upcoming Schedule', icon: '⏰' },
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as 'members' | 'meetings' | 'schedule')}
                className={`flex items-center space-x-2 py-4 px-6 border-b-2 transition-colors duration-200 ${
                  activeTab === key
                    ? 'border-orange-500 text-orange-600 bg-orange-50'
                    : 'border-transparent text-gray-600 hover:text-orange-600 hover:border-orange-300'
                }`}
              >
                <span className="text-lg">{icon}</span>
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Team Members Section */}
        {activeTab === 'members' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the talented developers behind Phoenix. Each member brings unique skills and perspectives to our collaborative efforts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium bg-orange-50 px-3 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Meetings & Activities Section */}
        {activeTab === 'meetings' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meetings & Activities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team collaboration sessions, workshops, and activities that drive our project forward.
              </p>
            </div>

            <div className="space-y-6">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{meeting.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(meeting.type)}`}>
                          {meeting.type.charAt(0).toUpperCase() + meeting.type.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{meeting.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <span>📅</span>
                          <span>{formatDate(meeting.date)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>🕐</span>
                          <span>{meeting.time}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Schedule Section */}
        {activeTab === 'schedule' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Schedule</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Important dates, deadlines, and upcoming events for our team to stay on track.
              </p>
            </div>

            <div className="space-y-6">
              {upcomingSchedule.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <span>📅</span>
                          <span>{formatDate(item.date)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>🕐</span>
                          <span>{item.time}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phoenix Team</h3>
            <p className="text-gray-600">CS 4366 • Software Development Project</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}