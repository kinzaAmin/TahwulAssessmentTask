export const dashboardStats = {
  overallProgress: 78.65,
  totalCriteria: 95,
  completedCriteria: 52,
  evidenceDocuments: 386,
  evidenceCompleted: 302,
  uploadedToDGA: 258,
}

export const projects = [
  {
    id: 1,
    title: 'Strategic Planning',
    category: 'Compliance',
    progress: 75,
    status: 'in-progress',
    dueDate: '2024-02-15',
    perspective: 'Financial',
  },
  {
    id: 2,
    title: 'Risk Management',
    category: 'Risk',
    progress: 90,
    status: 'review',
    dueDate: '2024-02-20',
    perspective: 'Operational',
  },
  {
    id: 3,
    title: 'Data Governance',
    category: 'Governance',
    progress: 60,
    status: 'in-progress',
    dueDate: '2024-03-01',
    perspective: 'IT',
  },
  {
    id: 4,
    title: 'Financial Reporting',
    category: 'Financial',
    progress: 100,
    status: 'completed',
    dueDate: '2024-01-30',
    perspective: 'Financial',
  },
]

// Timeline progress percentage (0-100)
// Change this value to control the progress bar
// The progress bar will show completed events based on this percentage
export const timelineProgress = 33 // 50% means 3 out of 6 events are completed

export const timelineEvents = [
  {
    id: 1,
    date: 'Mar 17',
    title: 'Kickoff Workshop',
  },
  {
    id: 2,
    date: 'March 18',
    title: 'Data Collection',
  },
  {
    id: 3,
    date: 'May 8',
    title: 'Initial Phase',
  },
  {
    id: 4,
    date: 'May 9-July 12',
    title: 'Verification',
  },
  {
    id: 5,
    date: 'July 13',
    title: 'Completion Reviews',
  },
  {
    id: 6,
    date: 'August 21',
    title: 'Cycle Conclusion',
  },
]

export const recentActivities = [
  {
    id: 1,
    title: "Document 'Strategy_Review.Pdf' Was Uploaded By Ahmed Khaled",
    time: '5 Mins Ago',
  },
  {
    id: 2,
    title: "Task 'Review Compliance Files' Was Assigned To Mona Hamed",
    time: '20 Mins Ago',
  },
  {
    id: 3,
    title: "New Criterion '5.3 Digital Identity' Was Created By Admin",
    time: '1 Hour Ago',
  },
]

export const topLeaders = [
  { name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96, avatar: 'AA' },
  { name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective', score: 94, avatar: 'SK' },
  { name: 'Mohammad Al-Mansour', perspective: 'IT Perspective', score: 92, avatar: 'MM' },
]

export const progressByPerspective = [
  {
    perspective: 'Strategy And Planning',
    progress: 97.78,
    items: [
      { name: 'Digital Transformation', status: 'completed', count: 3 },
      { name: 'Digital Governance', status: 'completed', count: 3, circleStatuses: ['completed', 'completed', 'in-progress'] },
      { name: 'Enterprise Architecture', status: 'completed', count: 3 },
    ],
  },
  {
    perspective: 'Organization And Culture',
    progress: 70.83,
    items: [
      { name: 'Digital Culture And Environment', status: 'completed', count: 3, circleStatuses: ['completed', 'in-progress', 'completed'] },
      { name: 'Leadership Development', status: 'completed', count: 4 },
      { name: 'Skills & Capacity Building', status: 'in-progress', count: 3 },
    ],
  },
  {
    perspective: 'Operations And Execution',
    progress: 80.00,
    items: [
      { 
        name: 'Business Processes', 
        status: 'in-progress', 
        count: 4,
        circleStatuses: ['completed', 'in-progress', 'in-progress', 'completed']
      },
    ],
  },
  {
    perspective: 'Business Continuity',
    progress: 90.59,
    items: [
      { name: 'Risk Management', status: 'completed', count: 5 },
      { name: 'Business Continuity', status: 'completed', count: 7, circleStatuses: ['completed', 'not-started', 'not-started', 'completed', 'completed', 'not-started', 'completed'] },
    ],
  },
  {
    perspective: 'Information Technology',
    progress: 75.00,
    items: [
      { name: 'Support Systems', status: 'completed', count: 5, circleStatuses: ['fully-uploaded', 'completed', 'completed', 'completed', 'completed'] },
      { name: 'IT Infrastructure', status: 'completed', count: 7, circleStatuses: ['completed', 'completed', 'completed', 'completed', 'fully-uploaded', 'completed', 'completed'] },
      { name: 'Cloud Infrastructure', status: 'completed', count: 3, circleStatuses: ['completed', 'completed', 'fully-uploaded'] },
    ],
  },
  {
    perspective: 'Comprehensive Governance',
    progress: 64.44,
    items: [
      { 
        name: 'Governance Platforms', 
        status: 'completed', 
        count: 9,
        circleStatuses: ['completed', 'completed', 'completed', 'not-started', 'completed', 'completed', 'completed', 'completed', 'completed']
      },
    ],
  },
  {
    perspective: 'Channels And Services',
    progress: 100,
    items: [
      { name: 'Service Quality', status: 'completed', count: 3 },
      { name: 'Digital Channels', status: 'completed', count: 4 },
    ],
  },
  {
    perspective: 'Beneficiary Centralization',
    progress: 60.00,
    items: [
      { name: 'User Engagement', status: 'completed', count: 4, circleStatuses: ['completed', 'in-progress', 'in-progress', 'in-progress'] },
      { name: 'User Relationship', status: 'completed', count: 5, circleStatuses: ['completed', 'in-progress', 'in-progress', 'completed', 'completed'] },
      { name: 'User Experience', status: 'completed', count: 5, circleStatuses: ['completed', 'in-progress', 'completed', 'in-progress', 'completed'] },
    ],
  },
  {
    perspective: 'Government Data',
    progress: 87.50,
    items: [
      { name: 'Data Governance', status: 'fully-uploaded', count: 3, circleStatuses: ['completed', 'in-progress', 'in-progress'] },
      { name: 'Data Usage & Availability', status: 'fully-uploaded', count: 3, circleStatuses: ['completed', 'in-progress', 'in-progress'] },
      { name: 'Open Data', status: 'fully-uploaded', count: 3, circleStatuses: ['completed', 'completed', 'in-progress'] },
    ],
  },
  {
    perspective: 'Research And Innovation',
    progress: 17.65,
    items: [
      { name: 'Innovation', status: 'delayed', count: 4 },
      { name: 'Creative Solutions', status: 'delayed', count: 2, circleStatuses: ['in-progress', 'delayed'] },
    ],
  },
]

export const chartData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 72 },
  { name: 'Mar', value: 78 },
  { name: 'Apr', value: 82 },
  { name: 'May', value: 85 },
  { name: 'Jun', value: 88 },
  { name: 'Jul', value: 90 },
  { name: 'Aug', value: 88 },
  { name: 'Sep', value: 85 },
  { name: 'Oct', value: 82 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 78 },
]

export const projectDetails = {
  1: {
    id: 1,
    title: 'Strategic Planning',
    category: 'Compliance',
    progress: 75,
    status: 'in-progress',
    dueDate: '2024-02-15',
    objective: 'Develop and implement a comprehensive strategic planning framework that aligns with organizational goals and regulatory requirements.',
    requirements: [
      'Define strategic objectives and key performance indicators',
      'Establish governance structure for strategic planning',
      'Create documentation and evidence collection process',
      'Implement review and approval workflows',
    ],
    scope: 'This project covers all strategic planning activities across the organization, including annual planning cycles, quarterly reviews, and ad-hoc strategic initiatives.',
    leaders: [
      { name: 'John Doe', role: 'Project Lead', avatar: 'JD' },
      { name: 'Jane Smith', role: 'Compliance Officer', avatar: 'JS' },
      { name: 'Mike Johnson', role: 'Strategic Advisor', avatar: 'MJ' },
    ],
    evidence: {
      total: 24,
      inProgress: 8,
      underReview: 6,
      completed: 10,
    },
  },
}

export const perspectiveDetails = {
  'digital-transformation-strategic-planning': {
    id: 'digital-transformation-strategic-planning',
    title: 'Digital Transformation Strategic Planning',
    category: 'Strategy & Planning',
    progress: 100,
    description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
    evidence: {
      total: 4,
      underReview: 3,
      inProgress: 2,
      completed: 1,
    },
    sections: {
      objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
      implementationRequirements: [
        'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
        'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
        'B. Strategic Initiatives, Programs, And Performance Indicators.',
        'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
        'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
      ],
      evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
      relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
      scope: 'All Government Entities.',
    },
    leaders: [
      { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: 'AA' },
      { name: 'Sarah Al-Mansouri', role: 'Digital Transformation Lead', avatar: 'SM' },
    ],
    evidenceList: [
      { id: 1, documentNumber: '5.4.1.1', documentName: 'Digital_Transformation_Plan.Pdf', documentLead: 'Ahmed Khaled', documentPreparer: 'Ahmed Khaled', date: '2025-08-01', dueDate: '2025-08-01', status: 'Approved' },
      { id: 2, documentNumber: '5.4.1.2', documentName: 'KPI_Framework.Xlsx', documentLead: 'Mona Hamed', documentPreparer: 'Mona Hamed', date: '2025-08-01', dueDate: '2025-08-01', status: 'Pending Review' },
      { id: 3, documentNumber: '5.4.1.3', documentName: 'Roadmap_Version1.Docx', documentLead: 'Rami AlSharif', documentPreparer: 'Rami AlSharif', date: '2025-08-01', dueDate: '2025-08-01', status: 'Pending Review' },
    ],
    comments: [
      { name: 'Sara Ibrahim', text: 'Ensure The Plan Includes A Clear Governance Model.', date: '2025-08-05' },
      { name: 'Mona Hamed', text: 'Ensure The Plan Includes A Clear Governance Model.', date: '2025-08-05' },
    ],
    recentActivities: [
      { id: 1, file: 'Roadmap_Version1.Docx', action: 'Uploaded', by: 'Rami AlSharif', time: '5 Mins Ago' },
      { id: 2, file: 'KPI_Framework.Xlsx', action: 'Uploaded', by: 'Mona Hamed', time: '20 Mins Ago' },
      { id: 3, file: 'Digital_Transformation_Plan.Pdf', action: 'Approved', by: 'Advisory Team', time: '1 Hour Ago' },
    ],
  },
}

