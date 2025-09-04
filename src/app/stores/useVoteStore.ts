// stores/useVoteStore.ts
import { create } from "zustand";

type State = {
  title: string;
  ballots: string[];
  setTitle: (t: string) => void;
  setBallots: (b: string[]) => void;
};

export const useVoteStore = create<State>((set) => ({
  title: "",
  ballots: ["", ""],
  setTitle: (title) => set({ title }),
  setBallots: (ballots) => set({ ballots }),
}));
