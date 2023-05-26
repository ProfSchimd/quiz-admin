import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function Tags({tags, onDeleteTag, onAddTag}) {
    const [tag, setTag] = useState("");
    const onTagChange = (event) => {
        setTag(event.target.value);
    }
    const onNewTag = () => {
        onAddTag(tag);
    }
    return(
        <Stack direction="row">
            {tags.map( (tag) => {
                return <Chip sx={{mr:1}} key={`tag_${tag}`} label={`#${tag}`} onDelete={e => onDeleteTag(tag)} />
            })}
            <TextField label="New" size="small" value={tag} onChange={onTagChange}/>
            <IconButton onClick={onNewTag} >
                <AddIcon />
            </IconButton>
        </Stack>
    );
}