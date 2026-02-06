import Card from './Card'

const OverviewSection = ({ sections, perspectiveSections, activeSection, onSectionChange }) => {
  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'objective':
        return <p className="align-middle font-normal text-base leading-6 tracking-normal capitalize">{perspectiveSections.objective}</p>
      case 'implementationRequirements':
        return (
          <ul className="space-y-2">
            {perspectiveSections.implementationRequirements.map((req, index) => (
              <li key={index} className="align-middle font-normal text-base leading-6 tracking-normal capitalize">{req}</li>
            ))}
          </ul>
        )
      case 'evidenceDocuments':
        return <p className="align-middle font-normal text-base leading-6 tracking-normal capitalize">{perspectiveSections.evidenceDocuments}</p>
      case 'relatedRegulations':
        return <p className="align-middle font-normal text-base leading-6 tracking-normal capitalize">{perspectiveSections.relatedRegulations}</p>
      case 'scope':
        return <p className="align-middle font-normal text-base leading-6 tracking-normal capitalize">{perspectiveSections.scope}</p>
      default:
        return null
    }
  }

  return (
    <Card className="relative overflow-hidden">
      {/* Divider line for small screens (640px-768px) */}
      <div 
        className="hidden sm:block md:hidden absolute top-0 bottom-0 w-px bg-gray-300" 
        style={{ 
          left: 'calc(1.5rem + (100% - 3rem) * 0.22 + 0.5rem)', 
          transform: 'translateX(-50%)' 
        }}
      />
      {/* Divider line for medium screens (768px-1024px) - uses fixed 180px width */}
      <div 
        className="hidden md:block lg:hidden absolute top-0 bottom-0 w-px bg-gray-300" 
        style={{ 
          left: 'calc(1.5rem + 180px + 0.5rem)', 
          transform: 'translateX(-50%)' 
        }}
      />
      {/* Divider line for 1024px screen - uses fixed 180px width */}
      <div 
        className="hidden lg:block xl:hidden absolute top-0 bottom-0 w-px bg-gray-300" 
        style={{ 
          left: 'calc(1.5rem + 180px + 0.5rem)', 
          transform: 'translateX(-50%)' 
        }}
      />
      {/* Divider line for extra large screens (1280px+) - uses percentage */}
      <div 
        className="hidden xl:block absolute top-0 bottom-0 w-px bg-gray-300" 
        style={{ 
          left: 'calc(1.5rem + (100% - 3rem) * 0.22 + 0.5rem)', 
          transform: 'translateX(-50%)' 
        }}
      />
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="flex gap-4 items-stretch">
            <div className="flex-shrink-0 w-[22%] min-w-[180px]">
              <div className="rounded-lg px-4 py-3 flex items-start h-full bg-[#1B35570D]">
                <span className="align-top break-words font-normal text-base leading-4 tracking-normal capitalize text-[#1D3557]">
                  {section.label === 'Implementation Requirements' ? (
                    <>
                      Implementation<br />Requirements
                    </>
                  ) : (
                    section.label
                  )}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-lg px-4 py-3 h-full bg-[#F5F8FA]">
                <div className="align-middle font-normal text-base leading-6 tracking-normal capitalize text-[#1D3557]">
                  {renderSectionContent(section.id)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default OverviewSection

