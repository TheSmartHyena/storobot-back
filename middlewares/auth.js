const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const result = await jwt.verify(token, "longer-secret-is-better");
        console.log(result);
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" });
    }
};
