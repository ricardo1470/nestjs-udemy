import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return "Hello World\nesto es un test \n";
    }
}

@Module({
    controllers: [AppController],
})

class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(9000);
    console.log("Application is running on: ", await app.getUrl());
}

bootstrap();
