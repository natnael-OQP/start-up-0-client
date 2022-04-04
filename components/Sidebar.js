import Profiles from './Profiles'
import RecentlySaved from './RecentlySaved'
import RecommendedTopics from './RecommendedTopics'
import Search from './Search'

const Sidebar = () => {
    return (
        <div className="flex-[.27]  min-h-screen border-l-[1px] px-6 py-14 sticky top-0 ">
            <Search />
            <RecommendedTopics />
            <Profiles />
            <RecentlySaved />
        </div>
    )
}

export default Sidebar
