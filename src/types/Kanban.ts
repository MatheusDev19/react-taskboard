interface Kanban {
  columns: KanbanColumn[];
}

interface KanbanColumn {
  id: string;
  name: string;
  tasks: KanbanTask[];
}

interface KanbanTask {
  id: string;
  description: string;
  status: string;
  responsible: string;
  labels: string[];
}

export type { KanbanColumn, KanbanTask, Kanban };
