/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'trello-attachments.s3.amazonaws.com'],
      },
    env:{
      MANG_API_URL: 'http://127.0.0.1:8000/api/v1',
      MANGSLR_API_KEY : 'c8969d01f7da109939c6d49b32b60996'
    }
}
module.exports = nextConfig
