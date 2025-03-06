exports.notFound = (req, res) => {
    req.status(404);
    res.send({
        error: `Not found ${req.originalURL}`,
    });
};
