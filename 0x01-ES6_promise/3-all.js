import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
      return {
        photo: photoResponse,
        user: userResponse,
      };
    })
    .catch(() => {
      console.log('Signup system offline');
      return {
        photo: null,
        user: null,
      };
    });
}

export default handleProfileSignup;
