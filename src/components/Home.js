import Display from "./Display";
import TopHead from "./TopHead";
import SearchNav from "./SearchNav"
import SideBar from "./SideBar";
import {useState, useEffect} from 'react';

function Home({creations, user}){
    

    return(
        <>
            <TopHead user={user}/>
            <SearchNav />
            <SideBar user={user}/>
            <Display creations={creations}/>
        </>
    )
}

export default Home;