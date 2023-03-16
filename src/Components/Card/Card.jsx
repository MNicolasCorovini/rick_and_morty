import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite, deleteToFavorite } from "../../Redux/actions";
import style from "../Card/Card.module.less";

const Card = (props) => {
    const {id, name, species, gender, image, onClose} = props;
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        props.myFavorites.forEach((fav) => {
           if (fav.id === id) setIsFav(true);
        });
     }, [props.myFavorites]);

    const handleFavorite = () => {
        setIsFav(!isFav);

        if(!isFav){
            props.addToFavorite(props);
        }else props.deleteToFavorite(id);
    };

    return (
        <div key={id} className={style.contenedor}>
            <button onClick = { () => {onClose(id)} }> X </button>

            <div className={style.divNameImg}>
                { isFav ? ( <button onClick={handleFavorite}>❤️</button> ) : (
                        <button onClick={handleFavorite}>🤍</button> )}

                <img src={image} alt="name" />
                <Link to={`/detail/${id}`}>
                    <h2 className={style.name}>{name}</h2>
                </Link>
            </div>

            <div className={style.divDesc}>
                <h2>{species}</h2>
                <h2>{gender}</h2>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorite: (character) => dispatch(addToFavorite(character)),
        deleteToFavorite: (id) => dispatch(deleteToFavorite(id))
    }
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);