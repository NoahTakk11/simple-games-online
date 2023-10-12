import { create } from "zustand";

interface State {
  checkedList: string[];
  activatedItems: string[];
}

interface Actions {
  addCheckedlist: (id: string) => void;
  removeCheckedList: (id: string) => void;
}

export const useRules = create<State & Actions>((set) => ({
  checkedList: ["0"],
  activatedItems: ["0"],

  addCheckedlist: (id: string) =>
    set((state) => {
      if (!state.checkedList.includes(id)) {
        const isActivatedItem = state.activatedItems.includes(id);
        const activatedItems = isActivatedItem
          ? state.activatedItems
          : [...state.activatedItems, id];
        return {
          checkedList: [...state.checkedList, id],
          activatedItems,
        };
      }

      return state;
    }),

  removeCheckedList: (id: string) =>
    set((state) => ({
      checkedList: state.checkedList.filter((element) => element !== id),
    })),
}));
