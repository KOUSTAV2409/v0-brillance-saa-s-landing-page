"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedContractor, setSelectedContractor] = useState(null)
  const [userState, setUserState] = useState('')
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('userData')
    if (userData) {
      const user = JSON.parse(userData)
      setUserState(user.state)
      const savedContractor = localStorage.getItem('selectedContractor')
      if (savedContractor) {
        setSelectedContractor(JSON.parse(savedContractor))
      }
    }
  }, [])

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

  // Mock contractors based on user's state
  const getContractorsForState = (state) => {
    const allContractors = {
      california: [
        { id: 1, name: 'Golden State Builders', rating: 4.9, projects: 127, specialties: ['Commercial', 'Residential'], hourlyRate: '$85', location: 'Los Angeles, CA' },
        { id: 2, name: 'Pacific Construction Co', rating: 4.8, projects: 89, specialties: ['Industrial', 'Infrastructure'], hourlyRate: '$92', location: 'San Francisco, CA' },
        { id: 3, name: 'Sunshine Contractors', rating: 4.7, projects: 156, specialties: ['Renovation', 'Remodeling'], hourlyRate: '$78', location: 'San Diego, CA' }
      ],
      texas: [
        { id: 4, name: 'Lone Star Construction', rating: 4.9, projects: 203, specialties: ['Commercial', 'Industrial'], hourlyRate: '$75', location: 'Houston, TX' },
        { id: 5, name: 'Texas Premier Builders', rating: 4.8, projects: 145, specialties: ['Residential', 'Commercial'], hourlyRate: '$82', location: 'Dallas, TX' },
        { id: 6, name: 'Alamo Contractors', rating: 4.6, projects: 98, specialties: ['Infrastructure', 'Civil'], hourlyRate: '$88', location: 'Austin, TX' }
      ]
    }
    return allContractors[state?.toLowerCase()] || allContractors.california
  }

  const contractors = getContractorsForState(userState)

  const handleNewProject = () => {
    if (!selectedContractor) {
      setActiveTab('contractors')
      alert('Please select a contractor first to create a new project.')
      return
    }
    router.push('/dashboard/customer/new-project')
  }

  const handleNewWaiver = () => {
    if (!selectedContractor) {
      setActiveTab('contractors')
      alert('Please select a contractor first to create a new waiver.')
      return
    }
    router.push('/dashboard/customer/new-waiver')
  }

  const handleSelectContractor = (contractor) => {
    setSelectedContractor(contractor)
    localStorage.setItem('selectedContractor', JSON.stringify(contractor))
    alert(`${contractor.name} selected! You can now create projects and waivers.`)
  }

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
              <button 
                onClick={() => {
                  localStorage.removeItem('userData')
                  window.location.href = '/login'
                }}
                className="text-[#605A57] hover:text-[#37322F]"
              >
                Logout
              </button>
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
          
          {/* Selected Contractor Display */}
          {selectedContractor && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-800">
                    Selected Contractor: {selectedContractor.name}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedContractor(null)
                    localStorage.removeItem('selectedContractor')
                  }}
                  className="text-xs text-green-600 hover:text-green-800"
                >
                  Change
                </button>
              </div>
            </div>
          )}
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
                          <button 
                            onClick={handleNewWaiver}
                            className="text-green-600 hover:text-green-900"
                          >
                            New Waiver
                          </button>
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
              <button 
                onClick={handleNewProject}
                className="bg-[#37322F] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2F2A28]"
              >
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
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-medium text-[#37322F]">Available Contractors in {userState}</h3>
                  <p className="text-sm text-[#605A57]">Select a contractor to work with on your projects</p>
                </div>
                <div className="flex items-center space-x-2">
                  <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                    <option>All Specialties</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                    <option>Industrial</option>
                  </select>
                  <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                    <option>Sort by Rating</option>
                    <option>Sort by Price</option>
                    <option>Sort by Projects</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contractors.map((contractor) => (
                  <div key={contractor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-[#37322F]">{contractor.name}</h4>
                        <p className="text-sm text-[#605A57]">{contractor.location}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="text-sm font-medium">{contractor.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#605A57]">Projects Completed:</span>
                        <span className="font-medium">{contractor.projects}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#605A57]">Hourly Rate:</span>
                        <span className="font-medium text-green-600">{contractor.hourlyRate}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-[#605A57] mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {contractor.specialties.map((specialty, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleSelectContractor(contractor)}
                        className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                          selectedContractor?.id === contractor.id
                            ? 'bg-green-600 text-white'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {selectedContractor?.id === contractor.id ? 'Selected' : 'Select'}
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
