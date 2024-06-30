import SideBar from "@/component/layout/SideBar";
import TopBar from "@/component/layout/TopBar";
import CreateFolderDialog from "@/component/space/CreateFolderDialog";
import SpaceNav from "@/component/space/SpaceNav";
import { Box, Toolbar } from "@mui/material";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Box sx={{ display: 'flex' }}>
          <SpaceNav></SpaceNav>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
        </>
    );
}
