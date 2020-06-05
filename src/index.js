import { defaultValue } from './module';
console.log(process.env.DB_HOST);
export default function () {
  return defaultValue;
}
