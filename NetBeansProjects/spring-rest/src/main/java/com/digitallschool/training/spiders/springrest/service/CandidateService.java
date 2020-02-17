/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.service;

import com.digitallschool.training.spiders.springrest.Candidate;
import com.digitallschool.training.spiders.springrest.repository.CandidateRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author stphnvijay07
 */
@Service
public class CandidateService {

    @Autowired
    CandidateRepository rep;

    public List<Candidate> getAllCandidates() {
        return rep.getAllCandidates();
    }

    public boolean addCandidate(Candidate candidate) {
        return rep.addCandidate(candidate);
    }

    public void deleteCandidate(int id) {
        rep.deleteCandidate(id);
    }

    public void updateCandidate(int id, Candidate candidate) {
        rep.updateCandidate(id, candidate);
    }

}
