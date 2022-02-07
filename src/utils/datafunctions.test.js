import { getTime, getIco } from './data_functions';

test('gets time and sets it in hours', () => {
  expect(getTime(1644188881)).toEqual(8 + ' minutes ago');
});
