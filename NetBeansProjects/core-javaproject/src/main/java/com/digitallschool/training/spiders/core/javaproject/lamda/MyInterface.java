/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject.lamda;

/**
 *
 * @author stphnvijay07
 */
public interface MyInterface {
    
    public void print(String text);
    
    static void printIt(String text){
        System.out.println(text);
    }
    
}
