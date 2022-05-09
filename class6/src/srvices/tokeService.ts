import jwt from 'jsonwebtoken';
import { IToken } from '../entity/Token';
import { tokenRepository } from '../repositories/Tokens/TokenRepository';

class TokeService {
    public async generateTokenPair(payload: any):
        Promise<{ accessToken: string, refreshToken: string }> {
        const accessToken = jwt.sign(payload, 'pavlo', { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, 'pavlo', { expiresIn: '1d' });

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
}

export const tokenService = new TokeService();
