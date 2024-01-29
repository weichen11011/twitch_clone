import { create } from "zustand";

interface SiderbarStore {
    collapsed:boolean;
    onExpand: () => void;
    onCollapse: () => void;
}

export const useSiderbar = create<SiderbarStore>((set) => ({
    collapsed:false,
    onExpand : () => set(() => ({ collapsed: false})),
    onCollapse: () => set(() => ({ collapsed:true})),
}));