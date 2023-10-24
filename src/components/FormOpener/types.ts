interface IFormOpener {
    title: string,
    toggleHandler: ()=> void
}

export interface IFormOpenerProps {
    options: IFormOpener
}