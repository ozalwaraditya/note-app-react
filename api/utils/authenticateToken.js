import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }

        console.log("Decoded User:", decodedUser); // ✅ Debugging step

        req.user = decodedUser; // Store user info in `req.user`
        next();
    });
};
