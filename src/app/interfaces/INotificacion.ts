export interface INotificacion{
    titulo: string
    mensaje: string
    tipoNotificacion: "Error" | "Correcto" | "Informacion" | "Advertencia"
}