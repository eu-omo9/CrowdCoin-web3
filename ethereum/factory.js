import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xFfa20E179185773F7Cc997b5754e610c9dD7a078'
);

export default instance;