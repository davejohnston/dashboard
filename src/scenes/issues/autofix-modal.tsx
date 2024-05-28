import {Box, Button, Modal, Typography} from "@mui/material";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import React, {useEffect, useState} from "react";
import {blue} from "@mui/material/colors";
import SourceIcon from "@mui/icons-material/Source";
import TaskIcon from "@mui/icons-material/Task";
import CanaryCoder from "../../images/canary-coder.webp"

interface AutofixProps {
    handleClose: () => void;
    openModal: boolean;
    language?: string | string[]; // Define the type for the language prop
    code: string;
    issue: string;
}

interface Refactor {
    code: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AutofixModal: React.FC<AutofixProps> = ({ language, code, issue, handleClose, openModal }) => {
    const [closeButtonClicked, setCloseButtonClicked] = useState(false);

    const handleCloseModal = () => {
        if (!closeButtonClicked) {
            handleClose();
        }
    };

    const handleButtonClick = () => {
        setCloseButtonClicked(true);
        handleClose();
    };

    const [refactoredCode, setData] = useState<Refactor | null>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (openModal) {
            console.log("Modal is now open!");
            // Perform actions when the modal is opened
            const fetchData = async () => {

                setIsLoading(true); // Start loading
                setError(null); // Reset errors

                const requestBody = {
                    code: code,
                    issue: issue
                };

                try {
                    const response = await fetch('http://127.0.0.1:3000/api/refactors?accountIdentifier=demo&orgIdentifier=default&projectIdentifier=test', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                    });
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
        } else {
            console.log("Modal is now closed!");
            // Perform cleanup or other actions when the modal is closed
        }
    }, [openModal, code, issue]);
    
    return(
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="original-code" variant="h3">
                    Original Code
                </Typography>
                <SyntaxHighlighter language={"go" || undefined}>
                    {code}
                </SyntaxHighlighter>
                <Typography id="refactored-code" variant="h3">
                    Refactored Code
                </Typography>
                {isLoading ? (
                    <Box sx={{
                        position: 'absolute', // Make the loading box overlay
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40%', // Takes 40% of the window width
                        textAlign: 'center',
                        bgcolor: 'background.paper', // Ensures background is solid
                        p: 4,
                        zIndex: 1301 // Higher than the Modal's overlay
                    }}>
                        <img src={CanaryCoder} alt="Loading..." style={{ width: '100%' }}/>
                        <Typography variant={"h1"}>Please wait while we refactor your code....</Typography>
                    </Box>
                ) : error ? (
                    <Typography color="error">{error}</Typography>
                ) : (
                    <SyntaxHighlighter language="go">
                        {refactoredCode?.code ?? "No code available"}
                    </SyntaxHighlighter>
                )}
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <Box>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: blue[500],
                                color: '#fff',
                                '& .MuiButton-startIcon': {
                                    marginRight: '8px',
                                },
                            }}
                            startIcon={<SourceIcon />}
                        >
                            Open PR
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: blue[500],
                                color: '#fff',
                                '& .MuiButton-startIcon': {
                                    marginRight: '8px',
                                },
                            }}
                            startIcon={<TaskIcon />}
                        >
                            Create JIRA
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                    <Button onClick={handleButtonClick} variant="contained" sx={{ backgroundColor: 'red', color: '#fff' }}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>);
}

export default AutofixModal;