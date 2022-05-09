import { Response, Request } from 'express';
import { COOKIE } from '../constans/cookie';
import { authService } from '../srvices/authService';

class AuthController {
    public async registration(req:Request, res:Response) {
        const data = await authService.registration(req.body);
        res.cookie(
            COOKIE.nameRefreshToken,
            data.refreshToken,
            { maxAge: COOKIE.maxAgeRefreshToken, httpOnly: true },
        );
        return res.json(data);
    }

    public async logout(req:Request, res:Response):Promise<Response<string>> {
        console.log(req.get('cookie'));
        console.log(req.get('AUTHORIZATION'));
        return res.json('ok');

    }
}

export const authController = new AuthController();
