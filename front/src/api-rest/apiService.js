import axios from 'axios';

const API_URL = 'https://pmfdev.es'; // URL de tu 
// const API_URL = 'http://localhost:3000'; // URL de tu API


export const trackVisit = async (pageType) => {
  try {
    const response = await axios.put(`${API_URL}/increment-visit/${pageType}`);
    return response.data;
  } catch (error) {
    console.error('Error al hacer la llamada a la API:', error);
    throw error;
  }
};

export const sendMessage = async (email, message) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, {
      email,
      content: message
    });
    return response.data;
  } catch (error) {
    console.error('Error al hacer la llamada a la API:', error);
    throw error;
  }
}



