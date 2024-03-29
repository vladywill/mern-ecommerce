import * as dotenv from 'dotenv';
dotenv.config();
import twilio from 'twilio';
import { logger } from '../utils/logger.js';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken)

const optionsWpp = {
    body: 'Hola soy un WSP desde Node.js!',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5493425400184'
} 

async function sendSMS() {
    try {
        const message = await client.messages.create(optionsWpp);
        logger.debug("SMS sent: ", message);
     } catch (error) {
        logger.error(error);
     }
}

export default { sendSMS };