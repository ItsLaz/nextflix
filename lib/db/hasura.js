async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
        'https://above-malamute-44.hasura.app/v1/graphql',
        {
            method: 'POST',
            headers: {
                'x-hasura-admin-secret':
                    'JvQ6mwboYcSN2tj0qmx03nI6SGjX3QNyQ6IA6vd0Tk4QpfKPKhDRZsNntVPaZF54',
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: variables,
                operationName: operationName,
            }),
        }
    );

    return await result.json();
}

const operationsDoc = `
    query MyQuery {
      users {
        id
        email
        issuer
        publicAddress
      }
    }
  `;

function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, 'MyQuery', {});
}

export async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}
