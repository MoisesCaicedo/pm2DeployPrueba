import { config } from 'dotenv'

if (process.env.NODE_ENV !== "production") {
    const result = config({ path: `${process.env.NODE_ENV ? process.env.NODE_ENV : ""}.env` })
    result.error ? process.exit(1) : console.log("Enviroment config..!")
}

const CONFIG = {
    PORT: process.env.NODE_PORT,
    ENV: process.env.NODE_ENV
}
console.log({ CONFIG })
export { CONFIG }