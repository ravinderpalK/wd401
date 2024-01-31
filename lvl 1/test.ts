const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${API_ENDPOINT}/organisations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword }),
    });

    if (!res.ok) {
      throw new Error(`Sign-up failed with status ${res.status}`);
    }
    console.log('Sign-up successful');

    let { token, user } = await res.json();
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(user));
    navigate("/dashboard");
  } catch (err) {
    console.error('Sign-up failed:', err);
  }
};