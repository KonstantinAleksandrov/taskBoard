class DataService {

    constructor() {}

    saveTableData = async <T>(columns: T) => {
        window.localStorage.setItem('columnsList',JSON.stringify(columns))
    }

    getTableData = <T>(): Promise<T> => {
        return new Promise((resolve, reject)=>{
            /* setTimeout(()=>{ */
                let columnsData = window.localStorage.getItem('columnsList')

                if (columnsData) {
                    resolve(JSON.parse(columnsData))
                }else {
                    reject()
                }

          /*   },2000) */
        })
    }
}

export const dataService = new DataService()