package com.pill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PillApplication {

	public static void main(String[] args) {
		System.out.println("test");
		SpringApplication.run(PillApplication.class, args);
	}

}
