"use client"
import React from 'react'
import NetflixLogo from "@/public/netflix.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Bell, Search,UserPlus2Icon } from 'lucide-react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'


const Header = () => {
  const pathname = usePathname()
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'TV Shows', href: '/tv-shows' },
    { title: 'Movies', href: '/movies' },
    { title: 'Latest', href: '/latest' },
    { title: 'My List', href: '/my-list' },
    { title: 'Browse by Languages', href: '/orginal-audio' },
  ]

  return (
    <header className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="container max-w-[1440px] mx-auto flex items-center justify-between px-4 py-4">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image 
              src={NetflixLogo} 
              alt="Netflix" 
              width={120} 
              height={35}
              priority
            />
          </Link>
          
          <nav>
            <ul className="flex items-center gap-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`text-sm text-white hover:text-gray-300 transition-all duration-200 ${pathname === item.href ? "text-[20px] font-bold text-white" : "text-base"}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button className="bg-transition text-gray-200 hover:text-white hover:bg-red-600">
          <Search size={20} />
          </Button>
          <Button className="bg-transition text-gray-200 hover:text-white transition hover:bg-red-600">
            <Bell size={20} />
          </Button>
          <Button className="bg-transition rounded-lg bg-red-600 text-white hover:bg-red-500">
            Account<UserPlus2Icon/>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

