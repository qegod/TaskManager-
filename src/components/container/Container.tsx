import classes from './container.module.scss'

interface ContainerProps {
    children?: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default Container;