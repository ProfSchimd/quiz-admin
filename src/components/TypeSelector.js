import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function TypeSelector({type, onChange}) {
    return(
        <FormControl>
            <InputLabel id="select-label">Type</InputLabel>
            <Select
                labelId="select-label"
                size="small"
                value={type}
                label="Type"
                onChange={onChange}
            >
                <MenuItem value={"single"}>Single</MenuItem>
                <MenuItem value={"multiple"}>Multiple</MenuItem>
                <MenuItem value={"invertible"}>Invertible</MenuItem>
                <MenuItem value={"fill"}>Fill</MenuItem>
            </Select>
        </FormControl>
    );
}