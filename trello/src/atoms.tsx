import { atom } from "recoil";

interface IToDoState {
    [key: string]: string[];
}
export interface ITodo {
    id: number;
    text: string;
}
export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [],
        Doing: [],
        Done: [],
    },
});
