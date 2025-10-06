import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { UserModule } from './users/user.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // HTTP server (endpoints)
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
  console.log('🔸 HTTP server running on http://localhost:3000');

  // Microservice TCP (independiente) — escucha paralela en puerto 4001
  const microApp = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.TCP,
    options: { port: 4001 },
  });
  await microApp.listen();
  console.log('🔹 TCP microservice running on port 4001');
}
bootstrap();
