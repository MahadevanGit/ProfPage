
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "rainbow.iad.maha@gmail.com",
	Password : "msgmsgmsg",
	To : 'rainbow.iad.maha@gmail.com',
	From : "rainbow.iad.maha@gmail.com",
	Subject : "From my portal",
	Body : "Hi we need to implement this web page for our Team.",
	}).then(
		message => alert("mail sent successfully")
	);
	console.log('Send email was triggered');
}