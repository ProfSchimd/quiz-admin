import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { green, orange, red } from '@mui/material/colors'

function getColor(weight) {
    if (weight > 7) {
        return red[300];
    }
    if (weight > 3) {
        return orange[300];
    }
    return green[300];
}

export default function WeightSlider() {
    const [weight, setWeight] = useState(5);
    const onChange = (event) => {
        setWeight(event.target.value);
    }
    return (
        <Stack direction="row" sx={{mb: 2}}>
            <Typography gutterBottom>Weight</Typography>
            <Slider
            sx={{width: 200, mx: 2, color: getColor(weight)}}
                value={weight}
                steps={1}
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={onChange}
            />
            <Chip label={weight} sx={{bgcolor: getColor(weight)}}/>
        </Stack>
    );
}