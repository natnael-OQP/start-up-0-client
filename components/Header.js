import Image from 'next/image'

const Header = () => {
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
            <div className="">
                <div className="relative w-10 h-10 overflow-hidden rounded-full cursor-pointer">
                    <Image
                        src="/profile.jpeg"
                        objectFit="cover"
                        layout="fill"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
