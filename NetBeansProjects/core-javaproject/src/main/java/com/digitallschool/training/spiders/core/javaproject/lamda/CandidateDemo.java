/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject.lamda;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 *
 * @author stphnvijay07
 */
public class CandidateDemo {
    public static void main(String[] args) {
           List<Candidate> candidate=new ArrayList<>();
        candidate.add(new Candidate(1,"vijay",new ArrayList<String>(Arrays.asList("java","C")),2,4,new ArrayList<String>(Arrays.asList("Chennai","Bangalore"))));
        candidate.add(new Candidate(2,"sugu",new ArrayList<String>(Arrays.asList("java","react")),3,5,new ArrayList<String>(Arrays.asList("Hyderabad","Bangalore"))));
        candidate.add(new Candidate(3,"raju",new ArrayList<String>(Arrays.asList("mainframes","java")),3,5,new ArrayList<String>(Arrays.asList("Hyderabad","Bangalore"))));
      
      //  System.out.println(candidate);
        
        System.out.println(CandidateOperations.search(candidate,new ArrayList<String>(Arrays.asList("react","java")),new ArrayList<String>(Arrays.asList("Hyderabad")), 2, 4));
        
        
        
        
    }
    
    
    public static void main2(String[] args) {
        /* List<Candidate> candidate=new ArrayList<>();
        candidate.add(new Candidate(1,"vijay",new ArrayList<String>(Arrays.asList("java","C++")),3,"chennai"));
        candidate.add(new Candidate(2,"ramesh","Java",2,"bangalore"));
        candidate.add(new Candidate(3,"asif","c++",2,"chennai"));
        candidate.add(new Candidate(4,"vignesh","Java",3,"chennai"));
        
       
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Search based on");
       
        Consumer<Candidate> csmr=e->System.out.println(e);
      Predicate<Candidate> prdct1=e->e.getSkill().contains("Java")&&e.getExp()>=3;
       boolean r= prdct1.test(new Candidate(1, "name","Java", 2,"chennai"));
        Predicate<Candidate> prdct2=e->e.getExp()>=3;
       Predicate<Candidate> prdct3=e->e.getLocation().contains("chennai");
         candidate.stream().filter(e->(e.getSkill().contains("Java"))&&(e.getLocation().contains("chennai"))).forEach(csmr);
        
        
//         Predicate<Candidate> prdct4=new Predicate<Candidate>() {
//             @Override
//             public boolean test(Candidate t) {
//                 //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//             }
//         }
        //Predicate<Candidate> onCond=e->prdct1.test(e)
      // candidate.stream().filter(prdct1.and(prdct3)).forEach(csmr);
       // candidate.stream().filter(e->prdct3.test(e)).forEach(csmr);
        
        candidate.stream().filter(e->r).forEach(csmr);
    }
    
    public static void main1(String[] args) {
        List<Candidate> candidate=new ArrayList<>();
        candidate.add(new Candidate(1,"vijay","Java",3,"chennai"));
        candidate.add(new Candidate(2,"ramesh","Java",2,"bangalore"));
        candidate.add(new Candidate(3,"asif","c++",2,"chennai"));
        candidate.add(new Candidate(4,"vignesh","Java",3,"chennai"));
        
           Consumer<Candidate> csmr=(e)->System.out.println(e);
//            candidate.stream().filter((e)->e.getSkill().equals("java")).forEach(csmr);
        
     //candidate.stream().filter(e->e.getSkill().contains("Java")).forEach(csmr);
    }*/
    
}
}
