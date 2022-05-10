import { getManager, UpdateResult } from 'typeorm';
import { IToken, Token } from '../../entity/Token';

class TokenRepository {
    public async createToken(token:any):Promise<IToken> {
        return getManager().getRepository(Token).save(token);
    }

    public async fideToken(userId:number):Promise<IToken | undefined> {
        return getManager().getRepository(Token).findOne({ userId });
    }

    public async deleteUserTokenPair(userId:number):Promise<UpdateResult> {
        return getManager().getRepository(Token).softDelete({ userId });
    }
}

export const tokenRepository = new TokenRepository();
