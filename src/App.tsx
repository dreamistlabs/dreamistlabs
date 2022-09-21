import React from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';
import pkg from '../package.json';

const styles = {
  header: {
    display: 'flex',
    padding: '4px 8px',
    width: '100%',
  } as SxProps,
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as SxProps,
  footer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '4px 8px',
    width: '100%',
  } as SxProps,
};

const App = (): React.ReactElement => {
  return (
    <Box className="App">
      <Box component="header" sx={styles.header}>
        <Typography sx={{ fontWeight: 500 }}>DreamistLabs</Typography>
      </Box>
      <Box sx={styles.content}>
        <Typography color="text.secondary" sx={{ fontWeight: 500 }} variant="h4">
          One Developer, Lots of Code
        </Typography>
        <Typography color="text.secondary" sx={{ fontStyle: 'italic' }} variant="body1">
          (all experimental)
        </Typography>
        <IconButton
          aria-label="Go to Dreamistlabs on GitHub"
          href="https://github.com/dreamistlabs"
          rel="noopener noreferrer"
          size="large"
          sx={{ margin: 2 }}
          target="_blank"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box component="footer" sx={styles.footer}>
        <Typography variant="caption">v{pkg.version}</Typography>
      </Box>
    </Box>
  );
};

export default App;
