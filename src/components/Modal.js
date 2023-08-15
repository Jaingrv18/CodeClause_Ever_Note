import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalComponent({
    open,
    setOpen,
    title,
    setTitle,
    addData
}) {
    
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
                    <input
                        placeholder='Add the Title'
                        className='add-input'
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                    />
                    <div className='button-container'>
                        <button
                            className='add-docs'
                            onClick={addData}
                        >
                            Add
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}