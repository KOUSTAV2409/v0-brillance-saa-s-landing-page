import React from 'react'

interface LienWaiverHeroProps {
  width?: string | number
  height?: string | number
  theme?: 'light' | 'dark'
  className?: string
}

export default function LienWaiverHero({ 
  width = "100%", 
  height = "100%", 
  theme = "light", 
  className = "" 
}: LienWaiverHeroProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Lien Waiver</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Processed</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Project:</span>
            <span className="text-sm font-medium">Construction Site A</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Amount:</span>
            <span className="text-sm font-medium">$25,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Status:</span>
            <span className="text-sm text-green-600 font-medium">Approved</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Automatically verified & compliant
          </div>
        </div>
      </div>
    </div>
  )
}
