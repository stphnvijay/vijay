/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.spring_boot1;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author stphnvijay07
 */
@Repository
public class ItemsRepository {

    @Autowired
    DataSource ds;

    public List<Items> getAllItems() {

        List<Items> items = new ArrayList<>();
        try (Connection con = ds.getConnection();
                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery("SELECT * FROM test")) {
            while (rs.next()) {
                items.add(new Items(rs.getInt(1), rs.getString(2)));
            }
            return items;

        } catch (Exception eo) {
            eo.printStackTrace();
        }
        return items;

    }
}
