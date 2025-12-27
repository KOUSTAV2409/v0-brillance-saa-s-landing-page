"use client"

import { useState } from 'react'

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    { id: 1, name: 'Office Building Renovation', contractor: 'ABC Construction', status: 'In Progress', waivers: 5, amount: '$250,000' },
    { id: 2, name: 'Warehouse Expansion', contractor: 'BuildRight LLC', status: 'Planning', waivers: 2, amount: '$180,000' },
    { id: 3, name: 'Retail Space Buildout', contractor: 'Premier Builders', status: 'Completed', waivers: 8, amount: '$320,000' }
  ]

  const waiverRequests = [
    { id: 1, contractor: 'ABC Construction', project: 'Office Building', type: 'Progress Payment', amount: '$45,000', status: 'Pending Review', date: '2025-12-25' },
    { id: 2, contractor: 'BuildRight LLC', project: 'Warehouse Expansion', type: 'Conditional', amount: '$30,000', status: 'Approved', date: '2025-12-24' },
    { id: 3, contractor: 'Premier Builders', project: 'Retail Space', type: 'Final Payment', amount: '$75,000', status: 'Under Review', date: '2025-12-23' }
  ]

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-[#37322F]">LienWaiver Pro</h1>
              <span className="ml-4 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Property Owner</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[#605A57] hover:text-[#37322F]">Settings</button>
              <button className="text-[#605A57] hover:text-[#37322F]">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {['overview', 'projects', 'contractors', 'compliance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-[#605A57] hover:text-[#37322F]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-[#605A57]">Active Projects</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-orange-600">15</div>
                <div className="text-sm text-[#605A57]">Pending Reviews</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-green-600">$750K</div>
                <div className="text-sm text-[#605A57]">Total Investment</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-[#605A57]">Compliance Rate</div>
              </div>
            </div>

            {/* Pending Waiver Requests */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-[#37322F]">Pending Waiver Requests</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contractor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {waiverRequests.map((request) => (
                      <tr key={request.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#37322F]">{request.contractor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{request.project}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{request.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#37322F]">{request.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                            request.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Review</button>
                          <button className="text-green-600 hover:text-green-900">Approve</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-[#37322F]">My Projects</h3>
              <button className="bg-[#37322F] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2F2A28]">
                New Project
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contractor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waivers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#37322F]">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{project.contractor}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{project.waivers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#37322F]">{project.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900">Track</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other tabs would show relevant content */}
        {activeTab === 'contractors' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-[#37322F] mb-4">Contractor Management</h3>
            <p className="text-[#605A57]">Contractor verification and management interface would be here.</p>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-[#37322F] mb-4">Compliance Monitoring</h3>
            <p className="text-[#605A57]">Project compliance tracking and legal requirement monitoring would be here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
