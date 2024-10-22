import { Card, CardContent, CardHeader, Typography, Stack, Avatar, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { name, description, author, version, repository, dependencies } from '../../../package.json'
import CardAvatar from './CardAvatar'
import Zustand from './Zustand'
import { Key } from '@mui/icons-material'

const highlights = { 'next': 'NextJS', 'react': 'React', 'zustand': 'Zustand', '@mui/material': 'MUI' }

const HomeScreen: React.FC = () => {
  if (!name) return null
  return (
    <Stack spacing={3}>
      <Card sx={{ width: 620 }}>
        <CardHeader
          avatar={<CardAvatar url={repository.url} />}
          title={
            <Stack direction={'row'} alignItems={'flex-end'} spacing={1}>
              <Typography variant='h5'>{name}</Typography>
              <Typography variant='subtitle1' color='textDisabled'>
                {'v' + version}
              </Typography>
              <Typography variant='subtitle1' color='textDisabled'>
                {'by ' + author.name}
              </Typography>
            </Stack>
          }
          subheader={
            <Typography variant='subtitle1' color='textDisabled'>
              {description}
            </Typography>
          }
        />
      </Card>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Stack spacing={1}>
              {Object.keys(highlights).map((dep) => (
                <Stack direction={'row'} key={dep} justifyContent={'space-between'}>
                  <Typography variant='h6'>{highlights[dep as keyof typeof highlights] || dep} </Typography>
                  <Typography variant='h6'>{dependencies[dep as keyof typeof highlights].split('.')[0].replace('^', '')}</Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Zustand />
          </CardContent>
        </Card>
      </Stack>
      <Card sx={{ width: 620 }}>
        <Accordion>
          <AccordionSummary>
            <CardHeader
              title={<Typography variant='h5'>Environment YZ2</Typography>}
              avatar={
                <Avatar>
                  <Key />
                </Avatar>
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            <CardContent>
              <Stack spacing={1}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>EXAMPLE_A</Typography>
                  <Typography color='textDisabled'>{process.env.EXAMPLE_A}</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>EXAMPLE_B</Typography>
                  <Typography color='textDisabled'>{process.env.EXAMPLE_B}</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>NEXT_PUBLIC_EXAMPLE_1</Typography>
                  <Typography color='textDisabled'>{process.env.NEXT_PUBLIC_EXAMPLE_1}</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>NEXT_PUBLIC_EXAMPLE_2</Typography>
                  <Typography color='textDisabled'>{process.env.NEXT_PUBLIC_EXAMPLE_2}</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Stack>
  )
}

export default HomeScreen
