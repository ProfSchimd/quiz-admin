import * as React from 'react';
import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwitchWrapper from './SwitchWrapper';

export default function Admin(props) {
    const drawerWidth = props.drawerWidth ? props.drawerWidth : 300;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (<div><Toolbar />
        <Box sx={{ p: 2 }}>
            {props.side}
        </Box>
    </div>);
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
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
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        width: { drawerWidth },
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
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