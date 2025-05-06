
// This file is just to download and save Petar's profile image
// You can delete this file after the image is saved

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Function to download the image
async function downloadImage() {
  try {
    const response = await fetch('https://media.licdn.com/dms/image/v2/C4D03AQE9s-yc-FZspg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646934088461?e=1751500800&v=beta&t=pl1JuG6gt3m68laI2CUGa82y1IKRT6J5yHpvKZLCauI');
    const blob = await response.blob();
    
    // Create a link element to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'petar-profile.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Profile image downloaded successfully');
  } catch (error) {
    console.error('Error downloading profile image:', error);
  }
}

// Uncomment this line to download the image when needed
// downloadImage();

// Render the App
createRoot(document.getElementById('root')!).render(<App />);
