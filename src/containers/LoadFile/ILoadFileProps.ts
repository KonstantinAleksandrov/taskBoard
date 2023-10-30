export type clearFileList = () => void
export type changeLoading = () => void
export type tempStorageSave = (file: string) => void

export interface ILoadFile {
    tempStorageSave: (file: string) => void,
    changeLoading: () => void,
    clearFileList: () => void,
    columnId: number
}

export interface ILoadFileProps {
    options: ILoadFile
}