import classes from './navbar.module.scss'
import {Link} from "react-router";
import logo from '../../../public/images/logo.png'

interface ObjLinks {
    name: string;
    path: string;
}

interface NavbarProps {
    props: ObjLinks[]
}



const Navbar: React.FC<NavbarProps> = ({props}) => {
    return (
        <div className={classes.navbar}>
            <img src={logo} alt="logo" />
            <Link className={classes.link} to={'/'}>
                <span className={classes.logoName}>FoSton</span>
            </Link>

            <ul className={classes.list}>
                {props.map((item, index) => (
                    <Link className={classes.link} to={item.path}>
                        <li key={index} className={classes.link}>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;