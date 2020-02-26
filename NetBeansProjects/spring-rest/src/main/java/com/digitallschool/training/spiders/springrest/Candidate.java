/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest;

import java.math.BigInteger;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import org.bson.codecs.pojo.annotations.BsonProperty;

/**
 *
 * @author stphnvijay07
 */
public class Candidate {

    @BsonProperty("id")
    //@NotEmpty
    //@Pattern(regexp = "^[0-9]{12,12}$" ,message = "Invalid Adhaar")

    private long id;

    //@Pattern(regexp = "^[0-9]{12,12}$", message = "Invalid Adhaar")
    private String adhaarId;
    // @Pattern(regexp = "^[a-zA-Z]+$")

    //@Size(min = 4,max = 20)
   // @Pattern(regexp = "^[a-zA-Z]{1,20}$", message = "Invalid first name")
    private String firstName;
    //@Pattern(regexp = "^[a-zA-Z]{1,20}$", message = "Invalid last name")
    private String lastName;
   // @Pattern(regexp = "^[0-9]{10,10}$", message = "Invalid phone number")
    private long phoneNumber;
   // @Pattern(regexp = "^[0-9]{10,10}$", message = "Invalid alternate phone number")
    private long alternateNumber;
    //@Email(message = "Invalid email format")
    private String emailId;
    //@Min(value = 1, message = "minimum exp must be one")
    private Double tex;
    //@Min(value = 3)
    private Double rex;
    private String primarySkills;
    private String secondarySkills;
    //@Pattern(regexp = "^[]")
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAdhaarId() {
        return adhaarId;
    }

    public void setAdhaarId(String adhaarId) {
        this.adhaarId = adhaarId;
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

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public long getAlternateNumber() {
        return alternateNumber;
    }

    public void setAlternateNumber(long alternateNumber) {
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
        return "Candidate{" + "id=" + id + ", adhaarId=" + adhaarId + ", firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber + ", alternateNumber=" + alternateNumber + ", emailId=" + emailId + ", tex=" + tex + ", rex=" + rex + ", primarySkills=" + primarySkills + ", secondarySkills=" + secondarySkills + ", qualification=" + qualification + ", additionalEducation=" + additionalEducation + ", expectedCtc=" + expectedCtc + ", currentCtc=" + currentCtc + ", positionApplied=" + positionApplied + ", gender=" + gender + ", dob=" + dob + ", address=" + address + '}';
    }

}
