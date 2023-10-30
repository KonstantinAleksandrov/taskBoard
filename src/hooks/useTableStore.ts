import { useContext } from "react"
import { TableContext } from "../contexts"

export const useTableStore = () => {
    const context = useContext(TableContext)
    return context
} 