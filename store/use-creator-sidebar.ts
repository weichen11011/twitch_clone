import { create } from "zustand";

interface CreatorSiderbarStore {
    collapsed:boolean;
    onExpand: () => void;
    onCollapse: () => void;
}

export const useCreatorSiderbar = create<CreatorSiderbarStore>((set) => ({
    collapsed:false,
    onExpand : () => set(() => ({ collapsed: false})),
    onCollapse: () => set(() => ({ collapsed:true})),
}));