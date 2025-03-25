"use client";

import { useEffect, useRef, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

interface Log {
  id: string;
  message: string;
  device: string;
  browser: string;
  dateCreated: string;
}

export function Logs() {
  const [logs, setLogs] = useState<Log[]>([]);
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logsQuery = query(
      collection(firestore, "logs"),
      orderBy("dateCreated", "desc")
    );

    const unsubscribe = onSnapshot(logsQuery, (snapshot) => {
      const logsData = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Log)
      );
      setLogs(logsData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="h-80 overflow-y-auto border p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Logs</h2>
      <div className="space-y-2">
        {logs.map((log) => (
          <div key={log.id} className="p-2 bg-white border rounded shadow-sm">
            <p className="text-sm font-medium">{log.message}</p>
            <p className="text-xs text-gray-600">
              {log.device} - {log.browser}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(log.dateCreated).toLocaleString()}
            </p>
          </div>
        ))}
        <div ref={logsEndRef} />
      </div>
    </div>
  );
}
