/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring_boot1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author stphnvijay07
 */
@RestController
@RequestMapping("/test")
public class TestController {
    
    @GetMapping
    public String sayHello(@RequestParam(name="name",required=false,defaultValue="World") String name){
        return "Hello" +name;
        
    }
    
}
