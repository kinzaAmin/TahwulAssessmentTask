import Card from './Card'
import GaugeChart from './GaugeChart'

const ComplianceScore = () => {
  return (
    <Card>
      <h2 className="text-base font-bold text-[#1D3557] mb-4 capitalize leading-4 tracking-normal">Overall Compliance Score</h2>
      <div className="flex flex-col items-center w-full">
        {/* Gauge Chart */}
        <div className="mt-[50px]">
          <GaugeChart 
            value={65} 
            color="#ef4444"
            size={{ width: 256, height: 160 }}
            percentageTextSize="text-[44px]"
            percentageColor="text-[#1D3557]"
            percentageLineHeight="leading-4"
            percentageLetterSpacing="tracking-normal"
            percentageTransform="capitalize"
          />
        </div>
        <p className="font-normal text-[#8597A8] text-center capitalize text-sm leading-4 tracking-normal">Basic Standards 2025</p>
      </div>
    </Card>
  )
}

export default ComplianceScore

