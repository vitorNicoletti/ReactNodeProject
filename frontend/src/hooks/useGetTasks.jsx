// src/hooks/useTasksData.js
import { useEffect, useState } from "react";
import tasks from "../services/tasks";

const useGetTasks = () => {
  const [data, setData] = useState([]);

  const refresh = () => {
    tasks.get("/")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    refresh();
  }, []);

  return { data, refresh };
};

export default useGetTasks;
