"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NewWaiverPage() {
  const [selectedContractor, setSelectedContractor] = useState(null)
  const [waiverData, setWaiverData] = useState({
    type: 'conditional',
    amount: '',
    project: '',
    paymentDate: '',
    description: ''
  })

  useEffect(() => {
    const contractor = localStorage.getItem('selectedContractor')
    if (contractor) {
      setSelectedContractor(JSON.parse(contractor))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Waiver request created successfully!')
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
              <h1 className="text-xl font-semibold text-[#37322F]">Create New Waiver</h1>
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
              <label className="block text-sm font-medium text-[#37322F] mb-2">Waiver Type</label>
              <select
                value={waiverData.type}
                onChange={(e) => setWaiverData({...waiverData, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="conditional">Conditional Waiver</option>
                <option value="unconditional">Unconditional Waiver</option>
                <option value="progress">Progress Payment Waiver</option>
                <option value="final">Final Payment Waiver</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#37322F] mb-2">Amount</label>
                <input
                  type="text"
                  required
                  value={waiverData.amount}
                  onChange={(e) => setWaiverData({...waiverData, amount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#37322F] mb-2">Payment Date</label>
                <input
                  type="date"
                  required
                  value={waiverData.paymentDate}
                  onChange={(e) => setWaiverData({...waiverData, paymentDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#37322F] mb-2">Project</label>
              <input
                type="text"
                required
                value={waiverData.project}
                onChange={(e) => setWaiverData({...waiverData, project: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project name or reference"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#37322F] mb-2">Description</label>
              <textarea
                value={waiverData.description}
                onChange={(e) => setWaiverData({...waiverData, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Additional details (optional)"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">Legal Notice</h4>
              <p className="text-sm text-yellow-700">
                This waiver will be automatically checked for compliance with state laws. 
                Please ensure all information is accurate before submission.
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-[#37322F] text-white px-6 py-2 rounded-lg hover:bg-[#2F2A28] transition-colors"
              >
                Create Waiver
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
