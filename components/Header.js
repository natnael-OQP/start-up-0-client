import Image from 'next/image'
import { BellIcon, BookmarkIcon } from '@heroicons/react/Outline'
import AppButton from './Button'

const Header = () => {
    const user = false
    return (
        <div className="flex items-center justify-between w-full h-12 px-10 shadow-sm">
            <div className="relative w-40 h-8 cursor-pointer">
                <Image
                    src="/logo.webp"
                    objectFit="cover"
                    layout="fill"
                    alt="logo"
                />
            </div>
            <div className="fx">
                {user ? (
                    <>
                        <div className="mr-5 fx">
                            <BellIcon className="w-6 h-6 text-gray-400" />
                            <BookmarkIcon className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="relative w-10 h-10 overflow-hidden rounded-full cursor-pointer">
                            <Image
                                src="/profile.jpeg"
                                objectFit="cover"
                                layout="fill"
                                alt="logo"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <AppButton title="Login" />
                        <AppButton title="register" />
                    </>
                )}
            </div>
        </div>
    )
}

export default Header
