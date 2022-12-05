export const mask = (value: string) => {
  const masked = value.slice(0, 7).replace(/[0-9]/g, "*");
  const final = masked + value.slice(7);
  return final;
};
