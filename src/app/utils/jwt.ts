import jwt from "jsonwebtoken";
export const signToken = (username: string) => {
    return jwt.sign({ username }, process.env.JWT_SECRET!);
}