const PerspectiveCard = ({ title, progress }) => {
  // Split title into exactly two lines - matching image 2 exactly
  const words = title.split(' ')
  let firstLine = ''
  let secondLine = ''
  
  // Specific mappings for all titles to ensure proper display
  const titleMapping = {
    'Strategy And Planning': { first: 'Strategy', second: 'And Planning' },
    'Organization And Culture': { first: 'Organization', second: 'And Culture' },
    'Operations And Execution': { first: 'Operations', second: 'And Execution' },
    'Business Continuity': { first: 'Business', second: 'Continuity' },
    'Information Technology': { first: 'Information', second: 'Technology' },
    'Comprehensive Governance': { first: 'Comprehensive', second: 'Governance' },
    'Channels And Services': { first: 'Channels', second: 'And Services' },
    'Beneficiary Centralization': { first: 'Beneficiary', second: 'Centralization' },
    'Government Data': { first: 'Government', second: 'Data' },
    'Research And Innovation': { first: 'Research And', second: 'Innovation' },
  }
  
  if (titleMapping[title]) {
    firstLine = titleMapping[title].first
    secondLine = titleMapping[title].second
  } else if (words.length === 1) {
    firstLine = title
    secondLine = ''
  } else if (words.length === 2) {
    firstLine = words[0]
    secondLine = words[1]
  } 
  else {
    // Split in middle for even distribution
    const midPoint = Math.ceil(words.length / 2)
    firstLine = words.slice(0, midPoint).join(' ')
    secondLine = words.slice(midPoint).join(' ')
  }

  // Format percentage - show without decimals if it's a whole number, otherwise 2 decimals
  const formatPercentage = (value) => {
    if (value % 1 === 0) {
      return `${value}%`
    }
    return `${value.toFixed(2)}%`
  }

  return (
    <div className="rounded-[10px] flex flex-col items-center justify-between border-0 w-[120px] h-[90px] bg-[#1D3557] pt-3 pb-2 pl-1.5 pr-1.5">
      {/* Title - White, bold, centered, two lines only - Top section with proper spacing */}
      <div className="text-white font-bold text-center w-full text-[10px] leading-[1.2] flex flex-col items-center justify-center flex-1 min-h-0 pb-1.5">
        <div className="block text-center w-full leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
          {firstLine}
        </div>
        {secondLine && (
          <div className="block text-center w-full leading-[1.2] mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
            {secondLine}
          </div>
        )}
      </div>
      
      {/* Progress Percentage - Pill shape with lighter blue background - Bottom section */}
      <div className="bg-[#FFFFFF1A] rounded-full px-2 py-1 flex items-center justify-center w-full flex-shrink-0">
        <span className="text-white font-bold text-[10px]">{formatPercentage(progress)}</span>
      </div>
    </div>
  )
}

export default PerspectiveCard

