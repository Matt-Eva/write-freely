import Display from "./Display";
import TopHead from "./TopHead";
import SearchNav from "./SearchNav"
import SideBar from "./SideBar";
import {useState, useEffect} from 'react';

function Home({creations, user, setViewItem, setUser, setUserDelete}){

    return(
        <>
            <TopHead user={user} setUser={setUser} setUserDelete={setUserDelete}/>
            <SearchNav/>
            <SideBar user={user}/>
            <Display creations={creations} setViewItem={setViewItem}/>
        </>
    )
}

export default Home;