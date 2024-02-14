import { hasAddress, isAdult } from './validators/user.validators';
import { user } from './data/user.data';

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`);
console.log(`and has${hasAddress(user) ? '' : ' no'} address`);
