import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

export default function BasicBreadcrumbs(props: { spaceUuid: string, folderNames: string[] }) {

    const folderNames = props.folderNames ? props.folderNames : ["/"];
    console.log("line 9: " + folderNames);
    const links = ["1", "2", "3"].reduce((accu, cur) => [...accu, accu + cur], [""]);
    console.log(links);
    return (
        <>
            {links}
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </>
    );
}