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
public class InterviewService {

    @Autowired
    InterviewRepository rep;
    
    @Autowired
    CandidateRepository canRep;

    public List<Interview> getAllInterview() {

        return rep.getAllInterview();
    }

//    public void addInterview(Interview interview) throws SQLException {
//
//        rep.addInterview(interview);
//    }
    
     public boolean addInterview(Interview interview) throws SQLException {
         int id=interview.getCandidate_id();
         Candidate candidate=canRep.getOneCandidate(id);
         if(candidate!=null){
        rep.addInterview(interview);
        return true;
   }
         return false;
     }
    

    public void deleteInterview(int id) throws SQLException {
        rep.deleteInterview(id);
    }

    public void updateInterview(Interview interview, int id) {
        rep.updateInterview(interview,id);
    }

    public Interview getInterviewById(int id) {
     return rep.getInterviewById(id);  
    }

}
