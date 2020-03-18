/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject.lamda;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author stphnvijay07
 */
public class Candidate {
   private int id;
   private String name;
   private ArrayList<String> skill;
   private double fromExp;
   private double toExp;
   private List<String> location;
   

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getSkill() {
        return skill;
    }

    public void setSkill(ArrayList<String> skill) {
        this.skill = skill;
    }

    public double getExp() {
        return fromExp;
    }

    public void setExp(double exp) {
        this.fromExp = exp;
    }

    public List<String> getLocation() {
        return location;
    }

    public void setLocation(ArrayList<String> location) {
        this.location = location;
    }

    public Candidate() {
    }

    public Candidate(int id, String name, ArrayList<String> skill, double fromExp, double toExp, List<String> location) {
        this.id = id;
        this.name = name;
        this.skill = skill;
        this.fromExp = fromExp;
        this.toExp = toExp;
        this.location = location;
    }

    public double getFromExp() {
        return fromExp;
    }

    public void setFromExp(double fromExp) {
        this.fromExp = fromExp;
    }

    public double getToExp() {
        return toExp;
    }

    public void setToExp(double toExp) {
        this.toExp = toExp;
    }

    @Override
    public String toString() {
        return "Candidate{" + "id=" + id + ", name=" + name + ", skill=" + skill + ", fromExp=" + fromExp + ", toExp=" + toExp + ", location=" + location + '}';
    }

 
    
    
}
