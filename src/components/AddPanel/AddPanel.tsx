'use client'
import { PlusCircle, UserPlus } from 'lucide-react'
import React from 'react'
import { motion, Variants } from 'framer-motion'
const AddPanel = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const addVariants: Variants = {
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
    return (
        <motion.div
            variants={containerVariants}
            className='flex justify-between items-center gap-2'>
            <motion.div
                variants={addVariants}
                initial="hidden"
                whileInView="visible"
                className="box flex bg-purple-700 p-2 py-4 w-300 cursor-pointer items-center justify-start rounded-md">
                <div className="icon rounded-md bg-gray-400 mx-2 p-1">
                    <UserPlus color='white' size={20} />
                </div>
                <div className="text font-bold text-white">
                    اضافة مورد جديد
                </div>
            </motion.div>
            <motion.div
                variants={addVariants}
                initial="hidden"
                whileInView="visible"
                className="box flex border-2 border-blue-600 p-2 py-4  w-300 cursor-pointer items-center justify-start rounded-md">
                <div className="icon rounded-md bg-gray-200 mx-2 p-1">
                    <UserPlus color='blue' size={20} />
                </div>
                <div className="text text-blue-600 font-bold">
                    اضافة مورد جديد
                </div>
            </motion.div>
            <motion.div
                variants={addVariants}
                initial="hidden"
                whileInView="visible" className="box flex border-2 border-green-700 p-2 py-4 w-300  cursor-pointer items-center justify-start rounded-md">
                <div className="icon rounded-md bg-gray-200 mx-2 p-1">
                    <PlusCircle color='green' size={20} />
                </div>
                <div className="text text-green-700 font-bold">
                    اضافة مورد جديد
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AddPanel