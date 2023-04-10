import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import style from './Detail.module.less';

export default function Detail(props) {

    const { detailID } = useParams();
    const [character, setCharacter] = useState({});

    const URL_BASE = "http://localhost:3001/rickandmorty";
  // const URL_BASE = "https://be-a-rym.up.railway.app/api";
  // const KEY = "46740eb499eb.794e3e4901c71a0f3e91";

    useEffect(() => {
        fetch(`${URL_BASE}/detail/${detailID}`)
          .then((response) => response.json())
          .then((char) => {
            console.log(char);
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailID]);

    return(
        <div className={style.contenedor}>
            {
                character.name ? (
                    <>
                        <Link to='/home'>
                            <button>{'<'}</button>
                        </Link>
                        <div className={style.contImg}>
                            <img src={character.image}/>
                        </div>
                    
                        <div className={style.contDesc}>
                            <h2>{character.name}</h2>
                            <p><span>Status: </span> {character.status}</p>
                            <p><span>Specie: </span> {character.species}</p>
                            <p><span>Gender: </span> {character.gender}</p>
                            <p><span>Origin: </span> {character.origin?.name}</p>
                        </div>
                    </>
                ) : <h2>LOADING...</h2>
            }
        </div>
    )
}