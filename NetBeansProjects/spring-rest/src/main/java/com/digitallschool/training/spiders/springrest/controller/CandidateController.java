/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.controller;

import com.digitallschool.training.spiders.springrest.Candidate;
import com.digitallschool.training.spiders.springrest.Mylogger;
import static com.digitallschool.training.spiders.springrest.Mylogger.logger;
import com.digitallschool.training.spiders.springrest.service.CandidateService;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;
import java.util.logging.ConsoleHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
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
    
//    private static Logger logger=Logger.getLogger(CandidateController.class.getName());
//    Logger logger1=Logger.getLogger("vijay");
    @Autowired
    CandidateService ser;

    @GetMapping
    public List<Candidate> getCandidates() {
        Mylogger.logger.entering("CandidateController","getCandidates");
      // logger.entering(getClass().getName(),"getCandidates");
       // List<Candidate> arr=ser.getAllCandidates();
       // System.out.println(arr);
        //System.out.println("start");
        //logger.exiting(getClass().getName(),"getCandidates");
//        System.out.println(logger1.getName());
//        System.out.println(logger.getName());
//        System.out.println(logger);
           //logger.log(Level.SEVERE,"my log {0},{1},{2}",new Object[]{"log","severe","worst"});
        //  logger.addHandler(new ConsoleHandler());
           //logger.log(Level.SEVERE,"hello runtime",new RuntimeException("error"));
                   
        return ser.getAllCandidates();
    }
    
    @GetMapping("/{id}")
    public Candidate getOneCandidate(@PathVariable("id") int id) throws NoSuchMethodException{
        System.out.println("start");
        logger.addHandler(new ConsoleHandler());
        logger.setLevel(Level.FINER);
       logger.entering(CandidateController.class.getName(),"CandidateController");
       // logger.log(Level.SEVERE,"hello runtime",new RuntimeException("error"));
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
    public void deleteCandidate(@PathVariable("id") int id) throws SQLException {
        ser.deleteCandidate(id);
    }
    
    @PutMapping
    public void updateCandidate(@RequestBody Candidate candidate){
        int id=(int)candidate.getId();
        ser.updateCandidate(id,candidate);
    }
    
     @GetMapping("/search")
    public List<Candidate> searchBy(@RequestParam("skills") String primarySkills,
            @RequestParam("exp") String tex,@RequestParam("location") String address )
    {
        return null;
    }
    
    @ModelAttribute("candidate")
    public Candidate setCandidate(){
        return new Candidate();
    }
    
   

}
