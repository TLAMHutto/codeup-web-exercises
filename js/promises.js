const gitApiKey ='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';
const gitApiUrl = 'https://api.github.com/';
let userName = 'TLAMHutto';
const GitUserUrl = `https://api.github.com/users/${userName}/events/public`;
function lastGitPush(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': "gitApiKey"}})
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
lastGitPush(userName)
//function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));