import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

const BoardContent = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        p: '10px 0',
        height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`
      }}
    >
      {/* Column Board */}
      <ListColumns />
    </Box>
  )
}

export default BoardContent
