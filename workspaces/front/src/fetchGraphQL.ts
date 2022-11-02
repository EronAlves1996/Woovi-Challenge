async function fetchGraphQL(text: string, variables: any) {
  
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch(`${import.meta.env.VITE_BE_HOST}:${import.meta.env.VITE_BE_PORT}/api`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });

    return await response.json();
  }
  
  export default fetchGraphQL;