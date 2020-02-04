/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring_boot1;

import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    ItemsService service;

    @GetMapping
    public String sayHello(@RequestParam(name = "name", required = false, defaultValue = "World") String name) {
        return "Hello" + name;

    }

    @GetMapping(path = "/all", produces = "application/json")
    public List<Items> getAllItems() throws SQLException {
        return service.getAllItems();
    }

}
