import {
  dashboardStats,
  progressByPerspective,
  chartData,
  topLeaders,
  recentActivities,
} from '../data/mockData'
import ProjectTimeline from '../components/ProjectTimeline'
import SummaryStatistics from '../components/SummaryStatistics'
import ProgressStatus from '../components/ProgressStatus'
import ComplianceScore from '../components/ComplianceScore'
import TopLeaders from '../components/TopLeaders'
import RecentActivities from '../components/RecentActivities'
import PerformanceChart from '../components/PerformanceChart'
import AuditReadiness from '../components/AuditReadiness'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Summary Statistics Cards */}
      <SummaryStatistics dashboardStats={dashboardStats} />

      {/* Progress Status */}
      <ProgressStatus progressByPerspective={progressByPerspective} />

      {/* Bottom Section - Charts and Info */}
      {/* Top Row - Three Cards in One Line */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ComplianceScore />
        <TopLeaders topLeaders={topLeaders} />
        <RecentActivities recentActivities={recentActivities} />
      </div>

      {/* Bottom Row - Chart (wider) and Audit (matching Recent Activities) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PerformanceChart chartData={chartData} />
        <AuditReadiness />
      </div>
    </div>
  )
}

export default Dashboard
