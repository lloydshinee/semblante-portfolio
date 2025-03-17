import { Timestamp } from "firebase/firestore";

export interface Message {
  id: string;
  body: string;
  timestamp: Timestamp;
  isAdmin: boolean;
}
