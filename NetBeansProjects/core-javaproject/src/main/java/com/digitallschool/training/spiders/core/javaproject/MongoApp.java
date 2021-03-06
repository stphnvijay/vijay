/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject;

import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.util.function.Consumer;
import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import static com.mongodb.client.model.Filters.*;

/**
 *
 * @author stphnvijay07com.mongodb.client
 */
public class MongoApp {

    public static void main(String[] args) {

        MongoClient client = MongoClients.create("mongodb://vijay:vijay@db.bassure.guruofjava.com/vijay");
        CodecRegistry codec = CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()));
        MongoDatabase db = client.getDatabase("vijay");
        MongoCollection<Candidate> collection = db.getCollection("candidate", Candidate.class).withCodecRegistry(codec);
//        Consumer<Candidate> candit = e -> candidates.add(e);
        Consumer<Candidate> candit = e -> System.out.println(e);
        collection.find().forEach(candit);

    }

    public static void main4(String[] args) {
        MongoClient client = MongoClients.create("mongodb://vijay:vijay@db.bassure.guruofjava.com/vijay");
        CodecRegistry codec = CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()));
        MongoDatabase db = client.getDatabase("vijay");
        MongoCollection<Users1> collection = db.getCollection("users1", Users1.class).withCodecRegistry(codec);
        Consumer<Users1> userConsumer = e -> System.out.println(e);
        collection.find(and(regex("email", "S.a"), lt("id", 10))).forEach(userConsumer);
        client.close();
    }

    public static void main2(String[] args) {
        MongoClient client = MongoClients.create("mongodb://vijay:vijay@db.bassure.guruofjava.com/vijay");
        CodecRegistry codec = CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()));
        MongoDatabase db = client.getDatabase("vijay");
        MongoCollection<Users1> collection = db.getCollection("users1", Users1.class).withCodecRegistry(codec);
        Consumer<Users1> userConsumer = e -> System.out.println(e);
        collection.find().forEach(userConsumer);
        client.close();
        // MongoCollection<Document> collection=db.getCollection("users");
    }

    public static void main3(String[] args) {

        MongoClient client = MongoClients.create("mongodb://vijay:vijay@db.bassure.guruofjava.com/vijay");
        CodecRegistry codec = CodecRegistries.fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()));
        MongoDatabase db = client.getDatabase("vijay");
        MongoCollection<Users1> collection = db.getCollection("users1", Users1.class).withCodecRegistry(codec);
        Users1 temp = new Users1(0, "Mongo", "mongouser", "mongo@mail.com");
        collection.insertOne(temp);
        client.close();
    }

    public static void main1(String[] args) {
        MongoClient client = MongoClients.create("mongodb://vijay:vijay@db.bassure.guruofjava.com/vijay");
        MongoDatabase db = client.getDatabase("vijay");

        Consumer<String> c = e -> System.out.println(e);
        db.listCollectionNames().forEach(c);
        System.out.println("########################");

        MongoCollection<Document> collection = db.getCollection("users1");

        Consumer<Document> doc = e -> System.out.println(e);

        collection.find().forEach(doc);

        client.close();

    }

}
