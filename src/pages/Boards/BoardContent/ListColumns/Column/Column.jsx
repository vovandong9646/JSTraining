import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import ListCards from './ListCards/ListCards'

const BOARD_COLUMN_HEADER_HEIGHT = '50px'
const BOARD_COLUMN_FOOTER_HEIGHT = '56px'

function Column() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        '&:last-child': { mr: 2 },
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight} - ${theme.spacing(
            5
          )})`
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: (theme) => theme.trelloCustom.boardColumnHeader,
          p: 2
        }}
      >
        {/* Column Title header */}
        <Typography variant='h6' sx={{ fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Column Title
        </Typography>
        {/* Column header more title */}
        <Box>
          <ExpandMoreIcon
            sx={{ cursor: 'pointer' }}
            id='basic-button-column-board'
            aria-controls={open ? 'basic-menu-column-board' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
          <Menu
            id='basic-menu-column-board'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-column-board'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize='small' />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize='small' />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize='small' />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize='small' />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Column list card */}
      <ListCards />
      {/* Column Footer */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: (theme) => theme.trelloCustom.boardColumnFooter,
          cursor: 'pointer',
          p: 2
        }}
      >
        <Button size='small' startIcon={<AddCardIcon />} variant='text'>
          Add new card
        </Button>
        <Tooltip title='Drag to move'>
          <DragHandleIcon />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
