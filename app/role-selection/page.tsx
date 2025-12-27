"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

export default function RoleSelectionPage() {
  const [role, setRole] = useState('')
  const [state, setState] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (role && state) {
      // Redirect based on role
      if (role === 'contractor') {
        router.push('/dashboard/contractor')
      } else {
        router.push('/dashboard/customer')
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#37322F] mb-2">Complete Your Profile</h1>
          <p className="text-[#605A57]">Help us customize your experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-[#37322F] mb-3">What's your role?</label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="role"
                  value="contractor"
                  checked={role === 'contractor'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium text-[#37322F]">Contractor</div>
                  <div className="text-sm text-[#605A57]">I provide construction services and need to manage lien waivers</div>
                </div>
              </label>
              
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="role"
                  value="customer"
                  checked={role === 'customer'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium text-[#37322F]">Customer/Property Owner</div>
                  <div className="text-sm text-[#605A57]">I hire contractors and need to track lien waiver compliance</div>
                </div>
              </label>
            </div>
          </div>

          {/* State Selection */}
          <div>
            <label className="block text-sm font-medium text-[#37322F] mb-2">Which state do you primarily work in?</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a state</option>
              {US_STATES.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!role || !state}
            className="w-full bg-[#37322F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2F2A28] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Continue to Dashboard
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#605A57]">
            You can change these settings later in your profile
          </p>
        </div>
      </div>
    </div>
  )
}
