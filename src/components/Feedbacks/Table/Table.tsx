'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { motion } from 'framer-motion'


const TableComponent = () => {

    const data = [
        {
            name: "أحمد محمد",
            email: "ahmed@example.com",
            details: "شركة التوريدات المتقدمة",
            date: '15 أكتوبر 2025',
            status: 'مكتمل',
        },
        {
            name: "فاطمة علي",
            email: "fatima@example.com",
            details: "مؤسسة الجودة للتجارة",
            date: '15 أكتوبر 2025',
            status: 'قيد المعالجة',
        },
        {
            name: "محمد سالم",
            email: "mohammed@example.com",
            details: "متجر المواد الغذائية",
            date: '	14 أكتوبر 2025',
            status: 'جديد',
        },
        {
            name: "أحمد محمد",
            email: "ahmed@example.com",
            details: "شركة التوريدات المتقدمة",
            date: '15 أكتوبر 2025',
            status: 'مكتمل',
        },
        {
            name: "سارة عبدالله",
            email: "sara@example.com",
            details: "شركة الإلكترونيات",
            date: '14 أكتوبر 2025',
            status: 'مكتمل',
        },
    ]
    const tableRows = data.map((item, idx) => <TableRow key={idx} className={`hover:${idx % 2 === 0 ? 'bg-purple-300' : "bg-white"} text-black ${idx % 2 === 0 ? 'bg-purple-300' : "bg-white"}`}>
        <TableCell className="font-medium">{item.name}</TableCell>
        <TableCell className="text-center">{item.details}</TableCell>
        <TableCell >{item.date}</TableCell>
        <TableCell className="text-right">{item.status}</TableCell>
    </TableRow>)
    const tableVariants: {} = {
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
        <motion.div variants={tableVariants}
            initial="hidden"
            whileInView="visible" className="mt-10 w-full rounded-md border border-gray-200 overflow-hidden">
            <Table
            >
                <TableCaption className="bg-purple-500 text-white p-2 m-0">آخر الطلبات والمعاملات</TableCaption>
                <TableHeader>
                    <TableRow className="bg-purple-400  hover:bg-purple-400">
                        <TableHead className="w-[100px] text-white">العميل/المورد</TableHead>
                        <TableHead className="text-center text-white">التفاصيل</TableHead>
                        <TableHead className="text-right text-white">التاريخ</TableHead>
                        <TableHead className="text-right text-white">الحالة</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </motion.div>)
}
export default TableComponent