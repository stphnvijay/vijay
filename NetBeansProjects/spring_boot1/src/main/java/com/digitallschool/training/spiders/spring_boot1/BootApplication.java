/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring_boot1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 *
 * @author stphnvijay07
 */
@SpringBootApplication
public class BootApplication {
    public static void main(String[] args) {
        SpringApplication sp=new SpringApplication(BootApplication.class);
        sp.run(args);
        
    }
    
}
