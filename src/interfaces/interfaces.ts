export interface DipMode {
  id: number;
  Nombre: string;
  Apellido: string;
  bloque: string;
  email: string;
}

export interface CantDip {
  cantidad: number;
}

export interface DipJson {
  id: number;
  Nombre: string;
  Apellido: string;
  Periodo: string;
  Oficina: string;
  email: string;
  bloque: string;
  partido: string;
  Comisiones: string;
}

export interface infoLeg {
  id: number;
  Proyecto: string;
  Fecha: string;
  Descripcion: string;
  Estado: string;
}
