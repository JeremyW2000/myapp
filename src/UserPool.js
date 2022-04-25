import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "ap-southeast-2_3lLmSsU5Z",
    ClientId: "12jg57utcks7tfctqf374fhqk7"
}

export default new CognitoUserPool(poolData);