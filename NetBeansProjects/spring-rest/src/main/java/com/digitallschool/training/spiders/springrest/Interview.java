/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest;

import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author stphnvijay07
 */
public class Interview {
    private int candidate_id;
    private String modeOfInterview;
    private String dob;
    private String location;
    private String recommondation;
    private String interviewPanel;
    private String reference;

    public Interview() {
    }

    public Interview(int candidate_id, String modeOfInterview, String dob, String location, String recommondation, String interviewPanel, String reference) {
        this.candidate_id = candidate_id;
        this.modeOfInterview = modeOfInterview;
        this.dob = dob;
        this.location = location;
        this.recommondation = recommondation;
        this.interviewPanel = interviewPanel;
        this.reference = reference;
    }
    

    public int getCandidate_id() {
        return candidate_id;
    }

    public void setCandidate_id(int candidate_id) {
        this.candidate_id = candidate_id;
    }

    public String getModeOfInterview() {
        return modeOfInterview;
    }

    public void setModeOfInterview(String modeOfInterview) {
        this.modeOfInterview = modeOfInterview;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getRecommondation() {
        return recommondation;
    }

    public void setRecommondation(String recommondation) {
        this.recommondation = recommondation;
    }

    public String getInterviewPanel() {
        return interviewPanel;
    }

    public void setInterviewPanel(String interviewPanel) {
        this.interviewPanel = interviewPanel;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    @Override
    public String toString() {
        return "Interview{" + "candidate_id=" + candidate_id + ", modeOfInterview=" + modeOfInterview + ", dob=" + dob + ", location=" + location + ", recommondation=" + recommondation + ", interviewPanel=" + interviewPanel + ", reference=" + reference + '}';
    }
    
    
   
    
    
}
