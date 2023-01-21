import {Transition} from "@headlessui/react";
import React, {Fragment} from "react";

interface ButtonProps {
    onClick: any,
    isVisible: boolean,
    children: React.ReactNode
}

export default function Button({onClick, isVisible, children}: ButtonProps) {
    return (<Transition
        as={Fragment}
        show={isVisible}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
    >
        <button onClick={onClick}
                className={"bg-white p-2 rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center"}>
            {children}
        </button>
    </Transition>);
}
