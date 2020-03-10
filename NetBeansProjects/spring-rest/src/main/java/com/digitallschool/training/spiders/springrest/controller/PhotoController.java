/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.controller;

import com.digitallschool.training.spiders.springrest.Photo;
import com.digitallschool.training.spiders.springrest.service.PhotoService;
import java.io.IOException;
import java.util.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author stphnvijay07
 */
@RestController
@CrossOrigin
@RequestMapping("/photo")
public class PhotoController {

    @Autowired
    PhotoService photoService;

    @PostMapping(consumes = "multipart/form-data")
    public String addPhoto(@RequestParam("title") String title,
            @RequestParam("image") MultipartFile image, Model model)
            throws IOException {
        photoService.addPhoto(title, image);
        return "photo addded successfully\\";
    }

    @GetMapping("/photos/{id}")
    public String getPhoto(@PathVariable String id, Model model) {
        Photo photo = photoService.getPhoto(id);
        model.addAttribute("title", photo.getTitle());
        model.addAttribute("image",
                Base64.getEncoder().encodeToString(photo.getImage().getData()));
        return "photos";
    }
}
