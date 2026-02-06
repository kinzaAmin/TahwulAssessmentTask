import Card from './Card'
import { timelineEvents as mockTimelineEvents, timelineProgress } from '../data/mockData'
import { useState } from 'react'

const ProjectTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2024')

  // Process timeline events from mock data
  const processTimelineEvents = () => {
    if (!mockTimelineEvents || mockTimelineEvents.length === 0) {
      return { events: [], greenDots: [], redDots: [], progressPercentage: 0 }
    }

    const totalEvents = mockTimelineEvents.length
    
    // Use progress value from mock data (0-100)
    // Clamp progress between 0 and 100
    const progressValue = Math.max(0, Math.min(100, timelineProgress || 0))
    
    // Calculate how many events are completed based on progress percentage
    // For example: 50% progress with 6 events = 3 completed events
    const completedCount = Math.round((progressValue / 100) * totalEvents)
    
    // Calculate progress percentage for the bar (use the actual value from mock data)
    const progressPercentage = progressValue

    // Calculate positions dynamically (distribute evenly across the timeline)
    // Start at 5% and end at 95% to avoid edge overlap
    const startPosition = 5
    const endPosition = 95
    const positionRange = endPosition - startPosition
    const positionStep = totalEvents > 1 ? positionRange / (totalEvents - 1) : 50

    // Map events with calculated positions
    const events = mockTimelineEvents.map((event, index) => {
      const position = totalEvents === 1 ? 50 : startPosition + (index * positionStep)
      // Event is completed if its index is less than completedCount
      const isCompleted = index < completedCount
      return {
        id: event.id,
        position,
        date: event.date,
        label: event.title,
        isCompleted,
        maxWidth: event.title.length > 15 ? 70 : 60,
      }
    })

    // Separate green (completed) and red (not completed) dots
    const greenDots = events.filter(event => event.isCompleted).map(event => event.position)
    const redDots = events.filter(event => !event.isCompleted).map(event => event.position)

    return { events, greenDots, redDots, progressPercentage }
  }

  const { events, greenDots, redDots, progressPercentage } = processTimelineEvents()

  return (
    <Card>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-[#1D3557]">Project Timeline</h2>
        <select 
          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>
      
      <div className="relative pb-16">
        {/* Timeline Bar Container */}
        <div className="relative h-3 bg-gray-200 rounded-full">
          {/* Green Section - Dynamic width based on progress */}
          <div 
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-300" 
            style={{ width: `${progressPercentage}%` }}
          />
          
          {/* White Dots on Green Section (completed events) */}
          {greenDots.map((position, index) => (
            <div key={`green-${index}-${position}`} className="absolute top-1/2 transform -translate-y-1/2" style={{ left: `${position}%` }}>
              <div className="w-3 h-3 rounded-full bg-white border border-gray-300"></div>
            </div>
          ))}
          
          {/* Red Dots on Gray Section (incomplete events) */}
          {redDots.map((position, index) => (
            <div key={`red-${index}-${position}`} className="absolute top-1/2 transform -translate-y-1/2" style={{ left: `${position}%` }}>
              <div className="w-3 h-3 rounded-full bg-[#DB1F26]"></div>
            </div>
          ))}
        </div>
        
        {/* Labels Below Timeline */}
        <div className="relative mt-4 sm:mt-8 min-h-[60px] sm:min-h-0">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="absolute flex flex-col items-center" 
              style={{ left: `${event.position}%`, transform: 'translateX(-50%)' }}
            >
              <p className="text-[9px] sm:text-xs text-gray-500 mb-0.5 whitespace-nowrap">{event.date}</p>
              <p 
                className="text-[9px] sm:text-xs font-semibold text-[#1D3557] text-center break-words leading-tight sm:whitespace-nowrap"
                style={{ maxWidth: `${event.maxWidth}px` }}
              >
                {event.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ProjectTimeline

