/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.controller;

import com.digitallschool.training.spiders.springrest.Interview;
import com.digitallschool.training.spiders.springrest.service.InterviewService;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author stphnvijay07
 */
@RestController
@CrossOrigin
@RequestMapping("interview")
public class InterviewController {

    @Autowired
    InterviewService ser;

    @GetMapping
    public List<Interview> getAllInterview() {
        return ser.getAllInterview();

    }
    @GetMapping("/{id}")
    public Interview getInterviewById(@PathVariable("id") int id){
        return ser.getInterviewById(id);
        
    }
    
//    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
//    public void addInterview(@RequestBody Interview interview) throws SQLException{
//        ser.addInterview(interview);
//    }
    
     @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addInterview(@RequestBody Interview interview) throws SQLException{
       if(ser.addInterview(interview)){
           return ResponseEntity.ok("successfully added");
       }
       else{
           return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("invalid data");
       }
    }
    
    
    
    
    @DeleteMapping("/{id}")
    public void deleteInterview(@PathVariable("id") int id) throws SQLException{
        ser.deleteInterview(id);
        
    }
    
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateInterview(@RequestBody Interview interview){
        int id=interview.getCandidate_id();
        ser.updateInterview(interview,id);
        
    }
    
    @ModelAttribute("interview")
    public Interview setInterview(){
        return new Interview();
    }
    

}
