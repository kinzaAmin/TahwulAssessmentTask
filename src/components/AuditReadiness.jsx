import Card from './Card'
import GaugeChart from './GaugeChart'

const AuditReadiness = () => {
  return (
    <Card>
      <h2 className="text-base font-bold text-[#1D3557] mb-4 capitalize leading-4 tracking-normal">Audit Readiness</h2>
      <div className="flex flex-col items-center w-full">
        {/* Gauge Chart */}
        <div className="mb-4">
          <GaugeChart 
            value={80} 
            color="#22c55e"
            size={{ width: 256, height: 160 }}
            percentageTextSize="text-[44px]"
            percentageColor="text-[#1D3557]"
            percentageLineHeight="leading-4"
            percentageLetterSpacing="tracking-normal"
            percentageTransform="capitalize"
          />
        </div>
        <p className="font-normal text-[#8597A8] text-center capitalize text-sm leading-4 tracking-normal mb-4">Readiness Level</p>
        <div className="w-full border-t border-gray-200 mb-6"></div>
        <div className="flex gap-8 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-900">12</span>
            <span className="text-sm text-gray-600 mt-1">Overdue Stds</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-900">5</span>
            <span className="text-sm text-gray-600 mt-1">Missing Evidence</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AuditReadiness

