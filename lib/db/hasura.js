export async function isNewUser(token, issuer) {
    const operationsDoc = `
    query isNewUser($issuer: String!){
        users(where: {issuer: {_eq: $issuer}}){
            email
            id
            issuer
        }
    }
`;

    const res = await fetchGraphQL(
        operationsDoc,
        "isNewUser",
        {
            issuer,
        },
        token
    );

    return res?.data?.users?.length === 0;
}

export async function createNewUser(token, metadata) {
    const operationsDoc = `
  mutation createNewUser($issuer: String!, $email: String!, $publicAddress: String!) {
    insert_users(objects: {email: $email, issuer: $issuer, publicAddress: $publicAddress}) {
      returning {
        email
        id
        issuer
      }
    }
  }
`;
    const { issuer, email, publicAddress } = metadata;
    const res = await fetchGraphQL(
        operationsDoc,
        "createNewUser",
        {
            issuer,
            email,
            publicAddress,
        },
        token
    );

    return res;
}

export async function fetchGraphQL(
    operationsDoc,
    operationName,
    variables,
    token
) {
    const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName,
        }),
    });

    return await result.json();
}

export async function findVideoIdByUser(token, userId, videoId) {
    const operationsDoc = `
    query findVideoIdByUserId($userId: String!, $videoId: String!) {
        stats(where: {userId: {_eq: $userId}, videoId: {_eq: $videoId}}) {
          favorited
          id
          userId
          videoId
          watched
        }
      }
    `;
    const res = await fetchGraphQL(
        operationsDoc,
        "findVideoIdByUserId",
        {
            videoId,
            userId,
        },
        token
    );
    console.log({ res });
    return res;
}
