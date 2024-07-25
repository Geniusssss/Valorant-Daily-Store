const responseHandler = (res, statusCode, data = null) => {
    if (statusCode === 200) {
        res.status(statusCode).json(data);
    } else if (statusCode >= 400) {
        res.status(statusCode).json({ message: data.message });
    }
};

export default responseHandler;