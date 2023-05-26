import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { green, orange, red } from '@mui/material/colors'
import { IconButton, ListItemButton } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';

const data = [
    {
        id: "001",
        type: "single",
        text: "Find the most important",
        weight: 1
    },
    {
        id: "002",
        type: "invertible",
        text: "Which are true",
        weight: 3
    },
    {
        id: "003",
        type: "Fill",
        text: "Fill the text",
        weight: 2
    }
]

const weightColorMap = [undefined, green[300], orange[300], red[300]];

function buildListItem(question) {
    return (
        <ListItem
            key={question.id}
            dense={true}
            secondaryAction={
                <IconButton edge="end" onClick={e => console.log(`Click id: ${question.id}`)}>
                    <EditNoteIcon />
                </IconButton>
            }
            disablePadding
            disableGutters
        >
            <ListItemButton onClick={e => console.log(`Selected id: ${question.id}`)}>
                <ListItemAvatar>
                    <Avatar key={`${question.id}_avatar`} sx={{bgcolor: weightColorMap[question.weight]}}>
                        {question.type[0].toUpperCase()}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={question.id}
                    secondary={question.text}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function FileList() {
    return (
        <Box>
            <List>
                {data.map((q) => buildListItem(q))}
            </List>
        </Box>
    );
}