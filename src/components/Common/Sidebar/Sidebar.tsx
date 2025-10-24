
"use client"
import { useState, useEffect } from "react"
import { Home, ChevronLeft, ShoppingBag, Users, Folders, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Header from "@/components/Common/Header/Header"
import { motion } from 'framer-motion'

const items = [
    {
        title: "الرئيسية",
        url: "#",
        icon: Home,
    },
    {
        title: "الموردين",
        url: "#",
        icon: ShoppingBag,
    },
    {
        title: "العملاء",
        url: "#",
        icon: Users,
    },
    {
        title: "الطلبات",
        url: "#",
        icon: Folders,
    },
]

export default function AppSidebar({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [desktopCollapsed, setDesktopCollapsed] = useState(true)
    const [activeItem, setActiveItem] = useState("الرئيسية")

    // تحسين كشف حجم الشاشة
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 1024
            setIsMobile(mobile)
            if (!mobile && mobileOpen) {
                setMobileOpen(false)
            }
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [mobileOpen])

    // منع التمرير عند فتح القائمة في الهاتف
    useEffect(() => {
        if (isMobile && mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobile, mobileOpen])

    const handleItemClick = (title: string) => {
        setActiveItem(title)
        if (isMobile) {
            setMobileOpen(false)
        }
    }

    return (
        <div className="flex min-h-screen bg-background">

            {isMobile && mobileOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <motion.aside
                initial={isMobile ? { x: "100%" } : { x: 0 }}
                animate={isMobile ? { x: mobileOpen ? 0 : "100%" } : { x: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={cn(
                    "bg-background border-l z-50 flex flex-col h-screen",
                    "fixed right-0 top-0",
                    isMobile && "w-64",
                    "lg:relative lg:translate-x-0",
                    !isMobile && [
                        desktopCollapsed ? "w-16" : "w-64"
                    ]
                )}
            >
                <div className={cn(
                    "flex items-center justify-between p-4 border-b flex-row-reverse",
                )}>
                    {(isMobile || !desktopCollapsed) && (
                        <span className="font-semibold text-lg">لوحة التحكم</span>
                    )}

                    {isMobile ? (
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 rounded-lg hover:bg-accent transition-colors"
                        >
                            <X size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={() => setDesktopCollapsed(!desktopCollapsed)}
                            className="p-2 rounded-lg hover:bg-accent transition-colors"
                        >
                            <ChevronLeft className={cn(
                                "transition-transform duration-300",
                                desktopCollapsed && "rotate-180"
                            )} size={18} />
                        </button>
                    )}
                </div>

                <nav className="flex-1 p-2">
                    <ul className="space-y-2">
                        {items.map((item) => (
                            <li key={item.title}>
                                <a
                                    href={item.url}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleItemClick(item.title)
                                    }}
                                    className={cn(
                                        "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group",
                                        "hover:bg-accent active:bg-accent/80",
                                        isMobile && "flex-row-reverse justify-end",
                                        !isMobile && [
                                            desktopCollapsed
                                                ? "justify-center"
                                                : "flex-row-reverse justify-end"
                                        ],
                                        activeItem === item.title
                                            ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
                                            : "text-foreground hover:shadow-md"
                                    )}
                                >
                                    <item.icon
                                        size={20}
                                        className={cn(
                                            "transition-transform duration-200",
                                            activeItem === item.title && "scale-110",
                                            !isMobile && desktopCollapsed && activeItem !== item.title && "group-hover:scale-110"
                                        )}
                                    />
                                    {(isMobile || !desktopCollapsed) && (
                                        <span className="text-sm font-medium">{item.title}</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.aside>

            <motion.div
                className={cn(
                    "flex-1 flex flex-col min-h-screen w-full transition-all duration-300",
                    isMobile && mobileOpen && "blur-sm"
                )}

            >
                <Header
                    onMobileMenuToggle={() => setMobileOpen(true)}
                    isMobile={isMobile}
                />
                <main className={cn(
                    "container flex-1 overflow-auto w-full",
                    "p-4 pt-20 lg:pt-10 lg:pr-18",
                )}>
                    {children}
                </main>
            </motion.div>
        </div>
    )
}