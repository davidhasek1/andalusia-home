import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

type FormData = { name: string; email: string; message: string };

export const POST = async (request: NextRequest) => {
	const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
	const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	const formData: FormData = await request.json();

	const name = formData.name;
	const email = formData.email;
	const message = formData.message;

	const transporter = nodemailer.createTransport({
		Service: 'seznam',
		auth: {
			user: username,
			pass: password,
		},
		port: 465,
		host: 'smtp.seznam.cz',
	});

	try {
		await transporter.sendMail({
			from: myEmail,
			to: myEmail,
			replyTo: email,
			subject: `Website activity from ${email}`,
			html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
		});

		return NextResponse.json({ message: 'Success: email was sent' });
	} catch (error) {
		return NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
	}
};
