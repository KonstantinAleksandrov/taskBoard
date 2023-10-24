import { clearFileList, changeLoading,tempStorageSave} from './types'

export const inputHandler = (e: React.ChangeEvent, clearFileList: clearFileList, changeLoading: changeLoading, tempStorageSave: tempStorageSave) =>  {
    clearFileList()
    const input = e.target as HTMLInputElement
    if(input.files) {
        changeLoading()
        const file = input.files[0] 
        const reader = new FileReader();
        
        reader.onload = (e) => {
            if(e.target && e.target.result) {
                const result = e.target.result
                setTimeout(()=>{
                    changeLoading()
                    tempStorageSave(result as string)
                },5 * 1000)
            }
        }

        reader.readAsDataURL(file);
    }
}
