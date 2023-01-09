import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Proyecto } from 'src/proyectos/proyecto.entity';

@ObjectType()
export class Developer {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  email: string;

  @Field()
  rol: string;

  @Field()
  proyects?: string;
}
