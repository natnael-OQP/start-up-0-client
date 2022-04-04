import RecommendedTopics from './RecommendedTopics'
import Search from './Search'

const Sidebar = () => {
    return (
        <div className="flex-[.3]  min-h-screen border-l-[1px] px-6 py-10 ">
            <Search />
            <RecommendedTopics />
        </div>
    )
}

export default Sidebar
