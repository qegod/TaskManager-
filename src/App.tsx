import Button from "./components/button/Button.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Container from "./components/container/Container.tsx";
import {navLinks} from './utils/constans.ts'
import logo from '../public/images/logo.png'
import "./style/index.scss";
import {classUse} from './utils/classUse.ts'
import {useState} from "react";


function App() {
    const [btnHover, setBtnHover] = useState<string[]>(['', '', '']);

    function onHovered(num: number) {
        switch(num) {
            case 0:
                setBtnHover(['active', 'disable', 'disable'])
                break;
            case 1:
                setBtnHover(['disable', 'active', 'disable'])
                break;
            case 2:
                setBtnHover(['disable', 'disable', 'active'])
                break;
        }
    }

    function disHovered() {
        return setBtnHover(['', '', ''])
    }


  return (
    <div className={["app", "black"].join(" ")}>
        <Container>
            <Navbar logo={logo} txtLogo={'FoSton'} props={navLinks}  />
            <div  className="buttons">
                <Button
                    mouseEnt={() => onHovered(0)}
                    mouseLeav={disHovered}
                    elemClass={classUse(['btn','firstBtnCl', btnHover[0]])}
                    >Tasks
                </Button>
                <Button
                    mouseEnt={() => onHovered(1)}
                    mouseLeav={disHovered}
                    elemClass={classUse(['btn','tempBtnCl', btnHover[1]])}
                    >Statistics
                </Button>
                <Button
                    mouseEnt={() => onHovered(2)}
                    mouseLeav={disHovered}
                    elemClass={classUse(['btn','thirdBtnCl', btnHover[2]])}
                    >About
                </Button>
            </div>
        </Container>

    </div>
  )
}

export default App
