// Useing camelCase for variable names and adding event type.
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    // Assign the payload to a variable
    const payload = { name: organisationName, user_name: userName, email: userEmail, password: userPassword };

    // change the variable name to response for a better way to follow coding standards.
    const response = await fetch(`${API_ENDPOINT}/organisations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Sign-up failed with status ${response.status}`);
    }

    console.log('Sign-up successful');

    // Use const for variable names and do not use destructuring for the response.
    const data = await response.json();

    localStorage.setItem(authTokenKey, data.token);
    localStorage.setItem(userDataKey, JSON.stringify(data.user));

    navigate("/dashboard");
    // change the variable name to error to follow coding standards.
  } catch (error) {
    console.error('Sign-up failed:', error);
  }
};