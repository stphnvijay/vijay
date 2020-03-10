/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.repository;

import com.digitallschool.training.spiders.springrest.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author stphnvijay07
 */
@Repository
public interface PhotoRepository extends MongoRepository<Photo, String> {

    
 }
