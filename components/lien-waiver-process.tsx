import React from 'react'

interface LienWaiverProcessProps {
  width?: string | number
  height?: string | number
  className?: string
}

export default function LienWaiverProcess({ 
  width = "100%", 
  height = "100%", 
  className = "" 
}: LienWaiverProcessProps) {
  const steps = [
    { id: 1, title: "Submit Request", status: "completed" },
    { id: 2, title: "Review & Verify", status: "completed" },
    { id: 3, title: "Generate Document", status: "active" },
    { id: 4, title: "Final Approval", status: "pending" }
  ]

  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Workflow Progress</h3>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.status === 'completed' ? 'bg-green-500 text-white' :
                step.status === 'active' ? 'bg-blue-500 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {step.status === 'completed' ? '✓' : step.id}
              </div>
              <div className="ml-3 flex-1">
                <div className={`text-sm font-medium ${
                  step.status === 'active' ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {step.title}
                </div>
              </div>
              {step.status === 'active' && (
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            Estimated completion: 2-3 business days
          </div>
        </div>
      </div>
    </div>
  )
}
