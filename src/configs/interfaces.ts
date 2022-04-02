type ExpiresIn = string | number;

interface TokenTypes {
  secretKey: string;
  expiresIn: ExpiresIn
};

export {
  TokenTypes,
}
