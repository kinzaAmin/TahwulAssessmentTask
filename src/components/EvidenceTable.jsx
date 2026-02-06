import { useState } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

const EvidenceTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0

    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (aValue === bValue) return 0

    const comparison = aValue > bValue ? 1 : -1
    return sortConfig.direction === 'asc' ? comparison : -comparison
  })

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 ml-1 text-gray-400" />
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="w-4 h-4 ml-1 text-gray-600" />
      : <ArrowDown className="w-4 h-4 ml-1 text-gray-600" />
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-[#34C759]'
      case 'Pending Review':
        return 'text-[#FFCC00]'
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border border-blue-200'
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  const getStatusBg = (status) => {
    if (status === 'Pending Review') {
      return { backgroundColor: '#FFCC001A' }
    }
    if (status === 'Approved') {
      return { backgroundColor: '#34C7591A' }
    }
    return {}
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 bg-[#F5F8FB]">
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('documentNumber')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Document Number</span>
                {getSortIcon('documentNumber')}
              </div>
            </th>
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('documentName')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Document Name</span>
                {getSortIcon('documentName')}
              </div>
            </th>
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('documentLead')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Document Lead</span>
                {getSortIcon('documentLead')}
              </div>
            </th>
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('documentPreparer')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Document Preparer</span>
                {getSortIcon('documentPreparer')}
              </div>
            </th>
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('date')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Date</span>
                {getSortIcon('date')}
              </div>
            </th>
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('dueDate')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Due Date</span>
                {getSortIcon('dueDate')}
              </div>
            </th>
            <th 
              className="text-center py-3 px-4 cursor-pointer font-normal text-xs leading-none tracking-[0.02em] capitalize text-[#1D3557] bg-[#F5F8FB] hover:bg-[#E8F0F5]"
              onClick={() => handleSort('status')}
            >
              <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                <span>Status</span>
                {getSortIcon('status')}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 align-middle font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                {row.documentNumber}
              </td>
              <td className="py-3 px-4 align-middle font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                {row.documentName}
              </td>
              <td className="py-3 px-4 align-middle font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                {row.documentLead}
              </td>
              <td className="py-3 px-4 align-middle font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                {row.documentPreparer}
              </td>
              <td className="py-3 px-4 align-middle whitespace-nowrap font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                {row.date}
              </td>
              <td className="py-3 px-4 align-middle whitespace-nowrap font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                {row.dueDate}
              </td>
              <td className="py-3 px-4 align-middle">
                <span 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(row.status)}`}
                  style={getStatusBg(row.status)}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EvidenceTable

