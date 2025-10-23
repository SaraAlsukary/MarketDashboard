'use client'

import { LucideMapPinCheckInside, Network, ShoppingBasket, Table2, UserPlus2 } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'


const RecentActivity = () => {

    const data = [{
        icon: ShoppingBasket,
        title: 'طلب جديد من العميل أحمد محمد',
        time: 'منذ 5 دقائق',
        color: "bg-pink-600"

    },
    {
        icon: Network,
        title: 'تم الموافقة على مورد جديد',
        time: 'منذ 15 دقيقة',
        color: "bg-red-600"
    },
    {
        icon: Table2,
        title: 'طلب معلق يحتاج مراجعة',
        time: 'منذ 30 دقيقة',
        color: "bg-blue-600"


    },
    {
        icon: LucideMapPinCheckInside,
        title: 'تم إكمال طلب بنجاح',
        time: 'منذ ساعة',
        color: "bg-orange-600"


    },
    {
        icon: UserPlus2,
        title: 'تقييم إيجابي من عميل',
        time: 'منذ ساعتين',
        color: "bg-green-600"


    },
    ]
    const recentVariants: {} = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }
    const recentDataList = data.map((recent, idx) =>
        <div className='recent flex  justify-start mb-4' key={idx}>
            <div className={`icon mx-3 px-2 py-2  text-center w-[40px] h-[40px] rounded-full ${recent.color}`}>
                <recent.icon size={25} color={'white'} />
            </div>
            <div className="text ">
                <h4 className='text-xl font-bold '>{recent.title}</h4>
                <p className='font-thin'>{recent.time}</p>
            </div>
        </div>)
    return (
        <motion.div variants={recentVariants}
            initial="hidden"
            whileInView="visible" className='flex flex-col border-2 p-4 rounded-md sm:w-full max-sm:w-full w-[50%] h-fit mt-15'>
            <h2 className='text-right text-2xl font-bold mb-3 w-full'>النشاط الأخير</h2>
            <div className="content">
                {recentDataList}
            </div>
        </motion.div>
    )
}

export default RecentActivity