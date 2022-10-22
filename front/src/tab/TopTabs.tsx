import { AppBar, Tabs, Tab } from "@material-ui/core";
import React from "react";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import RouteLink from "../route/RouteLink";
import TabPanel from "./TabPanel";

export default function TopTabs() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTabView(newValue);
    }
    function setTabView(viewIndex) {
        switch(viewIndex) {
            case 0 : navigate('/join')
                break;
            case 1:  navigate('/login')
                break;
            case 2:  navigate('/board')
                break;
        }
    }
    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <Tab label="회원가입"/>
                    <Tab label="로그인" />
                    <Tab label="게시판" />
                </Tabs>
            </AppBar>
        </div>
    )
}