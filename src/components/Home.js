import Display from "./Display";
import TopHead from "./TopHead";
import SearchNav from "./SearchNav"
import SideBar from "./SideBar";

function Home(){
    return(
        <>
            <TopHead />
            <SearchNav />
            <SideBar />
            <Display />
        </>
    )
}

export default Home;