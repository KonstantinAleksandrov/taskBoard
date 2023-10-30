import { TableContext } from "../../contexts"
import { TableStore } from "../../stores"
import { FC, PropsWithChildren} from "react"

const TableStoreProvider: FC<PropsWithChildren<{}>> = ({children}) => {
    const table = new TableStore()

    return (
        <TableContext.Provider value={table}>{children}</TableContext.Provider>
    )
}

export default TableStoreProvider