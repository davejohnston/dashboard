import {Box} from "@mui/material";
import Header from "../../components/Header";
import React from "react";

const Dashboard = () => {
    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title={"DASHBOARD"} subtitle={"Welcome to the Dashboard"}/>
            </Box>
        </Box>
    );
}

export default Dashboard;