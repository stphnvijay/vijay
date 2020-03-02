/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.repository;

import com.digitallschool.training.spiders.springrest.Candidate;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.stereotype.Repository;

/**
 *
 * @author stphnvijay07
 */
@Repository
public class CandidateRepository {

    @Autowired
    MongoDbFactory mf;

    public List<Candidate> getAllCandidates() {

        List<Candidate> candidates = new ArrayList<>();
        CodecRegistry codec = CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()));
        MongoCollection collection = mf.getDb("vijay").getCollection("candidate", Candidate.class)
                .withCodecRegistry(codec);
        Consumer<Candidate> candit = e -> candidates.add(e);
        //        Consumer<Candidate> candit = e-> System.out.println(e);
        collection.find().forEach(candit);
        return candidates;

    }

    public boolean addCandidate(Candidate candidate) {
        System.out.println(candidate.getId());
        try {

            MongoCollection collection = mf.getDb("vijay").getCollection("candidate", Candidate.class).withCodecRegistry(CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                    CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build())));
            collection.insertOne(candidate);
            return true;
            //  collection.createIndex({"id":candidate.getId()},{unique:true});
        } catch (Exception eo) {
            eo.printStackTrace();
        }
        return false;
    }

    public void deleteCandidate(int id) {
        try {
            MongoCollection collection = mf.getDb("vijay").getCollection("candidate", Candidate.class).withCodecRegistry(CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                    CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build())));
            collection.deleteOne(eq("id", id));
        } catch (Exception eo) {
            eo.printStackTrace();
        }
    }

    public void updateCandidate(int id, Candidate candidate) {
        try {
            MongoCollection collection = mf.getDb("vijay").getCollection("candidate", Candidate.class).withCodecRegistry(CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                    CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build())));
            collection.replaceOne(eq("id", id), candidate);
        } catch (Exception eo) {
            eo.printStackTrace();
        }

    }

    public Candidate getOneCandidate(int id) {

        System.out.println(id);
        try {
            Candidate candidate = null;
            MongoCollection collection = mf.getDb("vijay").getCollection("candidate", Candidate.class).withCodecRegistry(CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                    CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build())));

            FindIterable<Candidate> it = collection.find(eq("id", id));
            for (Candidate c : it) {
                candidate = c;

            }
            System.out.println(candidate);
            return candidate;
        } catch (Exception eo) {
            eo.printStackTrace();
        }
        return new Candidate();
    }
}
