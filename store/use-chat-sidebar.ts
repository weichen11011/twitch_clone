import { create } from "zustand";

export enum ChatVariant{
    CHAT = "CHAT",
    COMMUNITY = "COMMUNITY"
}

interface ChatSiderbarStore {
    collapsed:boolean;
    variant:ChatVariant
    onExpand: () => void;
    onCollapse: () => void;
    onChangeVariant: (variant: ChatVariant) => void
}

export const useChatSiderbar = create<ChatSiderbarStore>((set) => ({
    collapsed:false,
    variant:ChatVariant.CHAT,
    onExpand : () => set(() => ({ collapsed: false})),
    onCollapse: () => set(() => ({ collapsed:true})),
    onChangeVariant:(variant:ChatVariant) => set(() => ({variant})) 
}));