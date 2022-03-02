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
import model.Album;

/**
 *
 * @author dclon
 */
public class AlbumDAO extends BaseDAO<Album> {

    @Override
    public ArrayList<Album> getAll() {
        ArrayList<Album> albums = new ArrayList<>();
        try {
            String sql = "SELECT id, name, author, category_ID, duration, image, path, t_create, t_lastUpdate\n"
                    + "FROM Albums";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Album a = new Album();
                a.setId(rs.getInt("id"));
                a.setName(rs.getString("name"));
                a.setAuthor(rs.getString("author"));
                a.setCategory_id(rs.getInt("category_ID"));
                a.setDuration(rs.getString("duration"));
                a.setImage(rs.getString("image"));
                a.setPath(rs.getString("path"));
                a.setT_create(rs.getTimestamp("t_create"));
                a.setT_lastUpdate(rs.getTimestamp("t_lastUpdate"));
                albums.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return albums;
    }

    public ArrayList<Album> getAlbumsOfCategory(int category_ID) {
        ArrayList<Album> albums = new ArrayList<>();
        try {
            String sql = "SELECT id, name, author, category_ID, duration, image, path, t_create, t_lastUpdate\n"
                    + "FROM Albums\n"
                    + "WHERE category_ID = ?";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, category_ID);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Album a = new Album();
                a.setId(rs.getInt("id"));
                a.setName(rs.getString("name"));
                a.setAuthor(rs.getString("author"));
                a.setCategory_id(rs.getInt("category_ID"));
                a.setDuration(rs.getString("duration"));
                a.setImage(rs.getString("image"));
                a.setPath(rs.getString("path"));
                a.setT_create(rs.getTimestamp("t_create"));
                a.setT_lastUpdate(rs.getTimestamp("t_lastUpdate"));
                albums.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return albums;
    }

}
