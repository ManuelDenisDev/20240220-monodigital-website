import { useState } from "react"
import { Icon } from '@iconify/react';
import menu from '@config/menu.json';

export default function ButtonNavState() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    const { principal } = menu;
    

    return (
        <div className="relative">
            <button
                className="md:hidden size-5 z-[60] absolute -top-[10px] right-[10px] "
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-controls="sidebar"
                aria-label="Open Menu">
                {isOpen ? (
                    <Icon icon="line-md:close-small" />
                ) : (
                    <Icon icon="line-md:close-to-menu-alt-transition" />
                )}
            </button>
            <div className={`inset-x-0 transition-all duration-500 top-0 md:hidden z-[55] ${isOpen ? 'fixed' : 'hidden'}`}>
                <div className="mx-auto">
                    <div className="flex flex-col backdrop-blur-xl backdrop-filter bg-onyx-900 dark:bg-onyx-200 border border-onyx-800 dark:border-onyx-300 mx-auto p-2 relative rounded-xl w-full shadow-massive">
                        <nav className={`flex-col flex-grow justify-center ${isOpen ? 'py-12' : 'py-0'} transition-all ease-in-out duration-500`}>
                            <ul className="items-center gap-3 justify-center list-none md:inline-flex md:ml-auto md:space-y-0 md:text-left space-y-2 text-center">
                                {principal.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.url} aria-label={item.label} className="cursor-pointer px-2 py-2 md:py-10 text-xs text-white dark:text-onyx-50 hover:text-indigo-300 dark:hover:text-indigo-600 transition-all duration-300">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}