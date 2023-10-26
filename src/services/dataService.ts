import tableStore from "../store/tableStore"

export const saveTableData = () => {
    window.localStorage.setItem('columnsList',JSON.stringify(tableStore.columns))
}

export const getTableData = () => {
    let columnsData = window.localStorage.getItem('columnsList')
    if (columnsData) {
        return JSON.parse(columnsData)
    }
}