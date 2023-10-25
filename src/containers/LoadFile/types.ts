export interface ILoadFile {
    tempStorageSave: (file: string) => void,
    changeLoading: () => void,
    clearFileList: () => void
}

export interface ILoadFileProps {
    options: ILoadFile
}

export type clearFileList = () => void
export type changeLoading = () => void
export type tempStorageSave = (file: string) => void