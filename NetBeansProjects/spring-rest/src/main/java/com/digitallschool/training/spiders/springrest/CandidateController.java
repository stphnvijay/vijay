/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@RequestMapping("/candidate")
public class CandidateController {

    @Autowired
    CandidateService ser;

    @GetMapping
    public List<Candidate> getCandidates() {
        return ser.getAllCandidates();
    }

    @PostMapping
    public void addCandidate(Candidate candidate) {
        ser.addCandidate(candidate);
    }

    @DeleteMapping
    public void deleteCandidate(@RequestParam int id) {
        ser.deleteCandidate(id);
    }

}
