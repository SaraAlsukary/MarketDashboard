import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Wrench } from "lucide-react"

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

                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-end">
                    Log out
                    <LogOut />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
