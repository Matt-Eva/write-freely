import Display from "./Display";
import SearchNav from "./SearchNav"
import SideBar from "./SideBar";
import {useState, useEffect} from 'react';

function Home({creations, user, setViewItem, setUser, setUserDelete}){

    return(
        <>
            
            <SearchNav/>
            <SideBar user={user}/>
            <Display creations={creations} user={user} setViewItem={setViewItem}/>
        </>
    )
}

export default Home;