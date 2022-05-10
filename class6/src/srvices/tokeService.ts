import jwt, { JwtPayload } from 'jsonwebtoken';
import { IToken } from '../entity/Token';
import { tokenRepository } from '../repositories/Tokens/TokenRepository';
import { config } from '../config/config';

class TokeService {
    public async generateTokenPair(payload: any):
        Promise<{ accessToken: string, refreshToken: string }> {
        const accessToken = jwt.sign(payload, config.TOKEN as string, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, config.REFRESH_TOKEN as string, { expiresIn: '1d' });

        return {
            accessToken,
            refreshToken,
        };
    }

    public async saveToken(userId: number, refreshToken:string):Promise<IToken> {
        const tokenFromDb = await tokenRepository.fideToken(userId);
        if (tokenFromDb) {
            tokenFromDb.refreshToken = refreshToken;
            return tokenRepository.createToken(tokenFromDb);
        }

        const token = await tokenRepository.createToken({ refreshToken, userId });
        return token;
    }

    public async deleteUserTokenPair(userId:number) {
        return tokenRepository.deleteUserTokenPair(userId);
    }

    verifyToken(authToken:string, tokenType:string = 'access'):string | JwtPayload {
        let secretWord = config.TOKEN;
        if (secretWord === 'refresh') {
            secretWord = config.REFRESH_TOKEN;
        }
        return jwt.verify(authToken, secretWord as string);
    }
}

export const tokenService = new TokeService();
