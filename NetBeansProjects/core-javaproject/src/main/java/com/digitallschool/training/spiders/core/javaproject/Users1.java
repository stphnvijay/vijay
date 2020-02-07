/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject;

import org.bson.codecs.pojo.annotations.BsonProperty;

/**
 *
 * @author stphnvijay07
 */
public class Users1 {
    
    @BsonProperty("id")
    private int userId;
    private String name;
    private String username;
    private String email;

    public Users1() {
    }

    public Users1(int userId, String name, String username, String email) {
        this.userId = userId;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Users1{" + "userId=" + userId + ", name=" + name + ", username=" + username + ", email=" + email + '}';
    }
    
        
    
}
