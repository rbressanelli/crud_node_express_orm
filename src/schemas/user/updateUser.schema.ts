import * as yup from 'yup';
import { hashSync } from 'bcrypt';

const updateUserSchema = yup.object().shape({
  password: yup.string().transform((password) => hashSync(password, 10)),
  email: yup.string().email(),
  name: yup.string(),
});

export default updateUserSchema;
