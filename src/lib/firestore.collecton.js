import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const blogCollectionref = collection(db, "blog");
