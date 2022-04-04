import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
export default function Home() {
    return (
        <div className="flex mx-auto max-w-7xl ">
            <Feed />
            <Sidebar />
        </div>
    )
}
