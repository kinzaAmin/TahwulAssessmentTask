# Auditing Dashboard - Digital Transformation & Compliance Tracking Platform

A modern, responsive React application for tracking audit and compliance activities, built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AuditReadiness.jsx
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Comments.jsx
│   ├── ComplianceScore.jsx
│   ├── EvidenceSummaryCards.jsx
│   ├── EvidenceTable.jsx
│   ├── GaugeChart.jsx
│   ├── Layout.jsx
│   ├── LeadersGrid.jsx
│   ├── OverviewSection.jsx
│   ├── PerformanceChart.jsx
│   ├── PerspectiveCard.jsx
│   ├── PerspectiveHeader.jsx
│   ├── ProgressBar.jsx
│   ├── ProgressStatus.jsx
│   ├── ProjectTimeline.jsx
│   ├── RecentActivities.jsx
│   ├── StatCard.jsx
│   ├── SummaryStatistics.jsx
│   ├── Tabs.jsx
│   └── TopLeaders.jsx
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard screen
│   └── Perspectives.jsx # Perspectives/Details page
├── data/               # Mock data
│   └── mockData.js     # Static data for demonstration
├── utils/              # Utility functions
│   └── statusUtils.js
├── assets/             # Static assets
│   ├── icons/          # SVG icons
│   └── images/         # Images and logos
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Features

### Dashboard Screen
- **Project Timeline**: Visual timeline of project milestones and events with dynamic progress bar
- **Summary Statistics**: Overall progress, total criteria, completed criteria, evidence documents, and uploads
- **Progress Status**: Breakdown of progress across different perspectives with visual indicators
- **Charts**: 12-Month Performance chart with interactive hover effects
- **Compliance Score**: Gauge chart showing compliance score
- **Top Leaders**: List of top performing leaders by perspective
- **Recent Activities**: Feed of recent project activities
- **Audit Readiness**: Audit readiness indicator widget

### Perspectives Page (Details Page)
- **Header**: Perspective title, category, description, and progress indicator with back navigation
- **Evidence Summary Cards**: Total, in progress, under review, and completed evidence counts
- **Tab Navigation**: Overview and Evidence tabs
- **Overview Tab**:
  - Objective section
  - Implementation Requirements list
  - Evidence Documents information
  - Related Regulations
  - Scope description
  - Project leaders section
- **Evidence Tab**: 
  - Evidence documents table with status and details
  - Comments section
  - Recent activities panel

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Chart library for data visualization
- **Lucide React**: Icon library

## 🎯 Design Approach

### Component Architecture
- **Reusable Components**: All UI elements are built as reusable components (Card, Button, Badge, ProgressBar, etc.)
- **Component Composition**: Components are composed to build complex UIs
- **Separation of Concerns**: Clear separation between presentation and data logic

### Styling
- **Tailwind CSS**: Utility-first approach for rapid development and consistency
- **Responsive Design**: Mobile-first responsive design using Tailwind's breakpoints
- **Custom Components**: Extended Tailwind with custom card and hover utilities

### Best Practices
- **Functional Components**: All components use functional components with hooks
- **Props Validation**: Clear prop interfaces for components
- **Code Organization**: Logical file structure and component organization
- **Accessibility**: Semantic HTML and proper ARIA attributes where needed

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px+): Full layout with sidebar and multi-column grids
- **Tablet** (768px - 1023px): Adjusted layouts with collapsible sidebar
- **Mobile** (< 768px): Stacked layouts with mobile-friendly navigation

## 🔄 Routing

- `/` - Dashboard (main screen with overview and statistics)
- `/perspectives` - Perspectives/Details page (detailed view of a specific perspective)

## 📊 Mock Data

The application uses static mock data located in `src/data/mockData.js`. In a production environment, this would be replaced with API calls to a backend service.

## 🎨 Color Scheme

- **Primary**: Blue (#0ea5e9)
- **Success**: Green
- **Warning**: Yellow
- **Danger**: Red
- **Info**: Blue

## 🔮 Assumptions Made

1. **No Backend Required**: All data is mocked and stored in static files (`src/data/mockData.js`)
2. **Single Perspective Focus**: The Perspectives page focuses on a single perspective (Digital Transformation Strategic Planning)
3. **User Authentication**: Assumed user is already authenticated (no login flow)
4. **Chart Library**: Used Recharts for data visualization (bar charts, gauge charts)
5. **Icon Library**: Used Lucide React and custom SVG icons for consistent iconography
6. **Timeline Progress**: Progress bar is controlled by `timelineProgress` value in mock data (0-100)

## 🚧 Future Improvements

With more time, I would:

1. **State Management**: Implement Redux or Zustand for global state management
2. **API Integration**: Connect to a real backend API with proper error handling
3. **Authentication**: Add user authentication and authorization
4. **Testing**: Add unit tests (Jest) and integration tests (React Testing Library)
5. **Performance**: Implement code splitting and lazy loading for routes
6. **Accessibility**: Enhanced ARIA labels and keyboard navigation
7. **Internationalization**: Add i18n support for multiple languages
8. **Dark Mode**: Implement dark mode theme toggle
9. **Real-time Updates**: Add WebSocket support for real-time updates
10. **Advanced Filtering**: Add filtering and sorting capabilities to tables
11. **Export Functionality**: Add PDF/Excel export for reports
12. **Notifications**: Add notification system for important updates
13. **Search**: Implement global search functionality
14. **Drag & Drop**: Add drag-and-drop for file uploads and task management
15. **Comments/Notes**: Add commenting system for collaboration

## 📝 Notes

- The design follows the provided requirements with attention to visual details
- All components are fully responsive with breakpoints for mobile, tablet, and desktop
- The code follows React best practices using functional components and hooks
- Components are reusable and well-organized for maintainability
- The application uses Tailwind CSS for styling with custom utilities
- Timeline progress can be controlled by modifying `timelineProgress` in `mockData.js`

## 👤 Author

Built as part of a technical assessment for Tahwul.

## 📄 License

This project is created for assessment purposes.

