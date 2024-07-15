"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogInOut from './LogInOut';

export default function TopBar() {

    return (
        <>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        FU MEOW
                    </Typography>
                    <LogInOut></LogInOut>
                </Toolbar>
            </AppBar>
        </>
    );

}