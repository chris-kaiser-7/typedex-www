import axios from 'axios';

export const fetchCsrfToken = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/csrf-token'); // Update with your actual CSRF token endpoint
    axios.defaults.headers.common['X-CSRF-Token'] = response.data.csrf_token;
  } catch (error) {
    console.error('Failed to fetch CSRF token:', error);
  }
};