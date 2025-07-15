// components/ThemeToggle.tsx
'use client'

import { useContext, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { DarkModeContext } from './../app/(context)/DarkModeContext'
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const {setUpdateDark}=useContext(DarkModeContext)

  useEffect(() => {
    const root = window.document.documentElement
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') {
      root.classList.add('dark')
      setIsDark(true)
      setUpdateDark(true)
    } else {
      root.classList.remove('dark')
      setIsDark(false)
      setUpdateDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    const isCurrentlyDark = root.classList.contains('dark')

    if (isCurrentlyDark) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-black/20 dark:bg-white/10 border border-white/10 text-white hover:bg-black/30 transition"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
