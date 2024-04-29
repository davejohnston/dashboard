import {Box, Breadcrumbs, Button, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {AdminPanelSettingsOutlined, Code} from "@mui/icons-material";
import {LockOpenOutlined} from "@mui/icons-material";
import {SecurityOutlined} from "@mui/icons-material";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {Link, useParams} from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const mockData = [
    {
        "ID": "164ae5ce-1d0a-4deb-b757-55f643ae3caf",
        "category": "nestif",
        "code": "Line 261: \tif fc.State == FeatureStateOff {\nLine 262: \t\treturn fc.OffVariation\nLine 263: \t}\nLine 264: \nLine 265: \tif target != nil && len(fc.VariationToTargetMap) > 0 {\nLine 266: \t\tfor _, variationMap := range fc.VariationToTargetMap {\nLine 267: \t\t\tif variationMap.Targets != nil {\nLine 268: \t\t\t\tfor _, t := range variationMap.Targets {\nLine 269: \t\t\t\t\tif target.Identifier == t {\n",
        "column": 2,
        "description": "`if target != nil && len(fc.VariationToTargetMap) > 0` has complex nested blocks (complexity: 10)",
        "filename": "evaluation/feature.go",
        "line": 265,
        "linter": "nestif",
        "offset": 7592,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "`if target != nil && len(fc.VariationToTargetMap) > 0` has complex nested blocks (complexity: 10)"
    }
]

type IssueParams = {
    id: string
}

const TeamDetails = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { id } = useParams<IssueParams>();


    return (
        <Box m="20px">
            <Box>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to={"/issues"}>Issues</Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
                </Box>
            <Box>
                <Header title={mockData[0].summary!} subtitle={""}/>
            </Box>
            <Box>
                <SyntaxHighlighter language="go" style={dark}>
                    {mockData[0].code}
                </SyntaxHighlighter>
            </Box>

        </Box>
    );
}

export default TeamDetails;