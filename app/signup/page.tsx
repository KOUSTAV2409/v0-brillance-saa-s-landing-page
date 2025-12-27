"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // After signup, redirect to role selection
        router.push('/role-selection')
    }

    const handleSocialSignup = () => {
        // For demo, redirect directly to role selection
        router.push('/role-selection')
    }

    return (
        <section className="flex min-h-screen bg-zinc-50 px-4 py-4 dark:bg-transparent">
            <form
                onSubmit={handleSubmit}
                className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
                <div className="p-5">
                    <div className="text-center">
                        <Link href="/" aria-label="go home">
                            <p className='text-xl font-bold'>WaiverPro</p>
                        </Link>
                        <h1 className="mb-1 mt-2 text-lg font-semibold">Create Account</h1>
                        <p className="text-xs text-muted-foreground">Join WaiverPro today</p>
                    </div>

                    <div className="mt-4 space-y-3">
                        <div className="flex gap-2">
                            <Button type="button" variant="outline" className="flex-1 h-7 text-xs" onClick={handleSocialSignup}>
                                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24">
                                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                Google
                            </Button>
                            <Button type="button" variant="outline" className="flex-1 h-7 text-xs" onClick={handleSocialSignup}>
                                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24">
                                    <path fill="#f25022" d="M1 1h10.5v10.5H1z"/>
                                    <path fill="#00a4ef" d="M12.5 1H23v10.5H12.5z"/>
                                    <path fill="#7fba00" d="M1 12.5h10.5V23H1z"/>
                                    <path fill="#ffb900" d="M12.5 12.5H23V23H12.5z"/>
                                </svg>
                                Microsoft
                            </Button>
                        </div>
                        
                        <div className="relative py-1">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-dashed" />
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-card px-2 text-muted-foreground">or</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <Label htmlFor="email" className="text-xs">Email</Label>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="h-8"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="password" className="text-xs">Password</Label>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                    id="password"
                                    placeholder="Create a password"
                                    className="h-8"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="confirmPassword" className="text-xs">Confirm Password</Label>
                                <Input
                                    type="password"
                                    required
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="h-8"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                />
                            </div>

                            <Button type="submit" className="w-full h-8 mt-4">Create Account</Button>
                        </div>
                    </div>
                </div>

                <div className="bg-muted rounded-b-[calc(var(--radius)+.125rem)] border-t p-3">
                    <p className="text-center text-xs text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-600 hover:underline font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}
