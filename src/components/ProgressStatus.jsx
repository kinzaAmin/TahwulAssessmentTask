import Card from './Card'
import PerspectiveCard from './PerspectiveCard'
import { getStatusColor } from '../utils/statusUtils'

const ProgressStatus = ({ progressByPerspective }) => {
  const statusLegend = [
    { color: '#8597A8', label: 'Not Started' },
    { color: '#F59F0A', label: 'In Progress' },
    { color: '#1EA54E', label: 'Completed' },
    { color: '#004479', label: 'Partially Uploaded' },
    { color: '#0078D7', label: 'Fully Uploaded' },
    { color: '#F50A0A', label: 'Delayed' },
  ]

  // Calculate max items across all perspectives
  const maxItems = Math.max(...progressByPerspective.map(p => p.items.length))
  
  const getRowHeight = (rowIndex) => {
    const rowItems = progressByPerspective
      .map(p => p.items[rowIndex])
      .filter(Boolean)
    const maxCountInRow = rowItems.length > 0 
      ? Math.max(...rowItems.map(i => i.count))
      : 0
    return maxCountInRow <= 3 ? 140 : 
           maxCountInRow <= 5 ? 160 : 
           maxCountInRow <= 7 ? 180 : 200
  }

  // Calculate total height for a column with maxItems
  let totalMaxHeight = 0
  for (let i = 0; i < maxItems; i++) {
    totalMaxHeight += getRowHeight(i)
    if (i < maxItems - 1) totalMaxHeight += 16 // gap between cards
  }

  return (
    <Card>
      <div className="mb-6">
        {/* Header with Title and Legend on same line */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <h2 className="text-lg font-bold text-[#1D3557]">Progress Status</h2>
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            {statusLegend.map((item) => (
              <div key={item.label} className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perspective Cards with Sub-sections */}
      <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 gap-4 items-start">
        {progressByPerspective.map((perspective) => {
          const currentItemsCount = perspective.items.length
          
          // Calculate total height for current column
          let totalCurrentHeight = 0
          for (let i = 0; i < currentItemsCount; i++) {
            totalCurrentHeight += getRowHeight(i)
            if (i < currentItemsCount - 1) totalCurrentHeight += 16
          }
          
          // Calculate extra height needed to match maxItems column
          const extraHeight = totalMaxHeight - totalCurrentHeight
          const heightPerCard = currentItemsCount > 0 ? Math.floor(extraHeight / currentItemsCount) : 0
          
          return (
            <div key={perspective.perspective} className="flex flex-col w-full">
              {/* Main Card */}
              <div className="flex justify-center w-full mb-4">
                <PerspectiveCard
                  title={perspective.perspective}
                  progress={perspective.progress}
                />
              </div>
              
              {/* Sub-sections below each card */}
              <div className="flex flex-col gap-4 w-full">
                {perspective.items.map((item, itemIndex) => {
                  const rowItems = progressByPerspective
                    .map(p => p.items[itemIndex])
                    .filter(Boolean)
                  
                  const maxCountInRow = rowItems.length > 0 
                    ? Math.max(...rowItems.map(i => i.count))
                    : 0
                  
                  const baseHeight = maxCountInRow <= 3 ? 140 : 
                                    maxCountInRow <= 5 ? 160 : 
                                    maxCountInRow <= 7 ? 180 : 200
                  
                  const cardHeight = baseHeight + heightPerCard
                  
                  const getCircleStatus = (index) => {
                    return item.circleStatuses && item.circleStatuses[index] 
                      ? item.circleStatuses[index] 
                      : item.status
                  }
                  
                  return (
                    <div 
                      key={itemIndex} 
                      className="bg-white rounded-lg p-2 border border-gray-200 w-full flex flex-col items-center"  
                      style={{ height: `${cardHeight}px` }}
                    >
                      {/* Item Title - Centered */}
                      <h3 className="text-[10px] font-semibold text-[#1D3557] mb-2 text-center">{item.name}</h3>
                      
                      {/* Numbered Circles Grid - Centered group with sequential flow */}
                      {/* <div className="flex justify-center items-center w-full">
                        <div className="flex flex-wrap gap-1.5 px-2 justify-between items-start"> */}
                          <div className="flex justify-center items-center w-full flex-1">
                          <div className="flex flex-wrap gap-1.5 justify-between px-2 xl:px-0.5 2xl:px-2 items-center">
                          {Array.from({ length: item.count }, (_, i) => {
                            const circleNumber = i + 1
                            const circleStatus = getCircleStatus(i)
                            return (
                              <div
                                key={circleNumber}
                                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: getStatusColor(circleStatus) }}
                              >
                                <span className="text-white text-[9px] font-bold">{circleNumber}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default ProgressStatus

