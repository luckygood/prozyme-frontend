import { useProjectStore } from "@/stores/project";

export function useProjects() {
  return useProjectStore();
}