import React from 'react'

export default function LienWaiverDocumentation() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-0 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#37322F] mb-4">
            Legal Documentation Made Simple
          </h2>
          <p className="text-lg text-[#605A57] max-w-2xl mx-auto">
            Access comprehensive resources and templates for all your lien waiver needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-[rgba(55,50,47,0.12)]">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#37322F] mb-2">Document Templates</h3>
            <p className="text-[#605A57] mb-4">
              Pre-built templates for conditional and unconditional lien waivers, compliant with state laws.
            </p>
            <ul className="space-y-2 text-sm text-[#605A57]">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                Conditional Waivers
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                Unconditional Waivers
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                Progress Payment Forms
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-[rgba(55,50,47,0.12)]">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#37322F] mb-2">Compliance Guide</h3>
            <p className="text-[#605A57] mb-4">
              Stay up-to-date with changing lien laws and requirements across all 50 states.
            </p>
            <ul className="space-y-2 text-sm text-[#605A57]">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                State-by-State Requirements
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                Deadline Tracking
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                Legal Updates
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-[rgba(55,50,47,0.12)]">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#37322F] mb-2">Best Practices</h3>
            <p className="text-[#605A57] mb-4">
              Learn from industry experts with our comprehensive guides and training materials.
            </p>
            <ul className="space-y-2 text-sm text-[#605A57]">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                Risk Management
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                Process Optimization
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                Training Resources
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
