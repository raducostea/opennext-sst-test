/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
       return  [{
           source: '/rewrite',
           destination: '/test?search=test',
       }];
    }
};

export default nextConfig;
