import SearchBar from "./SearchBar";
import PageTitle from "./PageTitle";
import AccountMenu from "./AccountMenu";


export default function Navbar() {

    return (
        <nav className="bg-background-light border-b border-gray-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <PageTitle />
                <SearchBar />
                <AccountMenu />
            </div>
        </nav>
    )
}