import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import WeightSlider from './WeightSlider';
import Tags from './Tags';
import TypeSelector from './TypeSelector';

export default function Details() {
    const [qid, setQid] = useState("001");
    const [tags, setTags] = useState(['A', 'B', 'C']);
    const [type, setType] = useState("single");
    const handleChangeId = (event) => {
        setQid(event.target.value);
    }
    const handleChange = (event) => {
        setType(event.target.value);
    }
    const handleDeleteTag = (tag) => {
        setTags(tags.filter(v => v !== tag));
    }
    const handleAddTag = (tag) => {
        if (tags.indexOf(tag) < 0) {
            setTags([...tags, tag]);
        }
    }

    return (
        <Stack>
            <Stack spacing={2} direction="row" sx={{mb: 2}}>
                <TextField size="small" label="ID" value={qid} onChange={handleChangeId}/>
                <TypeSelector type={type} onChange={handleChange}/>
            </Stack>    
            <WeightSlider />
            <Tags tags={tags} onDeleteTag={handleDeleteTag} onAddTag={handleAddTag}/>
        </Stack>
    );
}