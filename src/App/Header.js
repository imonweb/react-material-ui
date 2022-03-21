import React from 'react'
import { AppBar, Toolbar, Grid, IconButton, Badge, InputBase } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';


export default function () {
  return (
    <AppBar position="static">
     <Toolbar>
      <Grid container>
        {/* <Grid item xs={4} style={{border:'1px solid #fff'}}> */}
        <Grid item>
            <InputBase />
        </Grid>
        <Grid item sm>

        </Grid>
        {/* <Grid item sm={8} style={{border:'1px solid #000'}}> */}
        <Grid item>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <IconButton>
             <Badge badgeContent={3} color="primary">
              <ChatBubbleOutlineIcon />
            </Badge>
          </IconButton>
          <IconButton>
              <PowerSettingsNewIcon />
          </IconButton>

        </Grid>
      </Grid>

      
     </Toolbar>
    </AppBar>
  )
}
