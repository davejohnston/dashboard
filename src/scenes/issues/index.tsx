import {Box, Button, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {AdminPanelSettingsOutlined} from "@mui/icons-material";
import {LockOpenOutlined} from "@mui/icons-material";
import {SecurityOutlined} from "@mui/icons-material";
import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState, useEffect} from "react";
import TeamDetails from "./details";
import {Link} from "react-router-dom";

export const mockData = [
    {
        "ID": "3f47284e-1e51-48a7-8f4c-cb67a0b4c04e",
        "category": "inamedparam",
        "code": "Line 6: \nLine 7: // TargetBuilderInterface used for fluent builder methods\nLine 8: type TargetBuilderInterface interface {\nLine 9: \tIP(string) TargetBuilderInterface\nLine 10: \tCountry(string) TargetBuilderInterface\nLine 11: \tEmail(string) TargetBuilderInterface\nLine 12: \tFirstname(string) TargetBuilderInterface\nLine 13: \tLastname(string) TargetBuilderInterface\nLine 14: \tName(string) TargetBuilderInterface\n",
        "column": 10,
        "description": "interface method Country must have named param for type string",
        "filename": "dto/target_builder.go",
        "line": 10,
        "linter": "inamedparam",
        "offset": 221,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "interface method Country must have named param for type string"
    },
    {
        "ID": "922aae3f-4fc6-4dd1-8157-a529dbff4ecd",
        "category": "inamedparam",
        "code": "Line 7: // TargetBuilderInterface used for fluent builder methods\nLine 8: type TargetBuilderInterface interface {\nLine 9: \tIP(string) TargetBuilderInterface\nLine 10: \tCountry(string) TargetBuilderInterface\nLine 11: \tEmail(string) TargetBuilderInterface\nLine 12: \tFirstname(string) TargetBuilderInterface\nLine 13: \tLastname(string) TargetBuilderInterface\nLine 14: \tName(string) TargetBuilderInterface\nLine 15: \tAnonymous(bool) TargetBuilderInterface\n",
        "column": 8,
        "description": "interface method Email must have named param for type string",
        "filename": "dto/target_builder.go",
        "line": 11,
        "linter": "inamedparam",
        "offset": 259,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "interface method Email must have named param for type string"
    },
    {
        "ID": "7d84ffcb-aafb-4673-9cf5-8e4397fecd7e",
        "category": "inamedparam",
        "code": "Line 8: type TargetBuilderInterface interface {\nLine 9: \tIP(string) TargetBuilderInterface\nLine 10: \tCountry(string) TargetBuilderInterface\nLine 11: \tEmail(string) TargetBuilderInterface\nLine 12: \tFirstname(string) TargetBuilderInterface\nLine 13: \tLastname(string) TargetBuilderInterface\nLine 14: \tName(string) TargetBuilderInterface\nLine 15: \tAnonymous(bool) TargetBuilderInterface\nLine 16: \tCustom(name string, value interface{}) TargetBuilderInterface\n",
        "column": 12,
        "description": "interface method Firstname must have named param for type string",
        "filename": "dto/target_builder.go",
        "line": 12,
        "linter": "inamedparam",
        "offset": 301,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "interface method Firstname must have named param for type string"
    },
    {
        "ID": "5280f372-f547-4b5b-babf-bb48566115ef",
        "category": "inamedparam",
        "code": "Line 9: \tIP(string) TargetBuilderInterface\nLine 10: \tCountry(string) TargetBuilderInterface\nLine 11: \tEmail(string) TargetBuilderInterface\nLine 12: \tFirstname(string) TargetBuilderInterface\nLine 13: \tLastname(string) TargetBuilderInterface\nLine 14: \tName(string) TargetBuilderInterface\nLine 15: \tAnonymous(bool) TargetBuilderInterface\nLine 16: \tCustom(name string, value interface{}) TargetBuilderInterface\nLine 17: \tBuild() evaluation.Target\n",
        "column": 11,
        "description": "interface method Lastname must have named param for type string",
        "filename": "dto/target_builder.go",
        "line": 13,
        "linter": "inamedparam",
        "offset": 342,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "interface method Lastname must have named param for type string"
    },
    {
        "ID": "f1e6b237-8a10-4877-aeb2-eda80f9284a8",
        "category": "inamedparam",
        "code": "Line 10: \tCountry(string) TargetBuilderInterface\nLine 11: \tEmail(string) TargetBuilderInterface\nLine 12: \tFirstname(string) TargetBuilderInterface\nLine 13: \tLastname(string) TargetBuilderInterface\nLine 14: \tName(string) TargetBuilderInterface\nLine 15: \tAnonymous(bool) TargetBuilderInterface\nLine 16: \tCustom(name string, value interface{}) TargetBuilderInterface\nLine 17: \tBuild() evaluation.Target\nLine 18: }\n",
        "column": 7,
        "description": "interface method Name must have named param for type string",
        "filename": "dto/target_builder.go",
        "line": 14,
        "linter": "inamedparam",
        "offset": 379,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "interface method Name must have named param for type string"
    },
    {
        "ID": "bc134410-9d2f-4d82-ab9d-607771ab83c4",
        "category": "inamedparam",
        "code": "Line 11: \tEmail(string) TargetBuilderInterface\nLine 12: \tFirstname(string) TargetBuilderInterface\nLine 13: \tLastname(string) TargetBuilderInterface\nLine 14: \tName(string) TargetBuilderInterface\nLine 15: \tAnonymous(bool) TargetBuilderInterface\nLine 16: \tCustom(name string, value interface{}) TargetBuilderInterface\nLine 17: \tBuild() evaluation.Target\nLine 18: }\nLine 19: \n",
        "column": 12,
        "description": "interface method Anonymous must have named param for type bool",
        "filename": "dto/target_builder.go",
        "line": 15,
        "linter": "inamedparam",
        "offset": 421,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "interface method Anonymous must have named param for type bool"
    },
    {
        "ID": "d2bf55a9-8f18-4ebc-a7a1-bc325fd22b4e",
        "category": "gosec",
        "code": "Line 26: \t\tlog.Printf(\"Failed to parse PEM files: `%s`\\n\", err)\nLine 27: \t}\nLine 28: \nLine 29: \t// Create a custom TLS configuration and use the CA pool.\nLine 30: \ttlsConfig := &tls.Config{\nLine 31: \t\tRootCAs: certPool,\nLine 32: \t}\nLine 33: \nLine 34: \ttransport := &http.Transport{\n",
        "column": 16,
        "description": "G402: TLS MinVersion too low.",
        "filename": "examples/tls/example.go",
        "line": 30,
        "linter": "gosec",
        "offset": 0,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "G402: TLS MinVersion too low."
    },
    {
        "ID": "4d077989-b9fb-4675-83c7-583207fb3851",
        "category": "revive",
        "code": "Line 13: \t\"github.com/harness/ff-golang-server-sdk/evaluation\"\nLine 14: )\nLine 15: \nLine 16: var (\nLine 17: \tflagName string = getEnvOrDefault(\"FF_FLAG_NAME\", \"harnessappdemodarkmode\")\nLine 18: \tsdkKey   string = getEnvOrDefault(\"FF_API_KEY\", \"change me\")\nLine 19: )\nLine 20: \nLine 21: func main() {\n",
        "column": 11,
        "description": "var-declaration: should omit type string from declaration of var flagName; it will be inferred from the right-hand side",
        "filename": "examples/tls/example.go",
        "line": 17,
        "linter": "revive",
        "offset": 224,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "var-declaration: should omit type string from declaration of var flagName; it will be inferred from the right-hand side"
    },
    {
        "ID": "783c57f4-eb29-4d93-94c2-b6ba1cb59811",
        "category": "revive",
        "code": "Line 14: )\nLine 15: \nLine 16: var (\nLine 17: \tflagName string = getEnvOrDefault(\"FF_FLAG_NAME\", \"harnessappdemodarkmode\")\nLine 18: \tsdkKey   string = getEnvOrDefault(\"FF_API_KEY\", \"change me\")\nLine 19: )\nLine 20: \nLine 21: func main() {\nLine 22: \tlog.Println(\"Harness SDK TLS Example\")\n",
        "column": 11,
        "description": "var-declaration: should omit type string from declaration of var sdkKey; it will be inferred from the right-hand side",
        "filename": "examples/tls/example.go",
        "line": 18,
        "linter": "revive",
        "offset": 301,
        "repository_identifier": "ff-golang-server-sdk",
        "rule": "",
        "severity": "Major",
        "summary": "var-declaration: should omit type string from declaration of var sdkKey; it will be inferred from the right-hand side"
    }
]

type RowData = {
    ID: string;
    summary: string;
    category: string;
    filename: string;
    rule: string;
    severity: string;
}

function getRowId(row: RowData) {
    return row.ID;
}



const Issues = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [data, setData] = useState<RowData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            setIsLoading(true); // Start loading
            setError(null); // Reset errors

            try {
                const response = await fetch('http://127.0.0.1:3000/api/issues?accountIdentifier=demo&orgIdentifier=default&projectIdentifier=test');
                if (!response.ok) {
                    throw new Error('Something went wrong');  // Check if response is ok
                }
                const json = await response.json();
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

    const columns: GridColDef<RowData>[] = [
        {field: "ID", headerName: "ID"},
        {
            field: "summary",
            headerName: "Summary",
            flex: 1,
            renderCell: (params) => (
                <Link to={`/issues/${params.row.ID}`}>{params.value}</Link>
            ),
        },
        {field: "category", headerName: "Category"},
        {field: "filename", headerName: "Filename"},
        {field: "rule", headerName: "Rule"},
        {field: "severity", headerName: "Severity"},
    ];


    return (
        <Box m="20px">

                <Header title={"Team"} subtitle={"Welcome to the Team Page"}/>
            <Box
                m="40px 0 0 0"
                height="50vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    getRowId={getRowId}
                    checkboxSelection
                    rows={data}
                    columns={columns}
                    pageSizeOptions={[5, 10 ,25, 100]}
                    pagination={true}
                />
            </Box>
        </Box>
    );
}

export default Issues;