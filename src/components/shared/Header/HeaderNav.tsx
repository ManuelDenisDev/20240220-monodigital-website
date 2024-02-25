import HeaderNavItem from '@shared/Header/HeaderNavItem.tsx'
import { menuNavBar } from "@config/navbar.json";



interface HeaderNavItemProps {
        datosNav: {
                title: string;
                description: string;
                emoji: string;
                label: string;
                href: string;
                submenu: {
                        title: string;
                        description: string;
                        emoji: string;
                        label: string;
                        href: string;
                }[];
        };
}

export default function HeaderNav() {

        return (
                <div>

                        <nav className="lg:flex gap-x-4 hidden md:flex">
                                {menuNavBar.map((item, index) => (
                                        <HeaderNavItem key={index} datosNav={{ id: index.toString(), ...item }} />
                                ))}
                        </nav>
                </div>
        )
}