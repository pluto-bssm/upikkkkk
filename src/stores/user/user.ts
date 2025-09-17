import { create } from 'zustand';

export interface User {
  name: string;
  studentId: string;
  status: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: {
    name: '박가은',
    studentId: '2108',
    status: '재학생',
    email: 'fake_bsm_email@bssm.hs.kr',
  },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
