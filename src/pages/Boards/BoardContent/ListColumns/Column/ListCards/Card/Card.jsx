import AttachmentIcon from '@mui/icons-material/Attachment'
import ChatIcon from '@mui/icons-material/Chat'
import GroupIcon from '@mui/icons-material/Group'
import { Button, CardActions, CardContent, CardMedia, Card as MuiCard, Typography } from '@mui/material'

function Card() {
  return (
    <>
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
          overflow: 'unset'
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
          title='green iguana'
        />
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography variant='body1'>MERN stack javascript</Typography>
        </CardContent>
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          <Button size='small' startIcon={<GroupIcon />}>
            20
          </Button>
          <Button size='small' startIcon={<ChatIcon />}>
            15
          </Button>
          <Button size='small' startIcon={<AttachmentIcon />}>
            10
          </Button>
        </CardActions>
      </MuiCard>
    </>
  )
}

export default Card
