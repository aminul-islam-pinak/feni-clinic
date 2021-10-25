import { initializeApp } from "firebase/app";
import firebaseConfig from "./fairbase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);

}
export default initializeAuthentication;