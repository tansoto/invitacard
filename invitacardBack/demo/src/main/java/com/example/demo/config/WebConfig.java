package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/**")  // Ajusta la ruta según tus endpoints
                .allowedOrigins("http://localhost:4200")//Ajusta el origen según tus necesidades
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");//Ajusta los métodos según tus necesidades
    }
}
