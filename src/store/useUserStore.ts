import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
}

interface UserStore {
    user: User | null;
    isAuthenticated: boolean;
    login: (name: string, email: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    isAuthenticated: false,
    login: (name, email) => set({
        user: { id: '1', name, email },
        isAuthenticated: true
    }),
    logout: () => set({ user: null, isAuthenticated: false })
}));
