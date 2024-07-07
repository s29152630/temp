import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

export default function BasicBreadcrumbs(props: { spaceUuid: string, folderNames: string[] }) {
    const folderNames = props.folderNames ? props.folderNames : [];
    const navs = folderNames.reduce((acc, curr) => {
        if (acc.length === 0) {
          acc.push(curr);
        } else {
          acc.push(acc[acc.length - 1] + curr);
        }
        return acc;
      }, ["/" + props.spaceUuid]);

    // const links = navs.map(e => <Link href={e}></Link>)
    return (
        <>
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