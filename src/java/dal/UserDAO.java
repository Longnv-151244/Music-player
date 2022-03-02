/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dal;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import model.User;

/**
 *
 * @author dclon
 */
public class UserDAO extends BaseDAO<User> {

    @Override
    public ArrayList<User> getAll() {
        ArrayList<User> users = new ArrayList<>();
        try {
            String sql = "SELECT id, username, password, first_name, last_name, "
                    + "avatar, rold_ID, t_create, t_lastOnline, email\n"
                    + "FROM Users";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            try {
                while (rs.next()) {
                    User u = new User();
                    u.setId(rs.getInt("id"));
                    u.setUsername(rs.getString("username"));
                    u.setPassword(rs.getString("password"));
                    u.setFirs_name(rs.getString("first_name"));
                    u.setLast_name(rs.getString("last_name"));
                    u.setAvatar(rs.getString("avatar"));
                    u.setRole_id(rs.getInt("role_ID"));
                    u.setT_create(rs.getTimestamp("t_create"));
                    u.setT_lastOnline(rs.getTimestamp("t_lastOnline"));
                    users.add(u);
                }
            } catch (Exception e) {
            }
        } catch (Exception e) {
        }
        return users;
    }

}
