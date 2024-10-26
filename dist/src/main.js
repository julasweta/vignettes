"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const passport = require("passport");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.use(passport.initialize());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Vignettes')
        .setDescription('Description Project')
        .setVersion('1.0.')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT, () => {
        common_1.Logger.log(`http://${process.env.HOST}:${process.env.PORT}/api`, 'Doc');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map