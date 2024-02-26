import HeaderNavItem from '@shared/Header/HeaderNavItem.tsx'
import { menuNavBar } from "@config/navbar.json";

export default function HeaderNav() {

        return (

                <nav className="gap-x-4 hidden tabletM:flex">
                        {menuNavBar.map((item, index) => (
                                <HeaderNavItem key={index} datosNav={{ id: index.toString(), ...item }} />
                        ))}
                </nav>
        )
}