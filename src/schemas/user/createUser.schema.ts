import * as yup from 'yup';
import { hashSync } from 'bcrypt';

const createUserSchema = yup.object().shape({
  isAdm: yup.boolean().required(),
  password: yup.string().transform((password) => hashSync(password, 10)).required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
});

export default createUserSchema;
