import { connect } from "react-redux";
import Card from "../Card/Card";
import style from '../Cards/Cards.module.less';

const Favorites = (props) => {
    return (
        <div className={style.contenedor}>
            {
                props.myFavorites.map(({id, name, species, gender, image, onClose}) => {
                    return <Card 
                        key={id}
                        id = {id}
                        name = {name}
                        species = {species}
                        gender = {gender}
                        image = {image}
                        onClose = {onClose}
                     />
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);