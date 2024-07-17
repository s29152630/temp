"use client";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import MSpace, { ISpace } from '@/lib/model/mongo/MSpace';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SpaceInfoModal({ params }: { params: { spaceUuid: string } }) {
    const [open, setOpen] = useState(true);
    const [space, setSpace] = useState<ISpace>();

    useEffect(() => {
        fetch(`http://localhost:3000/api/space/${params.spaceUuid}`)
            .then(e => e.json())
            .then(e => setSpace(e));
    }, [params]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title">
                        <ul>
                            <li>
                                {space?.space_uuid}
                            </li>
                            <li>
                                {space?.space_name}
                            </li>
                            <li>
                                {space?.space_owner}
                            </li>
                            <li>
                                {space?.create_user}
                            </li>
                            <li>
                                {JSON.stringify(space?.create_time)}
                                {/* {space?.create_time} */}
                            </li>
                        </ul>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}