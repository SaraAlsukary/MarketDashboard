import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BellDot, LogOut, User, Wrench } from "lucide-react"
import FilterDrop from '@/components/Feedbacks/FilterDrop/FilterDrop'
export default function DropdownMenuDemo({ children }: { children: React.ReactNode }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" >
                <DropdownMenuLabel>معلوماتي</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="font-bold text-xl  justify-center" >
                        Mohamed Qasem
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" justify-center">

                        mohamed@example.com
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup >
                    <DropdownMenuItem className="justify-end">
                        الملف الشخصي
                        <User />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="justify-end">
                        الاعدادات
                        <Wrench />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="sm:block max-sm:block hidden xl:hidden lg:hidden md:hidden" />

                <DropdownMenuGroup >
                    <DropdownMenuItem className="justify-end sm:flex max-sm:flex lg:hidden xl:hidden md:hidden">
                        الاشعارات
                        <button className="mx-1 rounded-lg hover:bg-accent transition-colors">
                            <BellDot size={20} />
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="justify-end  sm:flex max-sm:flex lg:hidden xl:hidden md:hidden">
                        <FilterDrop />

                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-end">
                    Log out
                    <LogOut />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
