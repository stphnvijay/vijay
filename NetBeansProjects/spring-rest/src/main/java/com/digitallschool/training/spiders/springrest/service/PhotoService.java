/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.service;


import com.digitallschool.training.spiders.springrest.Photo;
import com.digitallschool.training.spiders.springrest.repository.PhotoRepository;
import java.io.IOException;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author stphnvijay07
 */
@Service
public class PhotoService {
 
    @Autowired
    private PhotoRepository photoRepo;
 
    public void addPhoto(String title, MultipartFile file) throws IOException { 
        Photo photo = new Photo(title); 
        photo.setImage(
          new Binary(BsonBinarySubType.BINARY, file.getBytes())); 
        photo = photoRepo.insert(photo); 
      //  return photo.getId(); 
    }
 
    public Photo getPhoto(String id) { 
        return photoRepo.findById(id).get(); 
    }
}
