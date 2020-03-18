/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.core.javaproject.lamda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collector;
import java.util.stream.Collectors;

/**
 *
 * @author stphnvijay07
 */
public class CandidateOperations {

    public static List<Candidate> search(List<Candidate> candidate, List<String> skills, List<String> location, float fromExp, float toExp) {

        return candidate.stream().filter(e -> predicateConditionSki(skills, e)).filter(e -> predicateConditionLoc(location, e)).collect(Collectors.toList());

    }

    public static boolean predicateConditionSki(List<String> skills, Candidate e) {

        return skills.stream().anyMatch(s -> e.getSkill().contains(s));
    }

    public static boolean predicateConditionLoc(List<String> location, Candidate e) {

        return location.stream().anyMatch(s -> (e.getLocation().contains(s)) || (s.isEmpty()));

    }
}
