"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreateFolderAction from '@/lib/action/CreateFolderAction';
import { SpaceItemConst } from '@/lib/const/SpaceConst';

export default function UploadFileDialog({ params }: { params: { spaceUuid: string, folderNames: string[] } }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        + Upload File
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const parent = params.folderNames ? params.folderNames.reduce((accu, cur) => accu + "/" + cur, "") : "/";
            CreateFolderAction({ params: { spaceUuid: params.spaceUuid, parent: parent, itemName: formJson.fileName, type: SpaceItemConst.TYPE_FILE } });
            handleClose();
          },
        }}
      >
        <DialogTitle>Upload File</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="fileId"
            name="fileName"
            label="file"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
