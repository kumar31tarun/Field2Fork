package com.field2fork.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

	private final CustomJWTAuthenticationFilter customJWTAuthenticationFilter;

	public SecurityConfiguration(CustomJWTAuthenticationFilter customJWTAuthenticationFilter) {
		this.customJWTAuthenticationFilter = customJWTAuthenticationFilter;
	}

	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())

				.authorizeHttpRequests(requests -> requests
						.requestMatchers("/auth/login", "/auth/forgot-password", "/auth/reset-password/{token}",
								"/users/**","/cart/**","/orders/**","/payments/**","/products/**","/product-images/**","/reviews/**",
								"/sales-report/**","/v*/api-doc*/**", "/swagger-ui/**")
						.permitAll().requestMatchers(HttpMethod.OPTIONS).permitAll() // CORS support

						// Admin Endpoints (Accessible only to Admins)
						.requestMatchers("/users/buyers/after/{lastId}","/buyers/before/{firstId}").hasAuthority("ROLE_ADMIN")

						// Seller Endpoints (Accessible only to Seller)
						.requestMatchers("/resident/**").hasAuthority("ROLE_SELLER")

						// Buyer Endpoints (Accessible only to Buyer)
						.requestMatchers("/staff/**").hasAnyAuthority("ROLE_BUYER")

						.requestMatchers("/auth/getall/{id}", "/auth/updateone/{id}").hasAnyAuthority("ROLE_SELLER","ROLE_ADMIN","ROLE_BUYER")

						.anyRequest().authenticated())
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		http.addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}

	@Bean
//added bcrytpasswordencoder
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(); // securing the password
	}
}