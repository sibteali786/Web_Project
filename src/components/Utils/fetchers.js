export const fetchAndCompareEmail = async (emailToCompare) => {
  const data = await fetch(
    `https://gul-e-shaoor-default-rtdb.firebaseio.com/Organizations.json?orderBy="email"&equalTo="${emailToCompare}"`
  );
  const result = await data.json();
  return result;
};
