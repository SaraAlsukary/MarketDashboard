import React from 'react'
import { BellDot, Menu } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { ModeToggle } from '@/components/Feedbacks/ModeToggle/ModeToggle';
import DropDown from '@/components/Common/DropDown/DropDown';
import FilterDrop from '@/components/Feedbacks/FilterDrop/FilterDrop';
import Logo from '@/components/Common/Logo/Logo';
import style from './Header.module.css'
import { motion } from 'framer-motion'
const { head } = style
interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobile?: boolean;
}


const Header = ({ onMobileMenuToggle, isMobile }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={'p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30 ' + head}>
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-4 lg:pr-14">
          {/* Mobile Menu Button - Only show on mobile */}
          {isMobile && (
            <button
              onClick={onMobileMenuToggle}
              className="p-2 rounded-lg hover:bg-accent transition-colors lg:hidden"
            >
              <Menu size={20} />
            </button>
          )}
          <Logo />
        </div>

        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              <FilterDrop />
            </li>
            <li><ModeToggle /></li>
            <li>
              <button className="p-2 rounded-lg hover:bg-accent transition-colors">
                <BellDot size={20} />
              </button>
            </li>
            <li>
              <DropDown>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://ui-avatars.com/api/?name=Mohamed+Qasem&background=667eea&color=fff" alt="@shadcn" />
                  <AvatarFallback>MQ</AvatarFallback>
                </Avatar>
              </DropDown>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
