import './App.css'
import {
  BrowserRouter as Router
} from "react-router-dom";
import { HomeScreen } from "./components/homescreen";

export default function App() {

  return (
    <Router>
      <HomeScreen/>
    </Router>
  )
}
