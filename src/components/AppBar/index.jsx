import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { Badge, Button, IconButton, TextField, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import TrelloLogo from '~/assets/trello-logo.svg?react'
import SelectMode from '~/components/SelectMode'
import ProfileAccount from './Menus/ProfileAccount'
import Recents from './Menus/Recents'
import Starred from './Menus/Starred'
import Workspaces from './Menus/Workspaces'

/**
 * Component Header NarBar Menus
 *
 * @returns
 */
function AppBar() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1.5
      }}
    >
      {/* Menu left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* AppIcon */}
        <AppsIcon sx={{ color: 'primary.main' }} />

        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}
        >
          <SvgIcon component={TrelloLogo} inheritViewBox />
          <Typography variant='span'>Trello</Typography>
        </Box>

        {/* Menu workspaces */}
        <Workspaces />

        {/* menu recents */}
        <Recents />

        {/* Menu starred */}
        <Starred />

        {/* Menu starred */}
        <Starred />

        {/* Create Button */}
        <Button variant='outlined'>Create</Button>
      </Box>

      {/* Menu Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* Menu Search Right */}
        <TextField id='outlined-search' label='Search...' type='search' size='small' />

        {/* Dark/Light Mode */}
        <SelectMode />

        {/* Notification Menu */}
        <Tooltip title='Notification'>
          <IconButton>
            <Badge color='secondary' variant='dot'>
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Help Menu */}
        <Tooltip title='Help'>
          <IconButton>
            <HelpOutlineIcon sx={{ color: 'primary.main' }} />
          </IconButton>
        </Tooltip>

        {/* Account Profile Menu */}
        <ProfileAccount />
      </Box>
    </Box>
  )
}

export default AppBar
