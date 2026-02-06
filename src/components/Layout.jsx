import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, FileText, BarChart3, Users, Search, X, ChevronDown, Bell, Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Profile from '../assets/images/profile.svg';
import Logo from '../assets/images/logo.svg';
import sidebarCollapse from '../assets/icons/toggle.svg';
import DashboardIcon from '../assets/icons/dashboard.svg';
import PerspectivesIcon from '../assets/icons/Perspectives.svg';
import TasksIcon from '../assets/icons/Tasks.svg';
import DocumentsIcon from '../assets/icons/Documents.svg';
import ReportsIcon from '../assets/icons/Reports.svg';
import UsersRolesIcon from '../assets/icons/usersRoles.svg';

// Icon component that renders SVG inline so currentColor works
const Icon = ({ src, className, style }) => {
  const [svgContent, setSvgContent] = useState('')
  
  useEffect(() => {
    fetch(src)
      .then(res => res.text())
      .then(text => setSvgContent(text))
      .catch(() => {})
  }, [src])
  
  if (!svgContent) {
    return <img src={src} alt="" className={className} style={style} />
  }
  
  return (
    <div 
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

const Layout = ({ children }) => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/', icon: DashboardIcon },
    { name: 'Perspectives', href: '/perspectives', icon: PerspectivesIcon },
    { name: 'Tasks', href: '#', icon: TasksIcon },
    { name: 'Documents', href: '#', icon: DocumentsIcon },
    { name: 'Reports', href: '#', icon: ReportsIcon },
    { name: 'Users & Roles', href: '#', icon: UsersRolesIcon },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Dark Blue */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full bg-[#1e3a5f] transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${
          sidebarCollapsed ? 'lg:w-0' : 'lg:w-64'
        } w-64`}
      >
        <div className={`h-full transition-opacity duration-300 ${
          sidebarCollapsed ? 'lg:opacity-0 lg:pointer-events-none lg:overflow-hidden' : ''
        }`}>
          {/* TAHWUL Logo */}
          <div className="flex items-center h-20 px-6 ">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="TAHWUL" className="w-full h-full" />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-gray-300 ml-auto"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="mt-6 px-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#98AEC01A] text-white font-medium'
                      : 'text-[#7B9FC3] hover:bg-[#2a4a6f] hover:text-white font-medium text-sm leading-4 tracking-normal capitalize align-middle'
                  }`}
                >
                  <Icon 
                    src={item.icon}
                    className="mr-3 w-5 h-5"
                    style={{
                      color: isActive ? '#FFFFFF' : '#7B9FC3'
                    }}
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Sidebar Toggle Button - Centered in header, overlapping sidebar */}
      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        className="hidden lg:flex fixed z-40 items-center justify-center transition-all duration-300 ease-in-out"
        style={{ 
          left: sidebarCollapsed ? '1.5rem' : '16rem',
          transform: sidebarCollapsed ? 'translateX(0)' : 'translateX(-50%)',
          top: 'calc(0.25rem + 2rem - 1rem)'
        }}
      >
        <img 
          src={sidebarCollapse} 
          alt="Toggle Sidebar" 
          className="object-contain"
          style={{
            transform: sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out'
          }}
        />
      </button>

      {/* Main content */}
      <div className={`transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'lg:pl-0' : 'lg:pl-64'}`}>
       
        {/* Top bar - Header with Search */}
        <header className={`sticky top-0 z-10 bg-white border-b border-gray-200 h-16 flex items-center justify-between transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? 'lg:pl-16' : ''
        } px-4 md:px-6`}>
          {/* Mobile Menu Button - Hidden on Desktop */}
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-9 h-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors mr-3"
          >
            <Menu size={20} className="text-gray-400" />
          </button>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white text-sm placeholder-gray-400"
              />
            </div>
          </div>

          {/* Right Side Icons and User */}
          <div className="flex items-center gap-4">
            {/* Notification Bell - Outlined with red dot indicator */}
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors relative">
              <div className="relative inline-flex items-center justify-center">
                <Bell size={20} className="text-gray-600" strokeWidth={1.5} fill="none" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full  transform translate-x-1/2 -translate-y-1/2"></span>
              </div>
            </button>

            {/* User Profile - Light Grey Background, Fully Rounded */}
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-[30px] h-12">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <img 
                  src={Profile} 
                  alt="Mohamed" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-gray-600 font-medium text-xs flex items-center justify-center w-full h-full bg-gray-200">M</span>';
                  }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Mohamed</span>
              <ChevronDown size={16} className="text-gray-600 flex-shrink-0" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-6 lg:p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  )
}

export default Layout

