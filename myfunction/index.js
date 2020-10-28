exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Changes from Github 2!'),
    };
    return response;
    
};  
