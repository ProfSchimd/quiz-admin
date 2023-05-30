import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';
import SwitchWrapper from './SwitchWrapper';

export default function Admin(props) {
    const drawerWidth = props.drawerWidth ? props.drawerWidth : 300;
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    {props.menuItems.map((t) => (
                    <Typography
                        key={t.name}
                        component="a"
                        href={t.url}
                        sx={{
                            px: 1,
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>{t.name}
                    </Typography>
                    ))}
                    <SwitchWrapper setDark={props.setDark} />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                component="div"
                sx={{
                    width: {drawerWidth},
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                      },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Box sx={{ p: 2 }}>
                    {props.side}
                </Box>
            </Drawer>
            </Box>
            <Box component="main"
                sx={{
                    p: 2,
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}>
                <Toolbar />
                {props.main}
            </Box>
        </Box>
    );
}