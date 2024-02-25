import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, Bars4Icon } from "@heroicons/react/20/solid";
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";

const solutions = [
    { name: 'Diseño Web', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Branding', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Marketing', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Nosotros', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Trabajos', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
const callsToAction = [
    { name: 'Dark Mode', href: '#', icon: PlayCircleIcon },
    { name: 'Contacto', href: '#', icon: PhoneIcon },
  ]


  export default function HeaderNavItem() {

    const HeaderNav__container = "relative z-10 md:hidden flex"
    const Popover__Button = "inline-flex items-center text-white"
    // const Popover__Panel = "flex w-screen max-w-max"
    const Popover__Panel = "absolute z-10 mt-8 -right-2 flex"
    // const PopoverPanel__Container = "w-screen max-w-md md:flex-row md:items-center md:justify-between mx-auto p-2 relative lg:rounded-2xl  flex-auto overflow-hidden  duration-500 ease-in-out transform    focus:outline-none focus:ring-2 hover:text-blue-300  ring-1 ring-gray-900/5"
    const PopoverPanel__Container = "w-96 text-sm leading-6 shadow-lg rounded-xl text-onyx-300 dark:text-onyx-800 bg-onyx-900 dark:bg-onyx-200 backdrop-blur-xl backdrop-filter border border-onyx-800 dark:border-onyx-300"
    const PopoverItem__Wrapper = "p-2"
    const PopoverItem__Link = "shadow-massive group relative flex gap-x-6 rounded-lg p-4 hover:shadow-none text-onyx-300 dark:text-onyx-800 duration-500 ease-in-out transform"
    const PopoverItem__IconWrapper = "mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gradient-to-tr from-onyx-50 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive group-hover:shadow-none duration-500 ease-in-out transform"
    const PopoverItem__Icon = "h-6 w-6 text-onyx-600 group-hover:text-indigo-600" 

    return (
      <Popover className={HeaderNav__container}>
        <Popover.Button className={Popover__Button}>
          <Bars4Icon className="size-6" aria-hidden="true" />
        </Popover.Button>
  
        <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
          <Popover.Panel className={Popover__Panel}>
            <div className={PopoverPanel__Container}>
              <div className={PopoverItem__Wrapper}>
                {solutions.map((item) => (
                  <div key={item.name} className={PopoverItem__Link}>
                    <div className={PopoverItem__IconWrapper}>
                      <item.icon className={PopoverItem__Icon} aria-hidden="true" />
                    </div>
                    <div>
                      <a href={item.href} className="text-white dark:text-onyx-800">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-onyx-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-onyx-800/20 gap-2 p-2">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 rounded-xl text-white bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300 hover:to-indigo-400"
                  >
                    <item.icon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    )
  }
