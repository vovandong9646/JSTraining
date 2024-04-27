import Box from '@mui/material/Box'
import SelectMode from '~/components/SelectMode'

function AppBar() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.light',
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <SelectMode />
    </Box>
  )
}

export default AppBar
