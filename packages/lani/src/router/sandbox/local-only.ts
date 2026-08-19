export const isLocalSandboxHost = (host: string | undefined) => {
	let hostname: string | undefined;

	if (host?.startsWith('[')) {
		hostname = host.slice(1, host.indexOf(']'));
	} else if (host === '::1') {
		hostname = host;
	} else {
		hostname = host?.split(':')[0];
	}

	return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
};
