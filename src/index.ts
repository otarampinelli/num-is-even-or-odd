type evenOrOdd = {
  isEvenOrOdd: (value: number, returnAsBool?: boolean) => boolean | string;
  isEven: (value: number) => boolean;
  isOdd: (value: number) => boolean;
};

export const evenOrOdd = (): evenOrOdd => {
  return {
    isEvenOrOdd,
    isEven,
    isOdd,
  };
};

const isEvenOrOdd = (
  value: number,
  returnAsBool: boolean = false
): boolean | string => {
  const number = Math.abs(value);

  if (returnAsBool) return number % 2 === 0;

  return number % 2 === 0 ? "even" : "odd";
};

const isEven = (value: number): boolean => {
  const number = Math.abs(value);

  return number % 2 === 0;
};

const isOdd = (value: number): boolean => {
  const number = Math.abs(value);

  return number % 2 !== 0;
};
