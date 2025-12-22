import Button from "./components/button/Button.tsx";
import "./style/index.scss";

function App() {
  return (
    <div className={["App", "black"].join(" ")}>
      <Button>
        hi
      </Button>
    </div>
  )
}

export default App
