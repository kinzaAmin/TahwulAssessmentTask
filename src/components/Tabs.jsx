import { useState } from 'react'

const Tabs = ({ tabs, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  return (
    <div className="bg-gray-100 rounded-lg mb-6 inline-flex p-[3px] gap-[10px]">
      <nav className="flex gap-2.5 h-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`rounded-lg font-medium text-base transition-colors flex items-center justify-center w-[99px] h-[34px] rounded-lg pt-[7px] pr-[15px] pb-[7px] pl-[15px] ${
              activeTab === tab.id
                ? 'bg-white font-bold text-[#1D3557]'
                : 'text-[#8597A8]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Tabs

