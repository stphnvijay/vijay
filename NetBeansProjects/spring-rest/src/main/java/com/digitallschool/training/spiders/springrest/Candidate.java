/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest;

import java.util.Date;
import org.bson.codecs.pojo.annotations.BsonProperty;

/**
 *
 * @author stphnvijay07
 */
public class Candidate {
    @BsonProperty("id")
    private int id;
    private String firstName;
    private String lastName;
    private Long phoneNumber;
    private Long alternateNumber;
    private String emailId;
    private Double tex;
    private Double rex;
    private String primarySkills;
    private String secondarySkills;
    private String qualification;
    private String additionalEducation;
    private double expectedCtc;
    private double currentCtc;
    private String positionApplied;
    private String gender;
    private String dob;
    private String address;

    public Candidate() {
    }

    public Candidate(int id, String firstName, String lastName, Long phoneNumber, Long alternateNumber, String emailId, Double tex, Double rex, String primarySkills, String secondarySkills, String qualification, String additionalEducation, double expectedCtc, double currentCtc, String positionApplied, String gender, String dob, String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.alternateNumber = alternateNumber;
        this.emailId = emailId;
        this.tex = tex;
        this.rex = rex;
        this.primarySkills = primarySkills;
        this.secondarySkills = secondarySkills;
        this.qualification = qualification;
        this.additionalEducation = additionalEducation;
        this.expectedCtc = expectedCtc;
        this.currentCtc = currentCtc;
        this.positionApplied = positionApplied;
        this.gender = gender;
        this.dob = dob;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Long getAlternateNumber() {
        return alternateNumber;
    }

    public void setAlternateNumber(Long alternateNumber) {
        this.alternateNumber = alternateNumber;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public Double getTex() {
        return tex;
    }

    public void setTex(Double tex) {
        this.tex = tex;
    }

    public Double getRex() {
        return rex;
    }

    public void setRex(Double rex) {
        this.rex = rex;
    }

    public String getPrimarySkills() {
        return primarySkills;
    }

    public void setPrimarySkills(String primarySkills) {
        this.primarySkills = primarySkills;
    }

    public String getSecondarySkills() {
        return secondarySkills;
    }

    public void setSecondarySkills(String secondarySkills) {
        this.secondarySkills = secondarySkills;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getAdditionalEducation() {
        return additionalEducation;
    }

    public void setAdditionalEducation(String additionalEducation) {
        this.additionalEducation = additionalEducation;
    }

    public double getExpectedCtc() {
        return expectedCtc;
    }

    public void setExpectedCtc(double expectedCtc) {
        this.expectedCtc = expectedCtc;
    }

    public double getCurrentCtc() {
        return currentCtc;
    }

    public void setCurrentCtc(double currentCtc) {
        this.currentCtc = currentCtc;
    }

    public String getPositionApplied() {
        return positionApplied;
    }

    public void setPositionApplied(String positionApplied) {
        this.positionApplied = positionApplied;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Candidate{" + "id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber + ", alternateNumber=" + alternateNumber + ", emailId=" + emailId + ", tex=" + tex + ", rex=" + rex + ", primarySkills=" + primarySkills + ", secondarySkills=" + secondarySkills + ", qualification=" + qualification + ", additionalEducation=" + additionalEducation + ", expectedCtc=" + expectedCtc + ", currentCtc=" + currentCtc + ", positionApplied=" + positionApplied + ", gender=" + gender + ", dob=" + dob + ", address=" + address + '}';
    }

}
