import { Box } from "@mui/material";
import styles from "./kanban.module.css";
import { KanbanColumn, Kanban as KanbanType } from "../../types/Kanban";
import Column from "./components/Column";
import { kanbanMock } from "./kanbanMock";
import { useEffect, useState } from "react";
import { useGetSlug } from "../../hooks/use-get-slug";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Task from "./components/Task";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function Kanban() {
  const slug = useGetSlug();
  const [columns, setColumns] = useState<KanbanColumn[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const fetchKanban = () => {
      const kanban: KanbanType | undefined = kanbanMock.find((kanban) => kanban.slug === slug);
      if (!kanban) return;
      setColumns(kanban.columns);
    };
    fetchKanban();
  }, [slug]);

  const findTaskLocation = (taskId: string) => {
    for (let colIdx = 0; colIdx < columns.length; colIdx++) {
      const taskIdx = columns[colIdx].tasks.findIndex((t) => t.id === taskId);
      if (taskIdx !== -1) return { colIdx, taskIdx };
    }

    return null;
  };

  const handleDragStart = (e: any) => {
    setActiveTaskId((prev) => (prev ? prev : e.active.id));
  };

  const handleDragEnd = (e: any) => {
    setActiveTaskId(null);
    const { active, over } = e;
    if (!over || active.id === over.id) return;

    if (activeTaskId && activeTaskId !== active.id) return;

    const from = findTaskLocation(String(active.id));
    if (!from) return;

    const toTask = findTaskLocation(String(over.id));
    if (toTask) {
      if (from.colIdx === toTask.colIdx) {
        setColumns((prev) => {
          const newColumns = [...prev];
          const tasks = [...newColumns[from.colIdx].tasks];
          const moved = tasks.splice(from.taskIdx, 1)[0];
          tasks.splice(toTask.taskIdx, 0, moved);
          newColumns[from.colIdx] = { ...newColumns[from.colIdx], tasks };
          return newColumns;
        });
      } else {
        setColumns((prev) => {
          const newColumns = [...prev];
          const fromTasks = [...newColumns[from.colIdx].tasks];
          const toTasks = [...newColumns[toTask.colIdx].tasks];
          const [moved] = fromTasks.splice(from.taskIdx, 1);
          toTasks.splice(toTask.taskIdx, 0, moved);
          newColumns[from.colIdx] = { ...newColumns[from.colIdx], tasks: fromTasks };
          newColumns[toTask.colIdx] = { ...newColumns[toTask.colIdx], tasks: toTasks };
          return newColumns;
        });
      }
      return;
    }

    const toColIdx = columns.findIndex((col) => col.id === over.id);
    if (toColIdx !== -1 && from.colIdx !== toColIdx) {
      setColumns((prev) => {
        const newColumns = [...prev];
        const fromTasks = [...newColumns[from.colIdx].tasks];
        const toTasks = [...newColumns[toColIdx].tasks];
        const [moved] = fromTasks.splice(from.taskIdx, 1);
        toTasks.push(moved);
        newColumns[from.colIdx] = { ...newColumns[from.colIdx], tasks: fromTasks };
        newColumns[toColIdx] = { ...newColumns[toColIdx], tasks: toTasks };
        return newColumns;
      });
    }
  };

  const activeTask = activeTaskId
    ? columns.flatMap((col) => col.tasks).find((t) => t.id === activeTaskId)
    : null;

  return (
    <Box className={styles["wrapper"]}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
        {columns.map((column) => (
          <Column key={column.name} column={column} tasks={column.tasks} />
        ))}
        <DragOverlay>{activeTask ? <Task task={activeTask} /> : null}</DragOverlay>
      </DndContext>
    </Box>
  );
}
