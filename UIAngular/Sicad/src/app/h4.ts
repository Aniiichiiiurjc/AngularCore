//añadimos extends Record<string, any> para poder acceder a los atributos mediante una varible string
export interface H4 extends Record<string, any>{
    id: number;
    ncage: string;
    name: string;
}
