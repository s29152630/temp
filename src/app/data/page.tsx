"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';
import FetchSpaceItemAction from '@/lib/action/FetchSpaceItemAction';
import MSpaceItem from '@/lib/model/mongo/MSpaceItem';


const columns: GridColDef<(typeof MSpaceItem)[number]>[] = [
  {
      field: 'space_item_uuid',
      headerName: 'ID',
      width: 150,
      editable: false,
  },
  {
      field: 'space_item_name',
      headerName: 'Name',
      width: 150,
      editable: false,
  },
  {
      field: 'type',
      headerName: 'Type',
      width: 150,
      editable: false,
  },
  {
      field: 'create_user',
      headerName: 'Create User',
      width: 110,
      editable: false,
  },
  {
      field: 'create_time',
      headerName: 'Create Time',
      width: 110,
      editable: false,
      sortable: true,
  },
];


export default function DataGridDemo() {

  // const [rows, setRows] = React.useState();

  // useEffect( () => {
  //     async function fetch() {
  //         const fetchResult = await FetchSpaceItemAction("0c76500d-5a6b-4bc5-9c1a-0fab452e7db2", []);
  //         console.log("line 53");
  //         // console.log(fetchResult);
  //         setRows(JSON.parse(fetchResult));
  //         console.log(rows);
  //     }
  //     fetch();
  // }, []);

  const rows = [
    {
      space_item_uuid: '6bb64248-8fc5-41ba-8341-f489b1a8b847',
      space_item_name: 'folder1',
      type: 'FOLDER',
      create_user: 'createUser',
      create_time: new Date(),
      update_user: 'updateUser',
      update_time: new Date(),
      __v: 0,
      parent: '/',
      space_uuid: '0c76500d-5a6b-4bc5-9c1a-0fab452e7db2'
    },
  ]


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.space_item_uuid}
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
  );
}