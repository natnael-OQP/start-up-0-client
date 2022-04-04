import { SearchIcon } from '@heroicons/react/Outline'

const Search = () => {
    return (
        <div className="flex items-center w-full h-10 p-2 mb-10 border border-gray-300 rounded-full ">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <input
                className="flex-1 ml-3 text-base outline-none font-medium- font-lato "
                placeholder="Search"
            />
        </div>
    )
}

export default Search
