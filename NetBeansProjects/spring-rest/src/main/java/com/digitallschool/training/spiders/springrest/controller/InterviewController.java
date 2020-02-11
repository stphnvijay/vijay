/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.controller;

import com.digitallschool.training.spiders.springrest.Interview;
import com.digitallschool.training.spiders.springrest.service.InterviewService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author stphnvijay07
 */
@RestController
@RequestMapping("interview")
public class InterviewController {

    @Autowired
    InterviewService ser;

    @GetMapping
    public List<Interview> getAllInterview() {
        return ser.getAllInterview();

    }
    
    @PostMapping
    public void addInterview(Interview interview){
        ser.addInterview(interview);
    }

}
