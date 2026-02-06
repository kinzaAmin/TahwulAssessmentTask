import Card from './Card'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'
import { useState } from 'react'

const PerformanceChart = ({ chartData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Card className="md:col-span-2">
      <h2 className="text-base font-bold text-[#1D3557] mb-4 capitalize leading-4 tracking-normal">12-Month Performance</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0078D7" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="barGradientHover" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0078D7" />
              <stop offset="100%" stopColor="rgba(0, 120, 215, 0)" />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
          <Bar 
            dataKey="value" 
            fill="url(#barGradient)" 
            radius={[4, 4, 0, 0]}
            onMouseEnter={(data, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={hoveredIndex === index ? 'url(#barGradientHover)' : 'url(#barGradient)'}
                stroke={hoveredIndex === index ? '#0078D7' : 'none'}
                strokeWidth={hoveredIndex === index ? 2 : 0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default PerformanceChart

