import { Box } from '@mui/material'
import Column from './Column/Column'

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        borderRadius: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar': { height: '5px', width: '5px' },
        '&::-webkit-scrollbar-track': { bgcolor: 'transparent' },
        '&::-webkit-scrollbar-thumb': { bgcolor: '#bdbdbd', boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)' },
        '&::-webkit-scrollbar-thumb:hover': { bgcolor: '#7c7c7c', cursor: 'pointer' }
      }}
    >
      {/* header column board */}
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </Box>
  )
}

export default ListColumns
