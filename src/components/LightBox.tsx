import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Button from "./Button";
import {ArrowLeft, ArrowRight, Close} from "./Icons";

interface ImageInterface {
    img: any,
    title: string
}

interface LightBoxProps {
    images: ImageInterface[],
    showMiniuature?: boolean
}

export default function LightBox({images, showMiniuature = false}: LightBoxProps) {
    let [isOpen, setIsOpen] = useState(false);
    let [currentImage, setCurrentImage] = useState({img: images[0].img, title: images[0].img, index: 0})

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    function handleOpenModal({img, title}: ImageInterface, index: number) {
        setIsOpen(true);
        setCurrentImage({img: img, title: title, index: index})
    }

    const handlePreviousPage = () => {
        let currentIndexItem = currentImage.index - 1;
        const item = images.find((image, index: number) => index === currentIndexItem);
        if (item) {
            setCurrentImage({img: item.img, title: item.title, index: currentIndexItem})
        }
    }
    const handleNextPage = () => {
        let currentIndexItem = currentImage.index + 1;
        const item = images.find((image, index: number) => index === currentIndexItem);
        if (item) {
            setCurrentImage({img: item.img, title: item.title, index: currentIndexItem})
        }
    }

    const KeyboardDown = (e: React.KeyboardEvent) => {
        if (e.code === 'KeyN') {
            handleNextPage();
        } else if (e.code === "KeyP") {
            handlePreviousPage();
        }
    }

    return (
        <>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}>
                {
                    images.map((image, key) => {
                        return (
                            <div className={"hover:cursor-pointer"} onClick={() => handleOpenModal(image, key)}
                                 key={key}>
                                <img className={"lg:h-full object-cover"} src={image.img} alt={image.title}/>
                            </div>);
                    })
                }
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-60"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto" onKeyDown={KeyboardDown}>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div>
                                    <div className={"flex justify-end"}>
                                        <button
                                            className={"text-white bg-red-500 border-red-500 p-2 rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center"}
                                            onClick={handleCloseModal}>
                                            <Close/>
                                        </button>
                                    </div>
                                    <div className={"flex"}>
                                        <div className={"w-1/12 my-auto flex justify-center items-center"}>
                                            <Button isVisible={currentImage.index > 0} onClick={handlePreviousPage}>
                                                <ArrowLeft/>
                                            </Button>
                                        </div>
                                        <div className="w-10/12 mx-auto">
                                            <img className={"w-full object-cover"} src={currentImage.img}
                                                 alt={currentImage.title}/>
                                        </div>
                                        <div className={"w-1/12 my-auto flex justify-center items-center"}>
                                            <Button isVisible={currentImage.index < images.length - 1}
                                                    onClick={handleNextPage}>
                                                <ArrowRight/>
                                            </Button>
                                        </div>
                                    </div>
                                    {
                                        showMiniuature && (
                                            <div className={"w-10/12 mx-auto"}>
                                                <div className={"flex flex-wrap justify-center items-center gap-2 mt-2"}>
                                                    {
                                                        images.map((image, key) => {
                                                            return (
                                                                <div key={key} onClick={() => {
                                                                    setCurrentImage({...image, index: key})
                                                                }}
                                                                     className={`${currentImage.index === key ? "border-white sm:border-4 border-2" : ""} rounded hover:cursor-pointer`}>
                                                                    <img src={image.img}
                                                                         className={"w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"}
                                                                         alt={image.title}/>
                                                                </div>);
                                                        })
                                                    }
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
