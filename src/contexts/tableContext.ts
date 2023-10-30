import { createContext } from "react";
import { ITableStore } from '../types/ITableStore';

export const TableContext = createContext({} as ITableStore)