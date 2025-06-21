const { error } = require('winston');
const { AirplaneRepository } =  require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
  try{
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch(data){
    throw error;
  }
}

module.exports = {
  createAirplane
}