import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <>
      <Box
        sx={{
          height: 'fit-content',
          maxHeight: (theme) =>
            `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight} - ${theme.spacing(
              5
            )} - ${theme.trelloCustom.boardColumnHeader} - ${theme.trelloCustom.boardColumnFooter})`,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          p: '0 5px',
          m: '0 5px',
          '&::-webkit-scrollbar-thumb': {
            background: '#ced0da'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#bfc2cf'
          }
        }}
      >
        {Array(2)
          .fill(null)
          .map((data, index) => (
            <Card key={index} />
          ))}
      </Box>
    </>
  )
}

export default ListCards
