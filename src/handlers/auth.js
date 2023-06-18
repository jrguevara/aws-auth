import jwt from 'jsonwebtoken';

/* De forma predeterminada, las autorizaciones de API Gateway se almacenan en caché (TTL) durante 300 segundos.
Esta política autorizará todas las solicitudes a la misma instancia de API Gateway de donde proviene la solicitud, 
siendo así eficiente y optimizando costos. */

const generatePolicy = (principalId, methodArn) => {
    const apiGatewayWildcard = methodArn.split('/', 2).join('/') + '/*';

    return {
        principalId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: 'Allow',
                    Resource: apiGatewayWildcard,
                },
            ],
        },
    };
};

export async function handler(event, context) {
    if (!event.authorizationToken) {
        throw 'Unauthorized';
    }

    const token = event.authorizationToken.replace('Bearer ', '');

    try {
        const claims = jwt.verify(token, process.env.AUTH0_PUBLIC_KEY);
        const policy = generatePolicy(claims.sub, event.methodArn);

        return {
            ...policy,
            context: claims
        };
    } catch (error) {
        console.log(error);
        throw 'Unauthorized';
    }
};