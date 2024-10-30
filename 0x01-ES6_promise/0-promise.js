export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('API response successful!');
      } else {
        reject(new Error('API response failed.'));
      }
    }, 1000);
  });
}
