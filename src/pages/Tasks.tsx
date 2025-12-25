import Navbar from "../components/navbar/Navbar.tsx";
import {navLinks} from "../utils/constans.ts";
import '../style/index.scss'
import Container from "../components/container/Container.tsx";

const Tasks = () => {
    return (
            <Container>
                <Navbar props={navLinks}></Navbar>
            </Container>
    );
};

export default Tasks;