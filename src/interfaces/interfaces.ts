export interface CantDip {
  cantidad: number;
}

export interface DipJson {
  id: number;
  nombre: string;
  apellido: string;
  Periodo: string;
  Oficina: string;
  email: string;
  bloque: string;
  partido: string;
  Comisiones?: string;
}

export interface infoLeg {
  id: number;
  Proyecto: string;
  Fecha: string;
  Descripcion: string;
  Estado: string;
}
