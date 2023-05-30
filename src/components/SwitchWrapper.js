import { Box, Switch } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function SwitchWrapper(props) {
    return (
        <Box sx={{mx: 2, display: "flex", alignItems: "center"}}>
            <LightModeIcon />
            <Switch onChange={(e) => props.setDark(e.target.checked)} />
            <DarkModeIcon />
        </Box>
    );
}