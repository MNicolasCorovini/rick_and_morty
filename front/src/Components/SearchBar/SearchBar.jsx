import { useState } from "react";
import style from "../SearchBar/SearchBar.module.less";

export default function SearchBar({onSearch}) {

    const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

    return (
       <div className={style.contenedorNav}>
          <input type='text' onChange={handleChange} value={id} />
          <div>
            <button onClick={() => {
                onSearch(id)
                setId("");
            }}>Q</button>
          </div>
       </div>
    );
 }