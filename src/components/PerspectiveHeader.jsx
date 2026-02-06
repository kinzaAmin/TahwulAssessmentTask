import { ArrowLeft } from 'lucide-react'
import Card from './Card'
import GaugeChart from './GaugeChart'

const PerspectiveHeader = ({ 
  title, 
  category, 
  description, 
  progress, 
  onBack,
  showBackButton = true 
}) => {
  return (
    <>
      {/* Header with Back Arrow */}
      {showBackButton && (
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="align-middle font-bold text-base leading-4 tracking-normal capitalize text-[#1D3557]">
            {title}
          </h2>
        </div>
      )}

      {/* Header Card */}
      <Card>
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <div className="mb-4">
              <span className="px-4 py-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                {category}
              </span>
            </div>
            <h2 className="mb-3 align-middle font-bold text-base leading-4 tracking-normal capitalize text-[#1D3557]">
              {title}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex-shrink-0">
            <GaugeChart 
              value={progress} 
              color="#22c55e"
              size={{ width: 100, height: 100 }}
              percentageTextSize="text-lg"
              percentageColor="text-gray-900"
            />
          </div>
        </div>
      </Card>
    </>
  )
}

export default PerspectiveHeader

