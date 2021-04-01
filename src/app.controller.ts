import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('zaba')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  sayHello(@Res() res: Response): any {
    return res.json(this.appService.getHello());
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `id = ${id}`;
  }
}
