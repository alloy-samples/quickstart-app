export const mask = (value?: string) => {
  if (!value) {
    return value;
  }
  const masked = value.slice(0, 7).replace(/[0-9]/g, "*");
  const final = masked + value.slice(7);
  return final;
};

export const format = (value?: string) => {
  if (!value) {
    return value;
  }
  value = value.slice(0, 11).replace(/-/g, "");
  let result = "";
  if (value.length <= 3) {
    result = value;
  }
  if (value.length > 3 && value.length <= 5) {
    result = `${value.slice(0, 3)}-${value.slice(3)}`;
  }
  if (value.length > 5) {
    result = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
  }
  return result;
};
