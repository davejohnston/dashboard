import { Typography, Box, useTheme } from '@mui/material'
import {tokens} from '../theme'

type HeaderProps = {
    title: string;
    subtitle: string;
}
const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box>
        <Typography variant={"h2"} color={colors.grey[100]} fontWeight={"bold"} sx={{mb : "5px"}}>{title}</Typography>
        <Typography variant={"h5"} color={colors.grey[400]}>{subtitle}</Typography>
    </Box>
}

export default Header