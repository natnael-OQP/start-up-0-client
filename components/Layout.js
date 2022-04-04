import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div className="mx-auto max-w-[1350px] ">
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout
