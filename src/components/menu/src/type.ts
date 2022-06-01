export interface menuItem{
    icon?:string,
    i?:any,
    name:string,
    index:string,
    // 导航的子菜单
    children?: menuItem[]
}