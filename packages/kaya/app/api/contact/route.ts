// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// app/api/contact/route.ts
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
	const now = Date.now();
	const record = ipHits.get(ip);

	if (!record || record.resetAt < now) {
		ipHits.set(ip, {
			count: 1,
			resetAt: now + WINDOW_MS
		});

		return false;
	}

	record.count += 1;

	return record.count > MAX_REQUESTS;
}

export async function POST(req: Request) {
	const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

	if (isRateLimited(ip)) {
		return Response.json(
			{ error: 'Too many requests. Please try again later.' },
			{ status: 429 }
		);
	}
	try {
		const { projectScope, email, company } = await req.json();

		if (company) {
			return Response.json({ success: true });
		}

		if (!projectScope || !email) {
			return Response.json(
				{ error: 'Project scope and email are required.' },
				{ status: 400 }
			);
		}

		const { data, error } = await resend.emails.send({
			from: 'Ed Shaziman <hello@edshaziman.com>',
			to: ['erdoanshaziman@gmail.com'],
			subject: 'New System Scope Call Request',
			html: `
				<h2>New project request</h2>
				<p><strong>Project scope / goals:</strong></p>
				<p>${projectScope}</p>
				<p><strong>Reply-to email:</strong></p>
				<p>${email}</p>
			`,
			replyTo: email
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch {
		return Response.json({ error: 'Something went wrong.' }, { status: 500 });
	}
}
