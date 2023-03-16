import style from '../Nav/Nav.module.less';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav className={style.navCont}>
            <div className={style.navDivCont}>
                <NavLink to={'/home'} style={ ({ isActive }) => ({ textDecoration: 0, })} ><p>Home</p></NavLink>
                <NavLink to={'/favorites'} style={ ({ isActive }) => ({ textDecoration: 0, })} ><p>Favorites</p></NavLink>
                <NavLink to={'/about'} style={ ({ isActive }) => ({ textDecoration: 0, })} ><p>About</p></NavLink>
            </div>

            <div className={style.navDivCont}>
                <SearchBar onSearch = {props.onSearch} />
                <button className={style.navBtnRandom} onClick={() => props.onAdd()}> RANDOM </button>
            </div>

            <div className={style.navDivCont}>
                <NavLink to={'/'} style={ ({ isActive }) => ({ textDecoration: 0, })} ><p>Logout</p></NavLink>
            </div>
        </nav>
    );
};