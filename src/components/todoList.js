import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
  root: {
    margin:'0px auto',
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#74B9FF' 
  },
}));

export default function TodoList() {
  const classes = useStyles();
  


  return (
    <List className={classes.root}>

     
          <ListItem
          role={undefined} dense button 
          style={{
          border:'0.5px solid #0A3D62',
          }}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText >
            </ListItemText>
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    </List>
  );
}
