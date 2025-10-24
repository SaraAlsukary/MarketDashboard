'use client'


import { ActivitySquare, LucideAlignVerticalJustifyStart, LucideShoppingBag, UsersIcon } from 'lucide-react'
import React from 'react'
import { ProgressDemo } from '../Progress/Progress'
import { motion, Variants } from 'framer-motion'

const ProgressList = () => {
    const progressData = [
        {
            title: 'معدل الموافقة على الطلبات',
            value: '94.5%',
            valueInNumber: 94.5,
            color: 'pink',
            borderClass: 'border-pink-600',
            textClass: 'text-pink-700',
            progressClass: '[&>div]:bg-pink-600', // Complete Tailwind class
            icon: LucideShoppingBag,
        }, {
            title: 'نشاط الموردين',
            value: '87.5%',
            valueInNumber: 87.5,
            color: 'yellow',
            borderClass: 'border-yellow-600',
            textClass: 'text-yellow-700',
            progressClass: '[&>div]:bg-yellow-600', // Complete Tailwind class
            icon: ActivitySquare,
        }, {
            title: 'رضا العملاء',
            value: '94%',
            valueInNumber: 94,
            color: 'green',
            borderClass: 'border-green-600',
            textClass: 'text-green-700',
            progressClass: '[&>div]:bg-green-600', // Complete Tailwind class
            icon: UsersIcon
        }, {
            title: 'معدل اكتمال الطلبات',
            value: '91.2%',
            valueInNumber: 91.2,
            color: 'blue',
            borderClass: 'border-blue-600',
            textClass: 'text-blue-700',
            progressClass: '[&>div]:bg-blue-600', // Complete Tailwind class
            icon: LucideAlignVerticalJustifyStart
        }
    ]
    const progressVariantsEven: Variants = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }
    const progressVariantsOdd: Variants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }
    const titleVariant: Variants = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const progressDataList = progressData.map((pro, idx) =>
        <motion.div
            variants={(idx + 1) % 2 === 0 ? progressVariantsEven : progressVariantsOdd}
            initial="hidden"
            whileInView="visible"
            className={`p-3 w-full border-2 mb-3 rounded-lg ${pro.borderClass}`} key={idx}>
            <div className="flex justify-between p-4 items-center">
                <div className="text-info">
                    <div className="title font-bold text-right">
                        {pro.title}
                    </div>
                    <div className={`avg font-bold text-2xl ${pro.textClass}`}>
                        {pro.value}
                    </div>
                </div>
                <div className="icon">
                    <pro.icon size={30} className="text-gray-500" />
                </div>
            </div>
            <ProgressDemo value={pro.valueInNumber} className={pro.progressClass} />
        </motion.div>
    )

    return (
        <div className='flex flex-col items-center p-5 w-[50%] sm:w-full max-sm:w-full'>
            <motion.h2
                variants={titleVariant}
                initial={'hidden'}
                whileInView="visible"
                className='text-right text-2xl font-bold mb-3 w-full'>الأداء الشهري</motion.h2>
            {progressDataList}
        </div>
    )
}

export default ProgressList