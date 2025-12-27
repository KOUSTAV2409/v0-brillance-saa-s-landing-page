"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('userData')
    
    if (!userData) {
      // No user data, redirect to login
      router.push('/login')
      return
    }

    const user = JSON.parse(userData)
    
    // Redirect based on role
    if (user.role === 'contractor') {
      router.push('/dashboard/contractor')
    } else {
      router.push('/dashboard/customer')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#37322F] mx-auto mb-4"></div>
        <p className="text-[#605A57]">Redirecting to your dashboard...</p>
      </div>
    </div>
  )
}
