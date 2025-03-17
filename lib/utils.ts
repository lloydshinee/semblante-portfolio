import { format, isToday, isYesterday, isThisWeek } from "date-fns";
import { Timestamp } from "firebase/firestore";

export const formatTimestamp = (timestamp: Timestamp | string) => {
  if (!timestamp) return "Unknown";

  let date;

  if (typeof timestamp === "string") {
    date = new Date(timestamp); // Handle case where timestamp is already a string
  } else if (timestamp instanceof Timestamp) {
    date = new Date(timestamp.seconds * 1000); // Convert Firebase Timestamp
  } else {
    return "Invalid Date";
  }

  if (isToday(date)) {
    return format(date, "h:mm a"); // "7:29 PM"
  }
  if (isYesterday(date)) {
    return `Yesterday ${format(date, "h:mm a")}`; // "Yesterday 7:29 PM"
  }
  if (isThisWeek(date)) {
    return format(date, "EEEE h:mm a"); // "Monday 7:29 PM"
  }
  return format(date, "MMM d, yyyy"); // "Mar 10, 2024"
};
