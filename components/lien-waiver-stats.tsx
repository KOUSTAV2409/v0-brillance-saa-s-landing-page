import React from 'react'

interface LienWaiverStatsProps {
  width?: string | number
  height?: string | number
  theme?: 'light' | 'dark'
  className?: string
}

export default function LienWaiverStats({ 
  width = "100%", 
  height = "100%", 
  theme = "light", 
  className = "" 
}: LienWaiverStatsProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Performance Metrics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-xs text-gray-600">Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2.3</div>
            <div className="text-xs text-gray-600">Avg Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">$12K</div>
            <div className="text-xs text-gray-600">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">247</div>
            <div className="text-xs text-gray-600">Processed</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>This Month</span>
            <span className="text-green-600">↗ +15%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
