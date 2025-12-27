"use client"

import { useState } from 'react'

export default function ContractorDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    { id: 1, name: 'Downtown Office Complex', status: 'Active', waivers: 3, amount: '$125,000' },
    { id: 2, name: 'Residential Development', status: 'Pending', waivers: 1, amount: '$85,000' },
    { id: 3, name: 'Shopping Center Renovation', status: 'Completed', waivers: 5, amount: '$200,000' }
  ]

  const recentWaivers = [
    { id: 1, project: 'Downtown Office Complex', type: 'Conditional', amount: '$25,000', status: 'Approved', date: '2025-12-25' },
    { id: 2, project: 'Residential Development', type: 'Unconditional', amount: '$15,000', status: 'Pending', date: '2025-12-24' },
    { id: 3, project: 'Shopping Center', type: 'Final Payment', amount: '$50,000', status: 'Processing', date: '2025-12-23' }
  ]

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-[#37322F]">LienWaiver Pro</h1>
              <span className="ml-4 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Contractor</span>
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
            {['overview', 'projects', 'waivers', 'compliance'].map((tab) => (
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
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-[#605A57]">Active Projects</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-blue-600">28</div>
                <div className="text-sm text-[#605A57]">Pending Waivers</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-purple-600">$450K</div>
                <div className="text-sm text-[#605A57]">Total Value</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-2xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-[#605A57]">Compliance Rate</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-[#37322F]">Recent Lien Waivers</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentWaivers.map((waiver) => (
                      <tr key={waiver.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#37322F]">{waiver.project}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{waiver.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#37322F]">{waiver.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            waiver.status === 'Approved' ? 'bg-green-100 text-green-800' :
                            waiver.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {waiver.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{waiver.date}</td>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waivers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#37322F]">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'Active' ? 'bg-green-100 text-green-800' :
                          project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#605A57]">{project.waivers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#37322F]">{project.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900">New Waiver</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other tabs would show relevant content */}
        {activeTab === 'waivers' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-[#37322F] mb-4">All Lien Waivers</h3>
            <p className="text-[#605A57]">Comprehensive waiver management interface would be here.</p>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-[#37322F] mb-4">Compliance Dashboard</h3>
            <p className="text-[#605A57]">State-specific compliance tracking and requirements would be here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
