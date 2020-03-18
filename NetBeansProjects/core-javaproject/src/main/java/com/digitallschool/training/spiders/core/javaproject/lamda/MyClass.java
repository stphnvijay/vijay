/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject.lamda;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 *
 * @author stphnvijay07
 */
public class MyClass {
    
    public static void main(String[] args) throws InterruptedException {
       
   
    }
    
    
    
    public static void main3(String[] args) {
        List<String> res=new ArrayList<>();
        Consumer<String> cmr=(e)->res.add(e);
        Predicate<String> cond=(String value)->
            value!="vijay";
            
        
       // System.out.println(cond.test("viy"));
        String[] arr={"ravi","vijay","shankar","rupesh"};
        List<String> l=Arrays.asList(arr);
        l.stream().filter(cond).forEach(cmr);
        System.out.println(res);
        
        
        
    }
    
    
    public static void main2(String[] args) {
        MyInterface m1=(String text ) ->{
            System.out.println(text);
        
    };
        MyInterface m2=new MyInterface() {
            @Override
            public void print(String text) {
                //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
                System.out.println("ravi");
            }
            public String getName(){
                return "indra";
            }
            
        };
        //m1.print("vijay");
        System.out.println(m2.getClass());
        
        
    }
    
    public static void main1(String[] args) {
        MyInterface.printIt("hii");
    }
}
