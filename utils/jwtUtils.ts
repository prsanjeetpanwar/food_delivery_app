import jwt from 'jsonwebtoken';

export const GenerateToken = (payload: any) => {
    return jwt.sign(payload, 'secretkey',
        { algorithm: 'HS256', 
            expiresIn: '5d'
        }
    );
}