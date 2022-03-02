/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dal;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Action;
import model.Role;

/**
 *
 * @author dclon
 */
public class ActionDAO extends BaseDAO<Action> {

    @Override
    public ArrayList<Action> getAll() {
        ArrayList<Action> actions = new ArrayList<>();
        try {
            String sql = "SELECT id, name\n"
                    + "FROM [Action]";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Action a = new Action();
                a.setId(rs.getInt("id"));
                a.setName(rs.getString("name"));
                actions.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return actions;
    }
}
