exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Changes from Github 6!'),
    };
    return response;
    
};  
