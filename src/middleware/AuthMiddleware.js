module.exports = (req, res, next) => {
    console.log('i am middleware');
    next();
}