/* Awaited and Promise utils in TS */


// Promise--->Promise<T>

// Awaited<T>


type AwaitedMe=Awaited<Promise<number>> //This awaited promise Return Number type


type Awaited1=Awaited<Promise<String>> //This awaited promise return String type

type nestedAwait=Awaited<Promise<Promise<String>>>


// Union with Promise


type UnionPromise=Awaited<Promise<String|Number>>


async function fetchCount(){
    return 42 as const
}
//Thenable .then()

type countTypeAwait=Awaited<ReturnType<typeof fetchCount>>


async function fetchDetails() {
    return Promise.all([Promise.resolve(24 as const),Promise.resolve("Ben And Jack")]as const)
    
}


type PromiseWithAlltype=Awaited<ReturnType<typeof fetchDetails>>
