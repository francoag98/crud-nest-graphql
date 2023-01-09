import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosResolver } from './proyectos.resolver';

@Module({
  providers: [ProyectosService, ProyectosResolver],
})
export class ProyectosModule {}
