import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('kkjhkjhjh');
  //   const authorization = req.headers['authorization'];
  //   if(!authorization)
  //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);


  //   if (authorization === 'azerty') 
  //   next();

  //   else
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
