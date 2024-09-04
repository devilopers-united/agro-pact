// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import { navItems } from "@/data";

export default function ({children}: {children: React.ReactNode}) {
    return (
        <div>
            {/* <FloatingNav navItems={navItems} /> */}
            {children}
        </div>
    )
}