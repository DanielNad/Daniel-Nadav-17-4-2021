export default function cToF(value, isCelsius) {
  const newValue = isCelsius ? value : value * 1.8 + 32;
  const newMetric = isCelsius ? "C" : "F";
  return `${newValue?.toFixed(2)}, ${newMetric}`;
}
