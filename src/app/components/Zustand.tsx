'use client'

import { Button, Stack, Typography } from '@mui/material'
import store from '@/store/s'

const Zustand = () => {
  const count = store((s) => s.count)
  const setCount = store((s) => s.setCount)

  return (
    <Stack justifyContent={'space-between'} height={'150px'}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant={'h6'}>Count</Typography>
        <Typography variant={'h6'}>{count}</Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant={'h6'}>Increase</Typography>
          <Typography variant={'h6'}>
            <Button size='small' variant='contained' onClick={() => setCount(count + 1)}>
              +
            </Button>
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant={'h6'}>Decrease</Typography>
          <Typography variant={'h6'}>
            <Button size='small' variant='contained' onClick={() => setCount(count - 1)}>
              -
            </Button>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Zustand
