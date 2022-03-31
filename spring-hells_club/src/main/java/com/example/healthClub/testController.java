package com.example.healthClub;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
	@RequestMapping("/")
	public String Index() {
		System.out.println("----------Test Console!-------");
		return "it's main page!";
		
	}
}

