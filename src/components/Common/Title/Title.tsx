'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
const Title = () => {
    const titleVariants: Variants = {
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
    return (
        <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            className="title mb-20 xl:text-right lg:text-right md:text-center sm:text-center max-sm:text-center ">
            <h1 className="text-4xl font-bold mb-2"> لوحة التحكم - المدير</h1>
            <p> إدارة شاملة للمنصة والإشراف على جميع العمليات</p>
        </motion.div >
    )
}

export default Title