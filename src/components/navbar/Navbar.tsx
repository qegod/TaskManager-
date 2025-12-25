import classes from './navbar.module.scss'

interface NavbarProps {
    logo: string,
    txtLogo: string,
    props: string[]
    elem?: React.ReactElement
}



const Navbar: React.FC<NavbarProps> = ({logo, txtLogo, props}) => {
    return (
        <div className={classes.navbar}>
            <img src={logo} alt="logo" />
            <div className={classes.logoName}>{txtLogo}</div>

            <ul className={classes.list}>
                {props.map((item, index) => (
                    <li key={index} className={classes.link}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;