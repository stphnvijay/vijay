/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring.security;

import java.awt.PageAttributes;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author stphnvijay07
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public String getString() {

        return "User:"+SecurityContextHolder.getContext().getAuthentication();
    }
    
    @PostMapping(path = "/adduser" )
    public List<String> addUser(@RequestParam("userName") String userName,@RequestParam("password") String password,
            @RequestParam("email") String email){
        List<String> details=new ArrayList<>();
        details.add(userName);
        details.add(password);
        details.add(email);
        return details;   
        
    }

}
