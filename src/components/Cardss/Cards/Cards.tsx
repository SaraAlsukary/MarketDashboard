'use client'
import React, { ElementType } from 'react'
import style from './Cards.module.css'
import { motion, Variants } from 'framer-motion'
const { card, icon, title, avg, text } = style;
const Cards = (props: { icon: ElementType, title: string, text: string, avg: string, color: string }) => {

    const cardVariants: Variants = {
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
            variants={cardVariants}
            whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            whileInView={'visible'}
            whileTap={{ scale: 0.95 }}
            className={card}>

            <div className={icon + ' ' + props.color}>
                <props.icon size={30} />
            </div>
            <div className={title}>
                {props.title}
            </div>
            <h1 className={avg}>
                {props.avg}
            </h1>
            <div className={text}>
                {props.text}
            </div>
        </motion.div>
    )
}

export default Cards