import { Box, IconButton, useTheme } from "@mui/material";
import React, {useContext} from "react";
import {ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {LightModeOutlined} from "@mui/icons-material";
import {DarkModeOutlined} from "@mui/icons-material";
import {NotificationsOutlined} from "@mui/icons-material";
import {SettingsOutlined} from "@mui/icons-material";
import {PersonOutlined} from "@mui/icons-material";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 3,
                    backgroundColor: colors.primary[400],
                }}
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined />
                    ) : (
                        <LightModeOutlined />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutlined />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;