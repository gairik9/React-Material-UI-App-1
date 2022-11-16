import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React, { useState } from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FaceIcon from '@mui/icons-material/Face';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={e => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 20 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300}  p={4} borderRadius={2}  bgcolor={"background.default"} color={'text.primary'}>
                    <Typography variant="h5" color={'gray'} textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://images.pexels.com/photos/13014413/pexels-photo-13014413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant='span'>Clerissa</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="filled-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What's Up?"
                        variant="filled"
                    />
                    <Stack direction={'row'} gap={1} mt={3} justifyContent={'space-between'}>
                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ marginTop: '-8px' }}>
                            <PhotoCamera />
                            <input hidden accept="image/*" type="file" />

                        </IconButton>
                        <EmojiEmotionsIcon color="warning" />
                        <AddReactionIcon color="danger" />
                        <SentimentSatisfiedAltIcon color="success" />
                        <FaceIcon color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" sx={{marginTop:3}}>
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}><CalendarMonthIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;
