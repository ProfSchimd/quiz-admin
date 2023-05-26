import { Switch } from "@mui/material";

export default function SwitchWrapper(props) {
    return (
        <Switch onChange={(e) => props.setDark(e.target.checked)} />
    );
}