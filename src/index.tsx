import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/variables/global.scss'
import './style/remove.scss'

createRoot(document.getElementById('root')!).render(
    <App/>
)
