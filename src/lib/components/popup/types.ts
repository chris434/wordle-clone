export type Props={
    headerTitle: string|undefined
    headerStatus:'ok'|'bad'|undefined
    title:string|undefined
    buttonTitle:string
    subtitle:string|undefined
    open:boolean|undefined
    actionClick:()=>void
    closeClick:()=>void
}