import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Tabs from '../components/Tabs'
import EvidenceTable from '../components/EvidenceTable'
import Comments from '../components/Comments'
import RecentActivities from '../components/RecentActivities'
import PerspectiveHeader from '../components/PerspectiveHeader'
import EvidenceSummaryCards from '../components/EvidenceSummaryCards'
import OverviewSection from '../components/OverviewSection'
import LeadersGrid from '../components/LeadersGrid'
import { perspectiveDetails } from '../data/mockData'

const Perspectives = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  // Get the default perspective detail
  const perspective = perspectiveDetails['digital-transformation-strategic-planning']

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'evidence', label: 'Evidence' },
  ]

  const sections = [
    { id: 'objective', label: 'Objective' },
    { id: 'implementationRequirements', label: 'Implementation Requirements' },
    { id: 'evidenceDocuments', label: 'Evidence Documents' },
    { id: 'relatedRegulations', label: 'Related Regulations' },
    { id: 'scope', label: 'Scope' },
  ]

  return (
    <div className="space-y-6">
      <PerspectiveHeader
        title={perspective.title}
        category={perspective.category}
        description={perspective.description}
        progress={perspective.progress}
        onBack={() => navigate(-1)}
      />

      <EvidenceSummaryCards evidence={perspective.evidence} />

      {/* Tabs */}
      <Tabs tabs={tabs} defaultTab={activeTab} onChange={setActiveTab} />

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          <OverviewSection
            sections={sections}
            perspectiveSections={perspective.sections}
          />
          <LeadersGrid leaders={perspective.leaders} />
        </>
      )}

      {activeTab === 'evidence' && (
        <>
          <Card>
            <h2 className="text-lg font-semibold text-[#1D3557] mb-4">Evidence Documents</h2>
            {perspective.evidenceList && perspective.evidenceList.length > 0 ? (
              <EvidenceTable data={perspective.evidenceList} />
            ) : (
              <p className="text-gray-600">No evidence documents available.</p>
            )}
          </Card>
          
          {/* Comments and Recent Activities Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
            <div className="lg:col-span-3">
              <Card>
                <Comments comments={perspective.comments || []} />
              </Card>
            </div>
            <div className="lg:col-span-2">
              <RecentActivities recentActivities={perspective.recentActivities || []} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Perspectives

