package com.admin.heroku.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.heroku.entity.Mail;
import com.admin.heroku.service.MailServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MailController {

	@Autowired
	private MailServiceImpl mailService;
	
	@RequestMapping(value = "/sendThankyouEmail")
    @PostMapping
	public void sendThankyouEmail(@RequestBody String contributor) {
		Mail mail = new Mail();
		mail.setMailFrom("overcds.community@gmail.com");
		mail.setMailTo(contributor);
		mail.setMailSubject("Thank you from Posmino community!");
		mail.setMailContent("\n\n\nThank you for your contribution to our community. Your gift has been sent!");
		mailService.sendMail(mail);
		//return "Mail Sent!";
	}
	
	
	
	@RequestMapping(value = "/sendConfirmEmail")
    @PostMapping
	public void sendConfirmEmail(@RequestBody String donee) {
		Mail mail = new Mail();
		mail.setMailFrom("overcds.community@gmail.com");
		mail.setMailTo(donee);
		mail.setMailSubject("Congratulation from Posmino community!");
		mail.setMailContent("\n\n\nYou have received a free item!");
		mailService.sendMail(mail);
		//return "Mail Sent!";
	}
}
