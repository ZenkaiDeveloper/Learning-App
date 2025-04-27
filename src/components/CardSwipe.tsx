import React, { createRef } from 'react';
import TinderCard from 'react-tinder-card'
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';




const CardSwipe = () => {

  const inputRef = createRef<{ swipe: (dir: string) => void; restoreCard: () => void }>();


  const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction)
  }
      
  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen')
  }

  const swipe = async (dir: string) => {
    await inputRef?.current?.swipe(dir)
  }  
      
  return (
    <TinderCard
        ref={inputRef as React.RefObject<any>}
        onSwipe={onSwipe} 
        onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
        preventSwipe={['right', 'left']}>
        <Card className='inner-card'>
          <CardContent>
              <Typography variant="h5" component="div">
                Minimalistic Card
              </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a simple card from Material-UI.
            </Typography>
          </CardContent>
        </Card>
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
        margin: 'auto',
        padding: 2,
      }}
    >
      {/* X Button (left) */}
      <IconButton
        sx={{
          backgroundColor: 'error.main',
          color: 'white',
          width: 60,
          height: 60,
          borderRadius: '50%',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'error.dark',
          },
        }}
        onClick={() => swipe('left')}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton
        sx={{
          backgroundColor: 'success.main',
          color: 'white',
          width: 60,
          height: 60,
          borderRadius: '50%',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'success.dark',
          },
        }}
        onClick={() => swipe('right')}
      >
        <CheckIcon fontSize="large" />
      </IconButton>
    </Box>
    </TinderCard>
  )
}

export default CardSwipe;