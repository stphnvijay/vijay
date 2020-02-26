/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.service;

import com.digitallschool.training.spiders.springrest.Candidate;
import com.digitallschool.training.spiders.springrest.Interview;
import com.digitallschool.training.spiders.springrest.repository.CandidateRepository;
import com.digitallschool.training.spiders.springrest.repository.InterviewRepository;
import java.sql.SQLException;
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
    
    @Autowired
    InterviewRepository intRep;

    public List<Candidate> getAllCandidates() {
        return rep.getAllCandidates();
    }

    public boolean addCandidate(Candidate candidate) {
        return rep.addCandidate(candidate);
    }

    public void deleteCandidate(int id) throws SQLException {
        Interview interview=intRep.getInterviewById(id);
        if(interview!=null){
            intRep.deleteInterview(id);
        }
        rep.deleteCandidate(id);
    }

    public void updateCandidate(int id, Candidate candidate) {
        rep.updateCandidate(id, candidate);
    }

    public Candidate getOneCandidate(int id) {
     return rep.getOneCandidate(id);   
    }

}
