import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Admin from '../components/Admin';
import FileList from '@/components/FileList';
import Details from '@/components/Details';

const menuItems = [
  {
      name: "First",
      url: "/"
  },
  {
      name: "Second",
      url: "/"
  },
  {
      name: "Third",
      url: "/"
  },
  {
    name: "About",
    url: "/about"
  }
]

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function mainContent() {
  return(
    <Box>
      <FileList />
      <Details tags={['A', 'B']}/>
    </Box>
  );
}

function sideContent() {
  return(
    <FileList />
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme: lightTheme}>
    <CssBaseline />
      <Admin 
        setDark={setDark}
        menuItems={menuItems}
        main={mainContent()}
        side={sideContent()}
      >
      </Admin>
    </ThemeProvider>
  );
}