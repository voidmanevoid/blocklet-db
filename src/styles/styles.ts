import { createTheme } from "@mui/material";

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    // bgcolor: '#eee',
    bgcolor: '#2E2E2E',
    border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };
  
  export const exportModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    // bgcolor: '#eee',
    bgcolor: '#2E2E2E',
    border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };

  export const welcomeModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    // bgcolor: '#eee',
    // minheight: '70%',
    height: '80%',
    // bgcolor: '#2E2E2E',
    // border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };

  export const soundModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    bgcolor: '#2E2E2E',
    border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };
  
  export const patternModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: '#2E2E2E',
    border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };
  
  export const folderModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    bgcolor: '#2E2E2E',
    border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };

  export const contestModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#2E2E2E',
    border: '2px solid #4d4d4d',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    outline: 'none',
  };

  export const listStyle = {
    listStyleType: 'none', // Numbered list
    padding: '16px',
    backgroundColor: '#3C3C3C', // Slightly lighter background for contrast
    borderRadius: '8px', // Rounded corners for the list container
    color: '#FFFFFF', // White text for contrast
    margin: '16px 0', // Space between the list and other elements
  };

  export const scrollableSoundList = {
    maxHeight: '190px', // Limit the height of the list
    overflowY: 'auto', // Enable vertical scrolling
    // marginTop: '4px',
    // marginBottom: '16px',
    // border: '1px solid #4d4d4d',
    // color: 'white',
    marginLeft: '0',
  };
  
  export const soundNameStyle = {
    width: '100%', // Fixed width for the sound name
    whiteSpace: 'nowrap', // Prevent the text from wrapping
    overflow: 'hidden', // Hide the overflowed text
    textOverflow: 'ellipsis', // Apply ellipsis for overflowed text
    color: 'white',
  };
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Enables dark mode
      background: {
        default: '#121212', // Customize card background color
        paper: '#1E1E1E',   // Customize surface background
      },
      text: {
        primary: '#ffffff', // Text color
        secondary: '#bbbbbb',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Optional: Rounded corners
          },
        },
      },
    },
  });