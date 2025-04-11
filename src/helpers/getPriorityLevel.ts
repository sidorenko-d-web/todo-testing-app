import { TypeTaskPriority } from "../types";

export const getPriorityLevel = (priority: TypeTaskPriority) => {
  return priority === 'high' ? 3 : priority === 'low' ? 1 : 2;
};