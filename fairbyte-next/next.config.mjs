/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // <- tells Next to spit out static files
  images: { unoptimized: true } // <- needed for next/image when exporting
}
export default nextConfig
