function log(e) {
    console.log(e);
    console.log(e.message);
    console.log(e.stack);
}

function handleError(e) {
    if (e instanceof ReferenceError)
        log(e);
    else if (e instanceof TypeError)
        log(e);
    else
        log(e);
}

(async () => { 

    try {

        throw new ReferenceError('teste1')
        // throw new TypeError('teste2')
        // throw new Error('teste3')

    } catch(e) {
        handleError(e);
    } finally {
        console.log('resolvendo!');
    }

})();