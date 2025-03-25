"use client";

import { useEffect, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

interface LoggerProps {
  status: string;
}

const Logger: React.FC<LoggerProps> = ({ status }) => {
  const hasLogged = useRef(false); // Track if logging has already occurred

  useEffect(() => {
    if (hasLogged.current) return; // Prevent double execution
    hasLogged.current = true;

    const getDeviceInfo = (): string => {
      const userAgent = navigator.userAgent;
      let device = "Unknown Device";

      if (/Windows NT 10/.test(userAgent)) device = "Windows 10";
      else if (/Windows NT 11/.test(userAgent)) device = "Windows 11";
      else if (/Mac OS X/.test(userAgent)) device = "MacOS";
      else if (/Android/.test(userAgent)) device = "Android Device";
      else if (/iPhone/.test(userAgent)) device = "iPhone";
      else if (/iPad/.test(userAgent)) device = "iPad";
      else if (/Linux/.test(userAgent)) device = "Linux";

      return device;
    };

    const log = {
      message: `Someone is ${status}`,
      device: getDeviceInfo(),
      browser: navigator.userAgent,
      dateCreated: new Date().toISOString(),
    };

    const logToFirebase = async () => {
      try {
        await addDoc(collection(firestore, "logs"), log);
        console.log("Log saved to Firebase:", log);
      } catch (error) {
        console.error("Error logging to Firebase:", error);
      }
    };

    logToFirebase();
  }, [status]);

  return null;
};

export default Logger;
