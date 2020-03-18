/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest;

import com.digitallschool.training.spiders.springrest.controller.CandidateController;
import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Formatter;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

/**
 *
 * @author stphnvijay07
 */
public class Mylogger {
    public final static Logger logger=Logger.getLogger(CandidateController.class.getName());
    static{
        try {
            FileHandler fileHandler=new FileHandler("/home/stphnvijay07/Loggerlogs/appslog.log");
            logger.addHandler(fileHandler);
            Formatter formatter=new SimpleFormatter();
            fileHandler.setFormatter(formatter);
        } catch (IOException ex) {
            Logger.getLogger(Logger.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SecurityException ex) {
            Logger.getLogger(Logger.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
 
}
