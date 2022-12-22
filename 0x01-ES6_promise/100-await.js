import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const o = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    o.photo = photo;
    o.user = user;
  } catch (err) {
    o.photo = null;
    o.user = null;
  }
  return o;
}
