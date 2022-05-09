import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 5000,
    TOKEN: process.env.SECRET_ACCESS_KEY,
    REFRESH_TOKEN: process.env.SECRET_REFRESH_KEY,
};
