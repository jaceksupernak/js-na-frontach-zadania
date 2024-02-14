import { hasAddress, isAdult } from './user.validators';
import { user } from './user.data';

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`);
console.log(`and has${hasAddress(user) ? '' : ' no'} address`);
