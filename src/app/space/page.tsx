"use client";

import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MSpace from "@/lib/model/mongo/MSpace";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';

export default function Space() {

    const [rows, setRows] = useState<typeof MSpace[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/space`)
            .then(e => e.json())
            .then(e => setRows(e));
    }, []);


    const columns: GridColDef<(typeof MSpace)>[] = [
        {
            field: 'space_uuid',
            headerName: 'ID',
            width: 350,
            editable: false,
        },
        {
            field: 'space_name',
            headerName: 'Name',
            width: 150,
            editable: false,
        },
        {
            field: 'detail',
            headerName: 'Detail',
            width: 100,
            renderCell: (params) => (
                <Link href={`/spaceInfo/${params.id}`}>
                    <IconButton
                        onClick={() => {
                            console.log(params.id);
                        }}
                    >
                        <ReadMoreIcon />
                    </IconButton>
                </Link>
            ),
        },
    ];

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.space_uuid}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    );

}
