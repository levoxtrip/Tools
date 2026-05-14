export interface ToolDataT {
  category: string;
  id: string;
  title: string;
  description: string;
  information: string;
  feeling: "impulse" | "focus" | "connect" | "relax";
  durationMinutes?: number;
}
