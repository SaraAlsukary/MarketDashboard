import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[100px] justify-end">
                <SelectValue placeholder="المدير" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem className="justify-end" value="manger">المدير</SelectItem>
                    <SelectItem className="justify-end" value="importer">المورد</SelectItem>
                    <SelectItem className="justify-end" value="customer">العميل</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
