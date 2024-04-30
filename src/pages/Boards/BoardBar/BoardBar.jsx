import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'

const BoardBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trelloCustom.boardBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1.25 }}>
        <Chip
          label='MERN Stack Board'
          icon={<DashboardIcon />}
          size='small'
          sx={{ color: 'white', padding: 2, '& .MuiSvgIcon-root': { color: 'white' } }}
          clickable
        />

        <Chip
          label='Public/Private Workspace'
          icon={<VpnLockIcon />}
          size='small'
          sx={{ color: 'white', padding: 2, '& .MuiSvgIcon-root': { color: 'white' } }}
          clickable
        />
        <Chip
          label='Add to GoogleDrive'
          icon={<AddToDriveIcon />}
          size='small'
          sx={{ color: 'white', padding: 2, '& .MuiSvgIcon-root': { color: 'white' } }}
          clickable
        />
        <Chip
          label='Automation'
          icon={<BoltIcon />}
          size='small'
          sx={{ color: 'white', padding: 2, '& .MuiSvgIcon-root': { color: 'white' } }}
          clickable
        />
        <Chip
          label='Filters'
          icon={<FilterListIcon />}
          size='small'
          sx={{ color: 'white', padding: 2, '& .MuiSvgIcon-root': { color: 'white' } }}
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1.25 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >
          Invite
        </Button>
        <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: '30px', height: '30px', cursor: 'pointer' } }}>
          <Tooltip title='Đông Võ' arrow>
            <Avatar
              alt='Đông Võ'
              src='https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/427643942_122128016552120656_1190663451390168897_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7DNK3AftnokQ7kNvgEy8Ybp&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAis6Ejjq_bJUkZmkTiAGWkKBpsURRAujXtztdWQrB2Vg&oe=6632EA78'
            />
          </Tooltip>
          <Tooltip title='Travis Howard' arrow>
            <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          </Tooltip>
          <Tooltip title='Cindy Baker' arrow>
            <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
          </Tooltip>
          <Tooltip title='Agnes Walker' arrow>
            <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
