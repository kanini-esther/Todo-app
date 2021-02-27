import React from 'react';
import './Todo.css';
import { List, ListItemAvatar,ListItem,ListItemText} from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>     
                </ListItemAvatar>
              <ListItemText primary={props.text} secondary="Scrum"/>
            </ListItem>
        </List>
    )
}

export default Todo
