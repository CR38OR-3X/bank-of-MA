package org.merit.bank.capstone.bankofma.security;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {
	
	@GetMapping("/home")
	public String homePage() {
		
		return "<h1>Public Home Page</h1><button>Click</button>";
	}
	
}
