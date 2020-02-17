/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.digitallschool.training.spiders.springrest.repository;

import com.digitallschool.training.spiders.springrest.Interview;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
public class InterviewRepository {

    @Autowired
    DataSource ds;

    public List<Interview> getAllInterview() {

        List<Interview> interview = new ArrayList<>();
        try (ResultSet rs = ds.getConnection().createStatement().executeQuery("SELECT * FROM interview")) {
            while (rs.next()) {
                interview.add(new Interview(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
                        rs.getString(5), rs.getString(6), rs.getString(7)));
            }
            return interview;
        } catch (Exception eo) {
            eo.printStackTrace();
        }
        return null;
    }

    public void addInterview(Interview interview) throws SQLException {

        try (PreparedStatement ps = ds.getConnection().prepareStatement("INSERT INTO interview VALUES( ?,  ?,  ?,  ?,  ?,  ?,  ?)"
        )) {
            ps.setInt(1, interview.getCandidate_id());
            ps.setString(2, interview.getModeOfInterview());
            ps.setString(3, interview.getDob());
            ps.setString(4, interview.getLocation());
            ps.setString(5, interview.getRecommondation());
            ps.setString(6, interview.getInterviewPanel());
            ps.setString(7, interview.getReference());

            ps.executeUpdate();
        } catch (Exception eo) {
            eo.printStackTrace();
        }
    }

    public void deleteInterview(int id) throws SQLException {
        try (PreparedStatement ps = ds.getConnection().prepareStatement("DELETE FROM interview where customer_id=?")) {

            ps.setInt(1, id);
            ps.executeUpdate();

        } catch (Exception eo) {
            eo.printStackTrace();
        }

    }

    public void updateInterview(Interview interview, int id) {
    
        try(PreparedStatement ps=ds.getConnection().prepareStatement("UPDATE interview SET modeOfInterview=?,dob=?, location=?,recommendation=?,interviewPanel=?,reference=? where customer_id=? ")){
            ps.setInt(7, id);
            ps.setString(1, interview.getModeOfInterview());
            ps.setString(2, interview.getDob());
            ps.setString(3, interview.getLocation());
            ps.setString(4, interview.getRecommondation());
            ps.setString(5, interview.getInterviewPanel());
            ps.setString(6, interview.getReference());
            ps.executeUpdate();
            
        }catch(Exception eo){
            eo.printStackTrace();
        }
    }

}
