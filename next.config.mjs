/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Статический экспорт для обычного хостинга
  output: 'export',
  trailingSlash: true,
  // Отключаем source maps из-за кириллицы в пути
  productionBrowserSourceMaps: false,
}

export default nextConfig
