export const createHygraphClient = (url: string, token: string) => {
  const query = async (query: string, variables: unknown = null) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    return res.json();
  };

  return { query };
};
