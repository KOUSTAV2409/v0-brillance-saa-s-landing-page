import React from 'react'

export default function LienWaiverPricing() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-0 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#37322F] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#605A57] max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-[rgba(55,50,47,0.12)]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-[#37322F] mb-2">Starter</h3>
              <div className="text-3xl font-bold text-[#37322F] mb-1">$29</div>
              <div className="text-sm text-[#605A57]">per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Up to 25 waivers/month
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic templates
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Email support
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                State compliance
              </li>
            </ul>
            <button className="w-full bg-[#37322F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2F2A28] transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-[#37322F] mb-2">Professional</h3>
              <div className="text-3xl font-bold text-[#37322F] mb-1">$79</div>
              <div className="text-sm text-[#605A57]">per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Up to 100 waivers/month
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced templates
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                API access
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Analytics dashboard
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-[rgba(55,50,47,0.12)]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-[#37322F] mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-[#37322F] mb-1">Custom</div>
              <div className="text-sm text-[#605A57]">contact us</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited waivers
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom integrations
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dedicated support
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SLA guarantee
              </li>
              <li className="flex items-center text-sm text-[#605A57]">
                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Training & onboarding
              </li>
            </ul>
            <button className="w-full bg-[#37322F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2F2A28] transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
