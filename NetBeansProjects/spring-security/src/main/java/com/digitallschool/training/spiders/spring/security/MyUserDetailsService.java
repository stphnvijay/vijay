/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring.security;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 *
 * @author stphnvijay07
 */
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    DataSource ds;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try(Connection con=ds.getConnection();
                PreparedStatement pst1=con.prepareStatement("SELECT user_id,email,password FROM users WHERE email=?");
                PreparedStatement pst2=con.prepareStatement("SELECT r.name from user_roles ur,roles r WHERE"
                    +" ur.role_id=r.role_id AND ur.user_id=?"    )
                ){
            pst1.setString(1, username);
            ResultSet rs=pst1.executeQuery();
            
            List<String> userRoles=new ArrayList<>();
            
            if(rs.next()){
                pst2.setInt(1, rs.getInt(1));
                ResultSet rs2=pst2.executeQuery();
                
                while(rs2.next()){
                    userRoles.add(rs2.getString(1));
                }
            
            
            UserDetails temp=User.builder()
                    .username(rs.getString(2))
                    .password(rs.getString(3))
                    .roles(userRoles.toArray(new String[0]))
                    .build();
            return temp;
            }
            throw new UsernameNotFoundException("User not found: " + username);
            
        }catch(SQLException sql){
            sql.printStackTrace();
            
        }
        return null;
    }

}
