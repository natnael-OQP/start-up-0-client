import Image from 'next/image'

const Profile = ({ profilePic, name, bio }) => {
    const truncate = (str) => {
        return str?.substr(0, 56) + '...'
    }

    return (
        <div className="flex items-center w-full my-3 space-x-2 cursor-pointer">
            <div className="relative overflow-hidden rounded-full w-14 h-14 shrink-0">
                <Image
                    src={profilePic}
                    layout="fill"
                    objectFit="cover"
                    alt={name + ' profile pic'}
                />
            </div>
            <div className="">
                <h3 className="text-base font-semibold capitalize font-lato ">
                    {name}
                </h3>
                <h4 className="text-sm font-normal text-gray-500 font-lato">
                    {truncate(bio)}
                </h4>
            </div>
            <button className="h-8 px-3 ml-4 text-sm font-semibold transition duration-200 border border-gray-500 rounded-full outline-none font-lato hover:shadow-md transform-gpu ">
                Follow
            </button>
        </div>
    )
}

export default Profile
