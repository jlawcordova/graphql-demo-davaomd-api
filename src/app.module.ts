import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { ServicesModule } from './common/services/services.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    DoctorModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
