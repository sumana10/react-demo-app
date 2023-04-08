import { createContext } from "react";

const UserContext = createContext({
    user:{
    name: "Sumana",
    email: "sumana@gmail.com"
}});

 export default UserContext;