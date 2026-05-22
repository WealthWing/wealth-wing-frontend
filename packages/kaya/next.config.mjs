const nextConfig = {
	compiler: {
		emotion: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	transpilePackages: ['@wealth-wing/tayo']
};

export default nextConfig;
