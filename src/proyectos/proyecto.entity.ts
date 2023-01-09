import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Developer } from 'src/developers/developer.entity';

export enum Status {
  EMPEZANDO,
  TERMINANDO,
  FINALIZADO,
}

@ObjectType()
export class Proyecto {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  descripcion: string;

  @Field()
  status?: Status;

  @Field({ nullable: true })
  devs?: Developer;

  @Field()
  roles: string;
}
