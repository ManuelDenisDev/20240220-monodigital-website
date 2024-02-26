import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/20/solid";
import navBarMv from "@config/navbarMv.json";

import { callsToActions } from "@config/navbar-callsToActions.json";

const Popover__Button = "focus:none flex items-center text-xs text-white dark:text-onyx-50 hover:text-indigo-300 dark:hover:text-indigo-600 transition-all duration-300";
const Popover__Panel = "absolute z-10 mt-5 flex w-screen max-w-sm px-8 -left-[180px] mvS:-left-[260px] mvM:-left-[320px] mvL:px-4 mvL:-left-[340px]"
const PopoverPanel__Wrapper = "shadow-massive max-w-md flex-auto overflow-hidden lg:rounded-2xl rounded-xl text-xs  backdrop-blur-xl backdrop-filter bg-onyx-900/95 dark:bg-onyx-200/95"
const PoponerPanel__Container = "p-0"
const PopoverLink__Wrapper = "shadow-none group relative flex items-center gap-x-6 px-8 py-4 hover:shadow-none text-onyx-300 dark:text-onyx-800  bg-onyx-800/10 hover:bg-onyx-800/90 dark:bg-onyx-300/10 dark:hover:bg-onyx-300/50 hover:text-indigo-300 duration-500 ease-in-out transform"
const PopoverLink__IconWrapper = "shadow-massive group-hover:shadow-none flex size-11 flex-none items-center justify-center rounded-lg bg-gradient-to-tr from-onyx-50 to-onyx-700 dark:from-onyx-300 dark:to-onyx-200 border border-onyx-800 dark:border-onyx-300 duration-500 ease-in-out transform transition-all"
const PopoverLink__Emoji = "text-xl flex items-center justify-center"
const PopoverItem__TextWrapper = "flex flex-col gap-y-2"
const PopoverItem__TextTitle = "text-white dark:text-onyx-50 hover:text-indigo-300 dark:hover:text-indigo-600 transition-all duration-300"
const PopoverItem__TextDescription = "hidden text-onyx-300 dark:text-onyx-500"
const Popover__CallsToActions = "grid grid-cols-2 divide-x divide-onyx-700 dark:divide-onyx-200 duration-500 ease-in-out transform text-onyx-50 hover:shadow-none"
const PopoverCalls__Link = "flex items-center justify-center gap-x-2.5 p-3 bg-gradient-to-tr  from-indigo-500 via-indigo-400 to-indigo-300 hover:from-indigo-600 hover:via-indigo-500 hover:to-indigo-400"
const PopoverCalls__Emoji = "h-5 w-5 flex-none text-gray-400"

  export default function HeaderNavItem() {    
    
    const navBarMvItems: any[] = navBarMv.menuNavBarMv;

    return (
      <Popover className="relative">
        {({ open }) => (
        <>
          <Popover.Button className={Popover__Button}>
            <Bars4Icon className={`size-5 ${open ? 'hidden' : 'transform'}`} aria-hidden="true" />
            <XMarkIcon className={`size-5 ${open ? 'transform' : 'hidden'}`} aria-hidden="true" />
          </Popover.Button>
  
          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className={Popover__Panel}>
              <div className={PopoverPanel__Wrapper}>
                <div className={PoponerPanel__Container}>
                  {navBarMvItems.map((item) => (
                    <a key={item.title}
                      href={item.href}
                      className={PopoverLink__Wrapper}  
                    >
                      <div className={PopoverLink__IconWrapper}>
                        <span className={PopoverLink__Emoji} aria-hidden="true">{item.emoji}</span>
                      </div>
                      <div className={PopoverItem__TextWrapper}>
                        <span className={PopoverItem__TextTitle}>{item.title}</span>
                        <span className={PopoverItem__TextDescription}>{item.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className={Popover__CallsToActions}>
                  {callsToActions.map((item) => (
                    <a key={item.title} href={item.href} className={PopoverCalls__Link}>
                      <span className={PopoverCalls__Emoji} aria-hidden="true">{item.emoji}</span>
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
        )}
      </Popover>
    )
  }