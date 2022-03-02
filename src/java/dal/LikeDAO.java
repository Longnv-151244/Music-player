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
import model.Like;

/**
 *
 * @author dclon
 */
public class LikeDAO extends BaseDAO<Like> {
    
    @Override
    public ArrayList<Like> getAll() {
        ArrayList<Like> likes = new ArrayList<>();
        try {
            String sql = "SELECT id, [user_ID], album_ID, t_lastUpdate\n"
                    + "FROM [like]";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Like l = new Like();
                l.setId(rs.getInt("id"));
                l.setUser_ID(rs.getInt("user_ID"));
                l.setAlbum_ID(rs.getInt("album_ID"));
                l.setT_lastUpdate(rs.getTimestamp("t_lastUpdate"));
                likes.add(l);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return likes;
    }
}
