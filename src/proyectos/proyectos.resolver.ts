import { Query, Resolver } from '@nestjs/graphql';
import { ProyectosService } from './proyectos.service';
import { Proyecto } from './proyecto.entity';

@Resolver()
export class ProyectosResolver {
  constructor(private proyectosService: ProyectosService) {}

  @Query((returns) => [Proyecto])
  proyecto() {
    return this.proyectosService.findAll();
  }
}
