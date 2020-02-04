/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring_boot1;

import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 *
 * @author stphnvijay07
 */
@Service
public class ItemsService {
    
    @Autowired
    ItemsRepository tr;
    
    public List<Items> getAllItems() throws SQLException
    {
    return tr.getAllItems(); 
    }

}
