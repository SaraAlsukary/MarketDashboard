'use client'
import React from 'react'
import Cards from '../Cards/Cards'
import style from './CardsList.module.css'
import { CheckCircle, CircuitBoard, ShoppingBag, Users2 } from 'lucide-react'
const { cardlists } = style
import { motion } from 'framer-motion'
const CardsList = () => {
    const items = [
        {
            title: "إجمالي الموردين",
            avg: "48",
            text: '+5 هذا الشهر',
            icon: ShoppingBag,
            color: 'orange'

        },
        {
            title: "إجمالي العملاء",
            avg: "127",
            text: '12 طلب معلق',
            icon: Users2,
            color: 'blue'

        },
        {
            title: "إجمالي الطلبات",
            avg: "342",
            text: '+28 هذا الأسبوع',
            icon: CircuitBoard,
            color: 'red'
        },
        {
            title: "معدل النجاح",
            avg: "94.5%",
            text: '323 طلب مكتمل',
            icon: CheckCircle,
            color: 'green'
        },

    ]
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const CardsListItems = items.map((item, idx) => <Cards {...item} key={idx} />)
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            
            viewport={{ once: true, margin: "-50px" }}
            className={'grid lg:grid-cols-4 md:grid-cols-2  xl:grid-cols-4 gap-3 md:gap-10 sm:gap-10 max-sm:gap-10 sm:grid-cols-1 ' + cardlists}>
            {CardsListItems}
        </motion.div>
    )
}

export default CardsList