import * as env from 'dotenv'
env.config()
import { NestFactory, FastifyAdapter } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())
  await app.listen(process.env.PORT || 3000)
}

bootstrap()
