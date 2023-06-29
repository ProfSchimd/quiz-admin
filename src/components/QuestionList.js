import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'


import { green, orange, red } from '@mui/material/colors'

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
    },
    { "id": "001", "type": "single", "text": "In Python come si accede ai parametri della linea di comando?", "options": ["Variabile globale <code>argv</code>", "Dal modulo <code>main</code> con <code>main.argv</code>", "Con un parametro del <code>main</code>", "Dal modulo <code>sys</code> con <code>sys.argv</code>"], "correct": [0, 0, 0, 1], "weight": 2 }, { "id": "002", "type": "single", "text": "Quale è la prima istruzione eseguita da un programma Python?", "options": ["La prima istruzione della prima funzione definita nel file <code>.py</code> invocato", "La prima istruzione della funzione main presente nel file <code>.py</code> invocato.", "La prima istruzione presente nel file <code>.py</code> invocato con il comando <code>python</code>", "La prima istruzione del metodo <code>main</code> della classe presente nel file <code>.py</code> invocato"], "correct": [0, 0, 1, 0], "review": ["No", "No", "Si", "No"], "weight": 1 }, { "id": "003", "type": "single", "text": "Quale è la lista degli argomenti per il comando <code>python programma.py Via Roma 33</code>?", "options": ["<code>['programma.py', 'Via', 'Roma', '33']</code>", "<code>[Via', 'Roma', '33']</code>", "<code>['programma.py', 'Via Roma', '33']</code>", "<code>['programma.py', 'Via Roma 33']</code>"], "correct": [1, 0, 0, 0], "weight": 2 },
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
                    <Avatar key={`${question.id}_avatar`} sx={{ height: "24px", width: "24px", bgcolor: weightColorMap[question.weight] }}>
                        {question.type[0].toUpperCase()}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={question.text}
                    primaryTypographyProps={{
                        noWrap: true
                    }}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function QuestionList() {
    return (
        <Box>
            <List>
                {data.map((q) => buildListItem(q))}
            </List>
        </Box>
    );
}