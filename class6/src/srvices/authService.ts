import { userService } from './userService';
import { IUser } from '../entity/User';
import { tokenService } from './tokeService';

class AuthService {
    public async registration(body: IUser) {
        const { email } = body;
        const userFromBd = await userService.getUserByEmail(email);
        if (userFromBd) {
            throw new Error(`user with ${email} is exists`);
        }

        const createUser = await userService.createUser(body);
        return this._getTokenData(createUser);
    }

    private async _getTokenData(userData: IUser) {
        const { id, email } = userData;
        const tokensPair = await tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService.saveToken(id, tokensPair.refreshToken);
        return {
            ...tokensPair,
            userId: id,
            userEmail: email,
        };
    }
}

export const authService = new AuthService();
