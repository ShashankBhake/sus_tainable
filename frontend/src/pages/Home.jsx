import { useAuth } from "../store/auth.jsx";
import {NavLink} from "react-router-dom";
export default function Home() {
    const { isLoggedIn } = useAuth();
  console.log("hello", isLoggedIn);
    return (
        <>
        <h1>HEllo</h1>
        <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
        </>
    )
}