import Card from './Card'

const RecentActivities = ({ recentActivities }) => {
  return (
    <Card>
      <h2 className="mb-4 align-middle font-bold text-base leading-4 tracking-normal capitalize text-[#1D3557]">Recent Activities</h2>
      <div className="space-y-3">
        {recentActivities.map((activity) => {
          // Handle both old format (title) and new format (file, action, by)
          const hasNewFormat = activity.file && activity.action
          
          return (
            <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2.5"></div>
              <div className="flex-1 min-w-0">
                {hasNewFormat ? (
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="flex-1 font-medium text-base leading-[22px] tracking-normal capitalize text-[#1D3557]">
                        {activity.action === 'Approved' 
                          ? `${activity.file} ${activity.action} By ${activity.by}`
                          : `${activity.file} ${activity.action}`
                        }
                      </p>
                      <p className="whitespace-nowrap flex-shrink-0 font-normal text-xs leading-4 tracking-normal capitalize text-[#8597A8]">
                        {activity.time}
                      </p>
                    </div>
                    {activity.action !== 'Approved' && (
                      <p className="font-medium text-base leading-[22px] tracking-normal capitalize text-[#1D3557]">
                        By {activity.by}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-2">
                    <p className="flex-1 font-medium text-base leading-[22px] tracking-normal capitalize text-[#1D3557]">
                      {activity.title}
                    </p>
                    <p className="whitespace-nowrap flex-shrink-0 font-normal text-xs leading-4 tracking-normal capitalize text-[#8597A8]">
                      {activity.time}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default RecentActivities

