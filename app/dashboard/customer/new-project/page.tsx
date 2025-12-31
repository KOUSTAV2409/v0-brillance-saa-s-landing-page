"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NewProjectPage() {
  const [selectedContractor, setSelectedContractor] = useState(null)
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    budget: '',
    timeline: '',
    location: ''
  })

  useEffect(() => {
    const contractor = localStorage.getItem('selectedContractor')
    if (contractor) {
      setSelectedContractor(JSON.parse(contractor))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Project created successfully!')
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard/customer" className="text-blue-600 hover:text-blue-800 mr-4">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-[#37322F]">Create New Project</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedContractor && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Selected Contractor</h3>
            <p className="text-green-700">{selectedContractor.name} - {selectedContractor.location}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#37322F] mb-2">Project Name</label>
              <input
                type="text"
                required
                value={projectData.name}
                onChange={(e) => setProjectData({...projectData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#37322F] mb-2">Description</label>
              <textarea
                required
                value={projectData.description}
                onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Describe your project"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#37322F] mb-2">Budget</label>
                <input
                  type="text"
                  required
                  value={projectData.budget}
                  onChange={(e) => setProjectData({...projectData, budget: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#37322F] mb-2">Timeline</label>
                <input
                  type="text"
                  required
                  value={projectData.timeline}
                  onChange={(e) => setProjectData({...projectData, timeline: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 3 months"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#37322F] mb-2">Location</label>
              <input
                type="text"
                required
                value={projectData.location}
                onChange={(e) => setProjectData({...projectData, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project location"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-[#37322F] text-white px-6 py-2 rounded-lg hover:bg-[#2F2A28] transition-colors"
              >
                Create Project
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
