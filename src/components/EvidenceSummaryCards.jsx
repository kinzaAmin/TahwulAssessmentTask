import Card from './Card'
import totalEvidence from '../assets/icons/totalEvidence.svg'
import underReviewEvidence from '../assets/icons/underreview.svg'
import inProgressEvidence from '../assets/icons/inProgress.svg'
import completedEvidence from '../assets/icons/completedEvidence.svg'

const EvidenceSummaryCards = ({ evidence }) => {
  const cards = [
    {
      icon: totalEvidence,
      value: evidence.total,
      label: 'Total Evidence',
      mt: 'mt-2'
    },
    {
      icon: underReviewEvidence,
      value: evidence.underReview,
      label: 'Under Review Evidence',
      mt: 'mt-1'
    },
    {
      icon: inProgressEvidence,
      value: evidence.inProgress,
      label: 'In Progress Evidence',
      mt: 'mt-1'
    },
    {
      icon: completedEvidence,
      value: evidence.completed,
      label: 'Completed Evidence',
      mt: 'mt-1'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {cards.map((card, index) => (
        <Card key={index}>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src={card.icon} alt={card.label} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <p className="align-middle font-bold text-2xl leading-4 tracking-normal capitalize text-[#1D3557]">
                {card.value}
              </p>
              <p className={`align-middle ${card.mt} font-normal text-sm leading-4 tracking-normal capitalize text-[#8597A8]`}>
                {card.label}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default EvidenceSummaryCards

