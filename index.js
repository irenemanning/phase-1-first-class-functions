function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function AnamedFunction() {}
}

function returnsAnAnonymousFunction() {
    return function() {};
}