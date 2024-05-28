import {ThemeProvider} from "@emotion/react";

import {ColorModeContext, themeSettings} from "./theme";
import {AppBar, CssBaseline, PaletteMode} from "@mui/material";
import React from "react";
import {createTheme} from "@mui/material/styles";

import {Route, Routes} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Issues from "./scenes/issues";
import IssuesBySummary from "./scenes/issuesBySummary";
import TeamDetails from "./scenes/issues/details";



function App() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
           <Sidebar/>
                <main className="content">
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/issues" element={<Issues />} />
                        <Route path="/issues/:id" element={<TeamDetails />} />
                        <Route path="/issuesBySummary" element={<IssuesBySummary />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
