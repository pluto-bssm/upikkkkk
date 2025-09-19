import { create } from "zustand";
import { SimilarGuide } from "@/types/api";

type GuideState = {
  similarGuides: SimilarGuide[];
  setSimilarGuides: (guides: SimilarGuide[]) => void;
  resetGuides: () => void;
};

export const useGuideStore = create<GuideState>((set) => ({
  similarGuides: [],
  setSimilarGuides: (guides) => set({ similarGuides: guides }),
  resetGuides: () => set({ similarGuides: [] })
}));
