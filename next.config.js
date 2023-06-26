/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GOOGLE_CLIENT_ID : '301846475186-o25o75ifa7fp1igm02nf7285d8mjtg5o.apps.googleusercontent.com',
        GOOGLE_ID_SECRET : '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',
        NEXTAUTH_SECRET:'my_ultra_secure_nextauth_secret',
        NEXTAUTH_URL:'http://localhost:3000'
    }
}
module.exports = nextConfig
