import {Box, Breadcrumbs, Button, Typography, Modal, useTheme} from "@mui/material";
import Header from "../../components/Header";
import {tokens} from "../../theme";
import {Link, useParams} from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, {useEffect, useState} from "react";
import {green} from "@mui/material/colors";
import BuildIcon from '@mui/icons-material/Build';
import AutofixModal from "./autofix-modal";

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

type Issue = {
    ID: string;
    summary: string;
    description: string;
    category: string;
    filename: string;
    rule: string;
    severity: string;
    code: string;
}

const TeamDetails = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { id } = useParams<IssueParams>();

    const [data, setData] = useState<Issue | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // State to control modal visibility
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };


    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            setIsLoading(true); // Start loading
            setError(null); // Reset errors

            try {
                const response = await fetch('http://127.0.0.1:3000/api/issues/' +id +'?accountIdentifier=demo&orgIdentifier=default&projectIdentifier=test');
                if (!response.ok) {
                    throw new Error('Something went wrong');  // Check if response is ok
                }
                const json = await response.json();
                console.log(json)
                setData(json); // Set data
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setIsLoading(false); // End loading
            }



        };

        fetchData();
    }, []); // Empty dependency array means this effect will only run once after the initial render

    return (
        <Box m="20px">
            {data === undefined && <p>Loading...</p>}
            {data && (
            <Box>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={"/issues"}>Issues</Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                </Box>
                <Box>
                    <Header title={data.summary} subtitle={"Severity: " + data.severity}/>
                </Box>
                <Box>
                    <Typography variant="h3">{data.description}</Typography>
                </Box>
                <Box>
                    <SyntaxHighlighter language="go" style={dark}>
                        {data.code}
                    </SyntaxHighlighter>
                </Box>
            </Box>)}
            {data && (
                <Box>
                <Button
                    onClick={handleOpenModal}
                    variant="contained"
                    style={{ backgroundColor: green[500], color: '#fff' }}
                    startIcon={<BuildIcon />}>
                    AutoFix
                </Button>
                <AutofixModal code={data?.code} issue={data?.summary} handleClose={handleCloseModal} openModal={open}></AutofixModal>
            </Box>)}



        </Box>
    );
}

export default TeamDetails;