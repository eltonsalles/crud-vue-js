const isCNPJ = (cnpj) => {
  if (cnpj === null) return false;

  const value = cnpj.toString().replace(/\D/g, '');

  if (value.length !== 14) return false;

  for (let i = 0; i < 10; i += 1) {
    const pattern = new RegExp(i.toString().repeat(14));
    if (pattern.test(value)) return false;
  }

  let digit1;
  let digit2;

  digit1 = (5 * value[0]) + (4 * value[1]) + (3 * value[2]) + (2 * value[3]);
  digit1 += (9 * value[4]) + (8 * value[5]) + (7 * value[6]) + (6 * value[7]);
  digit1 += (5 * value[8]) + (4 * value[9]) + (3 * value[10]) + (2 * value[11]);
  digit1 = 11 - (digit1 % 11);

  if (digit1 >= 10) digit1 = 0;

  digit2 = (6 * value[0]) + (5 * value[1]) + (4 * value[2]) + (3 * value[3]);
  digit2 += (2 * value[4]) + (9 * value[5]) + (8 * value[6]) + (7 * value[7]);
  digit2 += (6 * value[8]) + (5 * value[9]) + (4 * value[10]) + (3 * value[11]);
  digit2 += (2 * value[12]);
  digit2 = 11 - (digit2 % 11);

  if (digit2 >= 10) digit2 = 0;

  return digit1 === parseInt(value[12], 10) && digit2 === parseInt(value[13], 10);
};

export default isCNPJ;
