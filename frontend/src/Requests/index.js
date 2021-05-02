export const fetchLocation =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:2818";

export const getImg = async (url) => {
  const result = await fetch(`${fetchLocation}/api/snapshot`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
    }),
  });

  const text = await result.text();

  if (result.status !== 200 && result.status !== 201) {
    return text;
  }
  console.log(text);

  return { success: true, value: text }
};