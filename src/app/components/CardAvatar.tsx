'use client'

import { GitHub } from '@mui/icons-material'
import { Avatar } from '@mui/material'

const CardAvatar = ({ url }: { url: string }) => {
  return (
    <Avatar sx={{ cursor: 'pointer' }} onClick={() => window.open(url, '_blank')}>
      <GitHub />
    </Avatar>
  )
}

export default CardAvatar
