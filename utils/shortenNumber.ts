export const shortenNumber = (number: number) => {
  if (number > 1000000000000) {
    return `${(number / 1000000000000).toFixed(1)}T`;
  }
  if (number > 1000000000) {
    return `${(number / 1000000000).toFixed(1)}B`;
  }
  if (number > 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (number > 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return number.toString();
  }
};
