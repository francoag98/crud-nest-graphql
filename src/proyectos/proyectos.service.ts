import { Injectable } from '@nestjs/common';
import { Proyecto } from './proyecto.entity';
import { Developer } from 'src/developers/developer.entity';

@Injectable()
export class ProyectosService {
  findAll(): Proyecto[] {
    return [
      {
        id: 1,
        nombre: 'Proyecto de Diseño de interfaces',
        descripcion: 'debe realizarse la interfaz de usuario de la app',
        devs: {
          id: 1,
          nombre: 'Jose',
          email: 'jose@gmail.com',
          rol: 'Frontend',
          proyects: 'Proyecto de Diseño de interfaces',
        },
        roles: 'Frontend',
      },
    ];
  }
}
