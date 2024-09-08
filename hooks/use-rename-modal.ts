import {create} from "zustand";

const defaultValues = { id: "", title: "",};

interface IRenameModal {
    innitialValues: typeof defaultValues;
    isOpen: boolean;
    onOpen: (id:string , title:string) => void;
    onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
    innitialValues: defaultValues,
    isOpen: false,
    onOpen: (id, title) => set({ innitialValues: { id, title }, isOpen: true }),
    onClose: () => set({ isOpen: false , innitialValues: defaultValues}),
}));
