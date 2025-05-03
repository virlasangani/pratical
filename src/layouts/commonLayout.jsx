import { Outlet } from "react-router-dom";
import SidebarHeader from "../components/Header";
import TopBarNotification from "../components/topBarNotification";
import BreadCrumb from "../components/Breadcrumb";

export default function CommonLayout(){
    return(
        <>
            <TopBarNotification/>
            <SidebarHeader/>
            <BreadCrumb/>
            <Outlet/>
        </>
    )
}