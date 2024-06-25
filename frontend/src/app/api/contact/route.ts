import { NextResponse, NextRequest } from 'next/server';
import { emailTemplate } from './template';
const nodemailer = require('nodemailer');

export type FormData = { name: string; email: string; message: string; propertyId?: string };

export const POST = async (request: NextRequest) => {
	const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
	const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	const formData: FormData = await request.json();

	const name = formData.name;
	const email = formData.email;
	const propertyId = formData.propertyId;

	const transporter = nodemailer.createTransport({
		Service: 'seznam',
		auth: {
			user: username,
			pass: password,
		},
		port: 465,
		host: 'smtp.seznam.cz',
	});

	const subjectMessage =
		propertyId != null
			? `[ANDALUSIA HOME] Zájem o nemovitost [${propertyId}] od ${name} (${email})`
			: `[ANDALUSIA HOME] Dotaz od ${name} (${email})`;

	try {
		await transporter.sendMail({
			from: myEmail,
			to: myEmail,
			replyTo: email,
			subject: subjectMessage,
			html: emailTemplate(subjectMessage, formData),
		});

		return NextResponse.json({ message: 'Success: email was sent' });
	} catch (error) {
		return NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
	}
};
