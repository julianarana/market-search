export const formatPrice = (value: number): [string, string] => {
  const splitted = value.toLocaleString('es').split(',');
  return [splitted[0], splitted[1] || '00'];
};
