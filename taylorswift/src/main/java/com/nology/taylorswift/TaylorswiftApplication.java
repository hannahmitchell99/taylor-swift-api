package com.nology.taylorswift;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class TaylorswiftApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaylorswiftApplication.class, args);
	}

}
