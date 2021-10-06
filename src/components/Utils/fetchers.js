export const fetchAndCompareEmail = async (emailToCompare) => {
  const data = await fetch(
    `https://gul-e-shaoor-default-rtdb.firebaseio.com/Organizations.json?orderBy="email"&equalTo="${emailToCompare}"`
  );
  const result = await data.json();
  return result;
};
export const getTypeFromEmail = async (emailToCompare) => {
  const url = `https://gul-e-shaoor-default-rtdb.firebaseio.com/Users.json?orderBy="email"&equalTo="${emailToCompare}"`;
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
