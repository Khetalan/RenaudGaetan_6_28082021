const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.secretToken);
      const userId = decodedToken.userId;

      if (req.body.userId && req.body.userId !== userId) {
        return res.status(401).json({ message: "Cet email n'existe pas" });
      } else {
        next();
      }
    } catch {
      res.status(401).json({ error: new Error('Requête non Authentifiée !' )});
    }
};