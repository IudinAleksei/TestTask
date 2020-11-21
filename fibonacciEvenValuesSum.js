const LIMIT = 4e+6;

const fibonacciEvenValuesSum = () => {
  if (!Number.isSafeInteger(LIMIT) || LIMIT < 1) {
    console.error('LIMIT must be finite number greater 1 and smaller 9007199254740991');
    return;
  }

  let sumOfEvenValues = 0;
  let previos = 1;
  let current = 2;

  while(current <= LIMIT) {
    if (!(current % 2)) {
      if (typeof sumOfEvenValues !== 'bigint') {
        const tempSum = sumOfEvenValues + current;
        sumOfEvenValues = tempSum < Number.MAX_SAFE_INTEGER ? tempSum : BigInt(sumOfEvenValues) + BigInt(current);
      } else {
        sumOfEvenValues += BigInt(current);
      }
    };

    const next = previos + current;
    previos = current;
    current = next;
  };

  return sumOfEvenValues;
}
