module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send(
            {
                error: 'Thy shalt log in!'
            }
        );
    }
// next fires when mw done its job
    next();
};