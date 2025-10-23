import { Building } from 'lucide-react'
import React from 'react'
import style from './Logo.module.css'
const { logo } = style
const Logo = () => {
    return (
        <div className={" flex justify-between items-center " + logo} >
            <div className="logo-icon m-2">
                <Building size={35} />
            </div>
            <div className="text">
                <h2>منصة التوريد الذكية</h2>
                <p>الربط بين الموردين والعملاء</p>
            </div>
        </div >
    )
}

export default Logo