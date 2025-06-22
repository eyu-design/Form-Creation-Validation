// Step 1: Define async function
async function fetchUserData() {
  // Step 2: Define API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Get the data container
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch data from API
    const response = await fetch(apiUrl);

    // Step 5: Convert response to JSON
    const users = await response.json();

    // Step 6: Clear "Loading user data..." message
    dataContainer.innerHTML = '';

    // Step 7: Create a list of users
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append list to container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 9: Handle errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// Step 10: Run after DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
