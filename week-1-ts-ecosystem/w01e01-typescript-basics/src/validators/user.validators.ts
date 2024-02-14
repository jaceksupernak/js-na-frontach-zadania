import { User } from '../models/User';

function hasAddress(user: User): boolean {
  return Boolean(user.address);
}

function hasGivenAge(requiredAge: number) {
  return (user: User): boolean => user.age >= requiredAge;
}

const isAdult = hasGivenAge(18);

export { hasAddress, hasGivenAge, isAdult };
