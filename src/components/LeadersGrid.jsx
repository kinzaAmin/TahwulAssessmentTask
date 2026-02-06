import Card from './Card'
import Leader1 from '../assets/images/leader1.svg'

const LeadersGrid = ({ leaders }) => {
  return (
    <Card className="mt-6">
      <h2 className="text-lg font-semibold mb-4 text-[#1D3557]">Leaders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {leaders.map((leader, index) => (
          <div key={index} className="p-2 sm:p-4 border border-gray-200 rounded-lg bg-[#F5F8FA]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <img 
                  src={Leader1} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    if (parent && !parent.querySelector('.fallback-avatar')) {
                      parent.innerHTML = `<div class="fallback-avatar w-full h-full flex items-center justify-center bg-primary-500 text-white font-medium text-sm">${leader.avatar}</div>`;
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <p className="align-middle font-medium text-base leading-[22px] tracking-normal capitalize text-[#1D3557]">
                  {leader.name}
                </p>
                <p className="align-middle mt-2 font-medium text-base leading-[22px] tracking-normal capitalize text-[#8597A8]">
                  {leader.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default LeadersGrid

