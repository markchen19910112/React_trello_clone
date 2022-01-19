import { db } from "./config";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useState } from "react";

function Additems() {
  const [todo, setTodo] = useState("");
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  };
}
export default Additems;
