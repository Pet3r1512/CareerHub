// utils/auth.ts

import { sign } from 'jsonwebtoken';
import { verify, JsonWebTokenError } from 'jsonwebtoken';

export const generateToken = (userId: string): string => {
    const jwtSecret = process.env.JWT_SECRET || 'defaultSecret'; // Use your own default value if needed

    return sign({ userId }, jwtSecret, { expiresIn: '1h' });
};


// utils/auth.ts


interface DecodedToken {
    userId: string;
}

export const verifyToken = (token: string): string | null => {
    try {
        const jwtSecret = process.env.JWT_SECRET || 'defaultSecret'; // Use your own default value if needed
        const decoded = verify(token, jwtSecret) as DecodedToken;
        return decoded.userId;
    } catch (error) {
        if (error instanceof JsonWebTokenError) {
            return null; // Token is invalid or expired
        }
        // Other errors, handle as needed
        throw error;
    }
};
