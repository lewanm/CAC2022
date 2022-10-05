
export default function promiseHandler(promise){
    return promise.then(response => [response])
    .catch(err => [null,err])
}