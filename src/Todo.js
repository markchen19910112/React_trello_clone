import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { db } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Todo = ({ arr }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
      </ListItem>
    </List>
  );
};

export default Todo;
