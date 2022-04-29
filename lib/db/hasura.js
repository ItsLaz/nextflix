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

const operationsDoc = `
    query MyQuery{
        users(where: {issuer: {_eq: "did:ethr:0x7073006460cBE7ad836f6eD0c8faA287ce2356Fb"}}){
            email
            id
            issuer
        }
    }
`;

function fetchMyQuery() {
    return fetchGraphQL(
        operationsDoc,
        "MyQuery",
        {},
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweDcwNzMwMDY0NjBjQkU3YWQ4MzZmNmVEMGM4ZmFBMjg3Y2UyMzU2RmIiLCJwdWJsaWNBZGRyZXNzIjoiMHg3MDczMDA2NDYwY0JFN2FkODM2ZjZlRDBjOGZhQTI4N2NlMjM1NkZiIiwiZW1haWwiOiJhbmRyZXdsYXphODA5QGdtYWlsLmNvbSIsIm9hdXRoUHJvdmlkZXIiOm51bGwsInBob25lTnVtYmVyIjpudWxsLCJpYXQiOjE2NTEyNDcyNDIsImV4cCI6MTY1MzgzOTI0MiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImRpZDpldGhyOjB4NzA3MzAwNjQ2MGNCRTdhZDgzNmY2ZUQwYzhmYUEyODdjZTIzNTZGYiJ9fQ.rEqmsPi-M7N5Te2IxM7s8L7vSmL44Z5Tc6us1qiBH0Q"
    );
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

startFetchMyQuery();
