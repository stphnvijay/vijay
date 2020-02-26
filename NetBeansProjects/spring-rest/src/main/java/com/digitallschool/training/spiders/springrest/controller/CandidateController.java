/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.controller;

import com.digitallschool.training.spiders.springrest.Candidate;
import com.digitallschool.training.spiders.springrest.service.CandidateService;
import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
@RequestMapping("/candidate")
public class CandidateController {

    @Autowired
    CandidateService ser;

    @GetMapping
    public List<Candidate> getCandidates() {
        return ser.getAllCandidates();
    }
    
    @GetMapping("/{id}")
    public Candidate getOneCandidate(@PathVariable("id") int id){
        return ser.getOneCandidate(id);
        
    }
    

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addCandidate(@Valid @RequestBody Candidate candidate,BindingResult rs) {
        System.out.println(candidate.getAdhaarId());
       if(!rs.hasErrors()&&ser.addCandidate(candidate))
        return ResponseEntity.ok("Successfully updated");
       else
           return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Invalid data" +rs.toString());
    }

    @DeleteMapping("/{id}")
    public void deleteCandidate(@PathVariable("id") int id) {
        ser.deleteCandidate(id);
    }
    
    @PutMapping
    public void updateCandidate(@RequestBody Candidate candidate){
        int id=(int)candidate.getId();
        ser.updateCandidate(id,candidate);
    }
    
    @ModelAttribute("candidate")
    public Candidate setCandidate(){
        return new Candidate();
    }
    
    

}
