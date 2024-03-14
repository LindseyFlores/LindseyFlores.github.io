// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /users/{LindseyFlores}/repos', {
    username: 'LindseyFlores',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })