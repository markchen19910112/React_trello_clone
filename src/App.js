import React, { useState, useEffect } from "react";
import List from "./component/List";
import datalist from "./data/datalist";
import { v4 as uuid } from "uuid";
import dataConnect from "./data/dataConnect";
import InputContainer from "./component/inputContainer";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { uid } from "uid";
import Todo from "./Todo";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "./firebase";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#1E90FF",
    width: "100%",
    overflowY: "auto",
  },
}));

const db = getFirestore(firebaseApp);

export default function App() {
  const [data, setData] = useState(datalist);
  const [frData, setFrData] = useState([]);

  const classes = useStyle();
  useEffect(() => {
    const fetchData = async () => {
      const listCol = collection(db, "list");

      const listSnapShot = await getDocs(listCol);
      const lists = listSnapShot.docs.map((doc) => doc.data());
      console.log(lists);
      setFrData(lists);
      //console.log(frData);
    };

    fetchData();
  }, []);

  const addMoreCard = (title, listId) => {
    console.log(title, listId);
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const flistItem = frData.find((flistItem) => flistItem.listId == listId);
    flistItem.cards = [...flistItem.cards, newCard];
    let prevItems = frData;
    const fitemIndex = frData.findIndex((fitem) => fitem.listId == listId);

    prevItems.splice(fitemIndex, 1, flistItem);

    setFrData((prev) => {
      return [...prevItems];
    });

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log("destination", destination, "source", source, draggableId);

    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <dataConnect.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(provided) => (
            <div
              className={classes.root}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {frData.map((list, index) => {
                //{data.listIds.map((listId, index) => {
                //const list = data.lists[listId];
                return <List list={list} key={list.listId} index={index} />;
              })}
              <InputContainer type="list" />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </dataConnect.Provider>
  );
}
