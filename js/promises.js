const gitApiKey ='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';
const gitApiUrl = 'https://api.github.com/';
let userName = 'TLAMHutto';
const GitUserUrl = `https://api.github.com/users/${userName}/events/public`;
function lastGitPush(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': "gitApiKey"}})
    .then(response => console.log(response.json()))
    .then(data => console.log(Promise.PromiseResult.created_at))
    .catch(error => console.error(error));
}
lastGitPush(userName)
