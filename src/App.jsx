import '@fontsource/roboto/300.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from './components/AppBar'

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh'
        // backgroundColor: 'primary.main'
      }}
    >
      <AppBar />
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          height: (theme) => theme.trelloCustom.boardBarHeight,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`
        }}
      >
        Board Content
      </Box>
    </Container>
  )
}

export default App
