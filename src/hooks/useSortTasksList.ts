import { useMemo } from "react";
import {  useSortState, useTasksState } from "../store";
import { getPriorityLevel } from "../helpers";


export const useSortTasksList = () => {

  const { sortOption, asc } = useSortState();
  const { taskList } = useTasksState();


const sortedTaskList = useMemo(() => [...taskList].sort((a, b) => {
  if (sortOption === 'Date') return asc ? a.date - b.date : b.date - a.date;
  else {
    const _a = getPriorityLevel(a.priority);
    const _b = getPriorityLevel(b.priority);
    return asc ? _a - _b : _b - _a;
  }
}), [taskList, sortOption, asc])

return sortedTaskList

}