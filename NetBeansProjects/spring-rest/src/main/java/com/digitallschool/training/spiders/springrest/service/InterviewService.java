/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.service;

import com.digitallschool.training.spiders.springrest.Interview;
import com.digitallschool.training.spiders.springrest.repository.InterviewRepository;
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
            
    public List<Interview> getAllInterview() {
        
      return rep.getAllInterview();
    }

}
