import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(dirname, "src/styles")],
    prependData: `@import "variables.scss";`,
  },
};

export default nextConfig;
