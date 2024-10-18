import jwt from "jsonwebtoken"; //jwt tovchlol hiisen obegtiig nerlesen 

export const generateToken = (payload: object) => { // payload buleg bagtsiig nemj hiij bga yuma
  return jwt.sign(payload, process.env.JWT_TOKEN_PASSWORD || "", {
    expiresIn: "7d",
  });
};

export const decodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_TOKEN_PASSWORD || "");
};
