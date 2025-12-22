import classes from './Button.module.scss'

interface Props {
    children?: React.ReactNode
}


const Button = ({children}: Props): React.ReactElement => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    );
};

export default Button;