import Card from './Card'
import ProfileImage from '../assets/images/profile.svg'
import Leader1 from '../assets/images/leader1.svg'
import Leader2 from '../assets/images/leader2.svg'
import Leader3 from '../assets/images/leader3.svg'

const TopLeaders = ({ topLeaders }) => {
  const leaderImages = [Leader1, Leader2, Leader3]
  
  return (
    <Card>
      <h2 className="text-base font-bold text-[#1D3557] mb-4 capitalize leading-4 tracking-normal">Top Performing Perspective Leaders</h2>
      <div className="space-y-0">
        {topLeaders.map((leader, index) => {
          const leaderImage = leaderImages[index]
          
          return (
            <div key={index} className={`flex items-center gap-4 py-4 ${index < topLeaders.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                {leaderImage ? (
                  <img 
                    src={leaderImage} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to showing initials if image fails to load
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      if (parent && !parent.querySelector('.fallback-avatar')) {
                        parent.innerHTML = `<div class="fallback-avatar w-full h-full flex items-center justify-center bg-primary-500 text-white font-medium text-sm">${leader.avatar}</div>`;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-500 text-white font-medium text-sm">
                    {leader.avatar}
                  </div>
                )}
              </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium mb-1 capitalize text-[#1D3557] text-base leading-[22px] tracking-normal">{leader.name}</p>
              <p className="font-medium capitalize text-[#8597A8] text-base leading-[22px] tracking-normal">{leader.perspective}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-[#1D3557] capitalize text-base leading-[22px] tracking-normal">{leader.score}%</p>
            </div>
          </div>
          )
        })}
      </div>
    </Card>
  )
}

export default TopLeaders

