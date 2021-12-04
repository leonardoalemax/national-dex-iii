export function findByLang(array:Array<any>) {
  return array.find(item => item.language?.name === 'en');
}
