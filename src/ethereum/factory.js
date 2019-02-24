import web3 from './web3';
import RecordFactory from './build/RecordFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(RecordFactory.interface),
    '0xA75573342B63dc80fbC6Bb0B10c057d0D8d568F9'
);

export default instance;