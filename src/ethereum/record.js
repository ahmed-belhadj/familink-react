import web3 from './web3';
import Record from './build/Record.json';

export default address => {
    return new web3.eth.Contract(JSON.parse(Record.interface), address);
};