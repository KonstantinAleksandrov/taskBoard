import { createContext } from "react";
import { tableStore } from "../stores";

export const TableContext = createContext({} as typeof tableStore)