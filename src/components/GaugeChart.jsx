import { calculateGaugeValue } from '../utils/statusUtils'

const GaugeChart = ({ value, color = '#ef4444', size = { width: 256, height: 160 }, percentageTextSize = 'text-4xl', percentageColor = 'text-gray-900', percentageLineHeight = '', percentageLetterSpacing = '', percentageTransform = '' }) => {
  // For 100%, show a full circle instead of semicircle
  const isFullCircle = value === 100
  const radius = 80
  const circumference = isFullCircle ? 2 * Math.PI * radius : Math.PI * radius
  
  return (
    <div className="relative" style={{ width: `${size.width}px`, height: `${size.height}px` }}>
      <svg className="w-full h-full overflow-visible" viewBox={isFullCircle ? "0 0 200 200" : "0 0 200 120"}>
        {isFullCircle ? (
          <>
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="16"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth="16"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset="0"
              transform="rotate(-90 100 100)"
            />
          </>
        ) : (
          <>
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Progress arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={color}
              strokeWidth="16"
              strokeDasharray={`${calculateGaugeValue(value)} 251`}
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
      <div 
        className={`absolute flex items-center justify-center ${isFullCircle ? '' : 'pt-10'}`}
        style={isFullCircle ? { 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%'
        } : {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <span className={`${percentageTextSize} font-bold ${percentageColor} ${percentageLineHeight} ${percentageLetterSpacing} ${percentageTransform}`}>{value}%</span>
      </div>
    </div>
  )
}

export default GaugeChart

