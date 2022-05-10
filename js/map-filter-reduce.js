const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
]
//use filter to return an array of users who have more than 2 languages
const moreThanTwoLanguages = users.filter(user => user.languages.length >= 3);
console.log(moreThanTwoLanguages);
//use .map to return an array of user's emails
const emails = users.map(user => user.email);
console.log(emails);
//use .reduce to return the total years of experience from the list of users
const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(totalYears);
//use .reduce to return the longest email from the list of users
const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    }
    return longest;
}
, "");
console.log(longestEmail);
//use .reduce to return the list of user's names in a single string
const names = users.reduce((names, user) => names + user.name + ", ", "");
console.log(names);
//use .reduce to return the list of user's languages in a single string
//dont duplicate languages
const languages = users.reduce((languages, user) => {
    user.languages.forEach(language => {
        if (!languages.includes(language)) {
            languages.push(language);
        }
    }
    );
    return languages;
}
, []);
console.log(languages);