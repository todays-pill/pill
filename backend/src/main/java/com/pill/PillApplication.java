package com.pill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class PillApplication {

	public static void main(String[] args) {
		SpringApplication.run(PillApplication.class, args);
	}

}
