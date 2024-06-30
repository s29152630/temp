import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import connectDB from '@/lib/mongo/mongoos';
import MSpace, { ISpace } from '@/lib/model/mongo/MSpace';

const drawerWidth = 240;

export default async function SpaceNav() {

    await connectDB();

    const spaces: ISpace[] = await MSpace.find();

    return (
        <>
            <Drawer
                variant="permanent"
                anchor="right"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {spaces.map(e => (
                            <Link key={e.space_uuid} href={`/space/${e.space_uuid}`}>
                                <ListItem key={e.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={e.space_name} />
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