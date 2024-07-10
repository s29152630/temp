import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const drawerWidth = 240;

export default function SideBar() {

    const navs = [{
        "id": 1,
        "name": "Home",
        "href": "/",
    }, {
        "id": 2,
        "name": "Space Item",
        "href": "/spaceItem",
    },
    {
        "id": 3,
        "name": "Space",
        "href": "/space",
    },
    {
        "id": 4,
        "name": "Help",
        "href": "/help",
    }];

    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {navs.map(e => (
                            <Link key={e.id} href={e.href}>
                                <ListItem key={e.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={e.name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}