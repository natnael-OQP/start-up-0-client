import Image from 'next/image'

const SavedPost = ({ name, profilePic, title, createdAt }) => {
    return (
        <div className="flex-col mt-4 cursor-pointer">
            <div className="fx">
                <div className="relative w-6 h-6 overflow-hidden rounded-full shrink-0">
                    <Image
                        src={profilePic}
                        layout="fill"
                        objectFit="cover"
                        alt={name + ' profile pic'}
                    />
                </div>
                <h3 className="text-sm font-medium capitalize font-lato ">
                    {name}
                </h3>
            </div>
            <h3 className="py-1 text-base font-bold ">{title}</h3>
            <h3 className="text-sm font-medium text-gray-400 font-lato ">
                {createdAt}
            </h3>
        </div>
    )
}

export default SavedPost
