/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring.security;

import ch.qos.logback.core.joran.action.NOPAction;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 *
 * @author stphnvijay07
 */
@Configuration
public class MyWebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
    
    @Bean
    @Override
    protected UserDetailsService userDetailsService() {
        return new MyUserDetailsService();//To change body of generated methods, choose Tools | Templates.
    }

   
    
    
    
}
