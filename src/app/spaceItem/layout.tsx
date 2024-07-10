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
        <Box>
          <SpaceNav></SpaceNav>
          <Box>
            <Toolbar />
            {children}
          </Box>
        </Box>
        </>
    );
}
