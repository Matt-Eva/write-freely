import Display from "./Display";
import SearchNav from "./SearchNav"
import SideBar from "./SideBar";
import {useState, useEffect} from 'react';

function Home({creations, user, setViewItem, setUser, setUserDelete, path}){
    const [filterSearch, setFilterSearch] = useState("")

    let displayCreations;
    if(filterSearch === ""){
        displayCreations = creations
    } else{
        displayCreations = filterSearch
    }

    return(
        <>
            
            <SearchNav path={path} setFilterSearch={setFilterSearch}/>
            <SideBar user={user}/>
            <Display creations={displayCreations} user={user} setViewItem={setViewItem}/>
        </>
    )
}

export default Home;