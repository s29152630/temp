"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';
import MSpaceItem from '@/lib/model/mongo/MSpaceItem';
import BasicBreadcrumbs from '@/component/space/BasicBreadcrumbs';
import CreateFolderDialog from '@/component/space/CreateFolderDialog';
import UploadFileDialog from '@/component/space/UploadFileDialog';
import { resolve } from 'path';


const columns: GridColDef<(typeof MSpaceItem)>[] = [
  {
    field: 'space_item_uuid',
    headerName: 'ID',
    width: 350,
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
  // {
  //   field: 'create_user',
  //   headerName: 'Create User',
  //   width: 100,
  //   editable: false,
  // },
  // {
  //   field: 'create_time',
  //   headerName: 'Create Time',
  //   width: 250,
  //   editable: false,
  //   sortable: true,
  // },
];


export default function SpaceItem({ params }: { params: { spaceUuid: string, folderNames: string[] } }) {

  // throw Promise.resolve("test");

  const [rows, setRows] = React.useState<typeof MSpaceItem[]>([]);

  useEffect(() => {
    const parent = params.folderNames ? params.folderNames.reduce((accu, cur) => accu + "/" + cur, "") : "/";
    fetch(`http://localhost:3000/api/spaceItem/${params.spaceUuid}/${parent}`)
      .then(e => e.json())
      .then(e => setRows(e));
  }, [params]);

  return (
    <>
      <div style={{ float: 'left' }}>
        <BasicBreadcrumbs spaceUuid={params.spaceUuid} folderNames={params.folderNames}></BasicBreadcrumbs>
      </div>
      <CreateFolderDialog params={params}></CreateFolderDialog>
      <UploadFileDialog params={params}></UploadFileDialog>

      <Box sx={{ width: '100%' }}>
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
    </>
  );
}
