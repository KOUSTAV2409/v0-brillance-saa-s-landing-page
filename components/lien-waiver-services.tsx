import React from 'react'

interface LienWaiverServicesProps {
  width?: string | number
  height?: string | number
  theme?: 'light' | 'dark'
  className?: string
}

export default function LienWaiverServices({ 
  width = "100%", 
  height = "100%", 
  theme = "light", 
  className = "" 
}: LienWaiverServicesProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Compliance Check</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">State Law Requirements</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Federal Regulations</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Industry Standards</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Document Verification</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <span className="text-xs text-gray-500">Updated automatically</span>
        </div>
      </div>
    </div>
  )
}
