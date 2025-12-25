import classes from './Button.module.scss'

interface Props {
    children?: React.ReactNode,
    elemClass?: string,
    mouseEnt?: () => void,
    mouseLeav?: () => void,
    callback?: () => void,
    num?: number
}


const Button = ({children, elemClass, mouseEnt, mouseLeav}: Props): React.ReactElement => {
    const cls = [classes.button, elemClass].join(' ')


    return (
        <button
            onMouseEnter={mouseEnt}
            onMouseLeave={mouseLeav}
            className={cls}>
            {children}
        </button>
    );
};

export default Button;