import { Box, Typography } from "@mui/material";
// import { keyframes } from '@mui/system';

// const marquee = keyframes`
//   0% { transform: translateX(250%); }
//   100% { transform: translateX(-250%); }
// `;

export default function BeatNameDisplay({ beatName }: { beatName: string }) {
    return (
      <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            cursor: 'default',
            display: 'inline-block',
            // animation: beatName.length
            //   ? 'none'
            //   : `${marquee} 5s linear infinite`, // Apply marquee animation if beatName is empty
          }}
        >
          {beatName.length ? beatName : 'BM-9000'}
        </Typography>
      </Box>
    );
  }