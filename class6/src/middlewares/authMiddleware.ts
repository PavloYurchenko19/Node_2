import { NextFunction, Request, Response } from 'express';
import { tokenService } from '../srvices/tokeService';
import { userService } from '../srvices/userService';

class AuthMiddleware {
    public async checkAccessToken(req:Request, res:Response, next:NextFunction) {
        const authToken = req.get('Authorization');
        if (!authToken) {
            throw new Error('no token');
        }
        const { userEmail } = tokenService.verifyToken(authToken);

        const userFromToken = await userService.getUserByEmail(userEmail);
    }
}

export const authMiddleware = new AuthMiddleware();
