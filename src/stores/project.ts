import { create } from "zustand";
import { projectAPI, type Project } from "@/lib/api";

interface ProjectState {
  projects: Project[];
  currentProject: Project | null;
  isLoading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  createProject: (name: string, description?: string) => Promise<Project>;
  selectProject: (project: Project) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  currentProject: null,
  isLoading: false,
  error: null,

  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await projectAPI.list();
      set({ projects: response.data, isLoading: false });
    } catch (error) {
      set({ error: "获取项目列表失败", isLoading: false });
    }
  },

  createProject: async (name: string, description?: string) => {
    const response = await projectAPI.create({ name, description });
    const project = response.data;
    set({ projects: [project, ...get().projects] });
    return project;
  },

  selectProject: (project: Project) => {
    set({ currentProject: project });
  },
}));