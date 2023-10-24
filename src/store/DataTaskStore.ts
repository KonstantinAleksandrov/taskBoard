class DataTaskStore {
    public fileList: string[]
    public dateCreate: string
    public title: string
    constructor() {
        this.fileList = []
        this.dateCreate = ''
        this.title = ''
    }
}

export const CreateDataTaskStore = () => {
    return new DataTaskStore()
}


export default DataTaskStore