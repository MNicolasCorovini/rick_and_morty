import Card from "../Card/Card";
import style from '../Cards/Cards.module.less';

const Cards = (props) => {
    const { characters, onClose } = props;

    return (
        <div className={style.contenedor}>
            {
                characters.map(({id, name, species, gender, image}) => {
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

export default Cards;