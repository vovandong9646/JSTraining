import AppsIcon from '@mui/icons-material/Apps'
import CloseIcon from '@mui/icons-material/Close'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import { Badge, Button, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import TrelloLogo from '~/assets/trello-logo.svg?react'
import SelectMode from '~/components/SelectMode/SelectMode'
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
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      sx={{
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1.5,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      {/* Menu left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* AppIcon */}
        <AppsIcon sx={{ color: 'white' }} />

        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'white',
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
        <Button
          variant='outlined'
          sx={{ color: 'white', border: 'none', '&:hover': { border: 'none' } }}
          startIcon={<LibraryAddIcon />}
        >
          Create
        </Button>
      </Box>

      {/* Menu Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* Menu Search Right */}
        <TextField
          id='outlined-search'
          label='Search...'
          type='text'
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                onClick={() => setSearchValue('')}
                fontSize='small'
                sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
        />

        {/* Dark/Light Mode */}
        <SelectMode />

        {/* Notification Menu */}
        <Tooltip title='Notification' arrow>
          <IconButton>
            <Badge color='error' variant='dot'>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Help Menu */}
        <Tooltip title='Help' arrow>
          <IconButton>
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </IconButton>
        </Tooltip>

        {/* Account Profile Menu */}
        <ProfileAccount />
      </Box>
    </Box>
  )
}

export default AppBar
