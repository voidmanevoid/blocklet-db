"use client";
import 'react-toastify/dist/ReactToastify.css';

import { useRef, useState } from "react";
import "../app.css";
import { Box, Button, ButtonGroup, Grid, Modal, TextField, Tooltip, Typography } from "@mui/material";
import { useSessionContext } from '../contexts/session';
import { ToastContainer } from 'react-toastify';

import ExportIcon from '@mui/icons-material/FileDownload';
import RequiredLogin from './required-login';
// @ts-ignore
import { Knob } from "react-rotary-knob";
// @ts-ignore
import * as skins from 'react-rotary-knob-skin-pack';

import {  exportModalStyle }
  from '../styles/styles';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#B22222',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Share Tech Mono',
      'VT323',
      'monospace',
      'sans-serif',
    ].join(','),
  },
});

function BeatMachine() {
  const { session } = useSessionContext();
  const [exportLoopCount, setExportLoopCount] = useState<any>(4); // Default to 4 loops for export
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [beatName, setBeatName] = useState<string>("");
  const [isExporting, setIsExporting] = useState(false);


  const handleExportClick = () => {
    setExportModalOpen(true);
  };
  

  const exportBeatToMp3 = async () => {
  
    try {
      const response = await fetch("/api/export", {
        method: "POST",

      });

      if (response.ok) {

      } else {
        console.error("Error uploading file.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleExportModalClose = () => {
    setExportModalOpen(false);
  }


  if (!session.user) {
    return (
      <ThemeProvider theme={theme}>
        <RequiredLogin />
      </ThemeProvider>);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        {/* <div className='grid justify-items-center gap-16'> */}
        <ToastContainer theme="dark" />

        <main>

          <div className='main-container'>

           

            <Grid container justifyContent="center" className='p-0'>
              <Grid item md={12} mb={0}>
                <Box display="flex" justifyContent="center" height={80}>
                  {/* <Button onClick={() => !isPlaying ? setWelcomeModalOpen(true) : null}> */}
                  {/* <Image src="/bm9000.png" alt="Beat Machine" height={50} /> */}
                  <img src="/bm9000.png" alt="Beat Machine" />
                  {/* </Button> */}
                </Box>
              </Grid>
              <Grid item md={10} mt={1} className="controls-container" display="flex" justifyContent="space-between" padding={2} alignItems="center">

                <ButtonGroup variant="contained" aria-label="contained button group" size="small">
                  <Button disabled={true} fullWidth sx={{ textTransform: 'unset' }} >
                    <Typography
                      minWidth={300}
                      variant="h5"
                      className='menu-text'
                    >
                      {beatName.length ? beatName : 'A Bass Odyssey'}
                    </Typography>
                  </Button>
                 
                  <Tooltip title="Export to MP3">
                    <Button onClick={handleExportClick}>
                      <ExportIcon />
                    </Button>
                  </Tooltip>

                </ButtonGroup>

                <ButtonGroup variant="contained" aria-label="mode toggle" size="small">

                </ButtonGroup>




              </Grid>
    </Grid>
          </div>
          
          <Modal onClose={handleExportModalClose} open={exportModalOpen}>
            <Box sx={exportModalStyle}>
              <Typography mb={2} variant="h6" color="gray" display="flex" justifyContent={"center"}>EXPORT TO MP3...</Typography>

              <Grid container spacing={2} mt={2}>
                <Grid item md={6} display="flex" justifyContent="space-between">
                 
                  <Button disabled={true} sx={{ textTransform: 'unset' }} >
                    <Typography variant="h5" className='menu-text'>
                      Loop Count
                    </Typography>
                  </Button>
                  <Box>
                    <ButtonGroup variant="contained" aria-label="mode toggle" size="small">
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="number"
                        value={exportLoopCount}
                        onChange={(e) => setExportLoopCount(e.target.value)}
                        sx={{
                          flexGrow: 1,
                          '& .MuiOutlinedInput-root': {
                            color: 'white',  // Set input text color to white
                            '& fieldset': {
                              borderColor: 'red',  // Red border color
                            },
                            '&:hover fieldset': {
                              borderColor: 'darkred',  // Darker red on hover
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'red',  // Red border when focused
                            },
                            width: '100px',
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: 'gray',  // Gray placeholder text color
                          },
                        }}
                        InputProps={{
                          style: { color: 'white' }, // Ensure white text color in input
                        }}
                      />
                    </ButtonGroup>
                  </Box>
                </Grid>
                <Grid item md={12} display="flex" justifyContent="flex-end" mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => exportBeatToMp3()}
                    disabled={isExporting}
                  >
                    {isExporting ? 'Exporting...' : 'Export'}

                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>

        </main>
      </div>
    </ThemeProvider>
  );
}


export default BeatMachine;