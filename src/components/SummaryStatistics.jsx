import UploadIcon from '../assets/icons/upload.svg'
import CriteriaIcon from '../assets/icons/criteria.svg'
import CompletedIcon from '../assets/icons/complete.svg'
import overallProgressIcon from '../assets/icons/overalProgress.svg'
import EvidenceIcon from '../assets/icons/evidence.svg'
import EvidenceCompletedIcon from '../assets/icons/evidenceComplete.svg'

const SummaryStatistics = ({ dashboardStats }) => {
  const stats = [
    {
      value: `${dashboardStats.overallProgress}%`,
      label: 'Overall Progress',
      icon: overallProgressIcon,
    },
    {
      value: dashboardStats.totalCriteria,
      label: 'Total Criteria',
      icon: CriteriaIcon,
    },
    {
      value: dashboardStats.completedCriteria,
      label: 'Completed Criteria',
      icon: CompletedIcon,
    },
    {
      value: dashboardStats.evidenceDocuments,
      label: 'Evidence Documents',
      icon: EvidenceIcon,
    },
    {
      value: dashboardStats.evidenceCompleted,
      label: 'Evidence',
      labelSuffix: '(Completed)',
      icon: EvidenceCompletedIcon,
    },
    {
      value: dashboardStats.uploadedToDGA,
      label: 'Uploaded To DGA',
      icon: UploadIcon,
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center lg:justify-items-start">
      {stats.map((stat, index) => {
        const isImageUrl = typeof stat.icon === 'string'
        const IconComponent = !isImageUrl ? stat.icon : null
        
        return (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-[10px] w-full max-w-[176px] h-20 pt-4 pr-3 pb-3 pl-4"
          >
            {/* Value - Large dark blue at top left, aligned left */}
            <p className="text-2xl font-bold text-blue-900 leading-tight mb-1.5">{stat.value}</p>
            
            {/* Label - Light grey directly below value, aligned left, inline */}
            <div className="text-sm text-gray-500 leading-tight flex items-baseline gap-1">
              <span>{stat.label}</span>
              {stat.labelSuffix && <span className="text-sm text-gray-500">{stat.labelSuffix}</span>}
            </div>
            
            {/* Icon - Image from assets/icons or Lucide icon in top right corner */}
            <div className="absolute top-4 right-4">
              {isImageUrl ? (
                <img 
                  src={stat.icon} 
                  alt={stat.label}
                  className="w-[18px] h-[18px] object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(346deg) brightness(96%) contrast(96%)' }}
                />
              ) : (
                IconComponent && <IconComponent size={18} className="text-red-500" strokeWidth={2} />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryStatistics

