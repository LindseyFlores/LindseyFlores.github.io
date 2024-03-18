const usernameInput = document.getElementById('username');
const fetchButton = document.getElementById('fetchRepos');
const repoContainer = document.getElementById('repoContainer');

// Async function to fetch repositories for the GitHub username entered in the search
async function fetchRepositories() {
    const username = usernameInput.value.trim(); // Get the username from the input field
    if (!username) {
        alert("Must enter a GitHub username to search for their repositories");
        return; 
    }
    
    const apiUrl = `https://api.github.com/users/${username}/repos`; // Constructing the GitHub API URL specific to that username

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json(); // Parse response body as JSON
        displayRepositories(data, username); 
    } catch (error) {
        console.error('Fetching failed:', error);
        repoContainer.innerHTML = `<p> Possibly inputted the wrong username, please re-check and re-enter :) </p>`;
    }
}

// Goal: Display repository details (repo; name, description, creation date, update date, number of commits, languages, watchers) we got in an HTML container,
async function displayRepositories(repos, username) {
    repoContainer.innerHTML = ''; // Clear previous content
    for (const repo of repos) { //js for of loop to iterate through each repo
        const repoElement = document.createElement('div'); // Create a div element to hold the repo details
        repoElement.className = 'repo';

        // Fetch commit count for each repo
        const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`;
        let commitCount;
        try {
            const commitsResponse = await fetch(commitsUrl);
            const commitsData = await commitsResponse.json();
            commitCount = commitsData.length;
        } catch (error) {
            commitCount = 'Whoops there was an error';
        }

        repoElement.innerHTML = `
            <div id = "image">
            <img class="githubLogo",src="images/thegithublogo.png" >
            <div class="repoName">
                <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
            </div>
            </div>
            
            <div class="repoDescription">
                <p>${repo.description || 'No description available'}</p>
            </div>
            <div class="repoFoot">
                <span>Created on: <b>${new Date(repo.created_at).toLocaleDateString()}</b></span>
                <span>Updated on: <b>${new Date(repo.updated_at).toLocaleDateString()}</b></span>
                <span>Commits: <b>${commitCount}</b></span>
                <span>Languages: <b>${repo.language ||  'Not specified'}</b></span>
                <span>Watchers: <b>${repo.watchers_count}</b></span>
            </div>
        `;
        repoContainer.appendChild(repoElement);
    }
}

// Event listener to fetch repositories on button click
fetchButton.addEventListener('click', fetchRepositories);
