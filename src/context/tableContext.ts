import { createContext } from "react";
import tableStore from "../store/tableStore";

export const TableContext = createContext({} as typeof tableStore)