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

    public ArrayList<Album> getAllWithUser(int user_ID) {
        ArrayList<Album> albums = new ArrayList<>();
        try {
            String sql = "SELECT Albums.id AS album_ID, name, author, category_ID,"
                    + " duration, image, path, t_create, Albums.t_lastUpdate, liked.id AS liked_id\n"
                    + "FROM Albums LEFT JOIN liked ON Albums.id = liked.album_ID AND liked.user_ID = ?";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, user_ID);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Album a = new Album();
                a.setId(rs.getInt("album_ID"));
                a.setName(rs.getString("name"));
                a.setAuthor(rs.getString("author"));
                a.setCategory_id(rs.getInt("category_ID"));
                a.setDuration(rs.getString("duration"));
                a.setImage(rs.getString("image"));
                a.setPath(rs.getString("path"));
                a.setT_create(rs.getTimestamp("t_create"));
                a.setT_lastUpdate(rs.getTimestamp("t_lastUpdate"));
                if (rs.getInt("liked_id") != 0) {
                    a.setLiked(true);
                }
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

    public ArrayList<Album> getAlbumsOfCategoryWithUser(int category_ID, int user_ID) {
        ArrayList<Album> albums = new ArrayList<>();
        try {
            String sql = "SELECT Albums.id AS album_ID, name, author, category_ID,"
                    + " duration, image, path, t_create, Albums.t_lastUpdate, liked.id AS liked_id\n"
                    + "FROM Albums LEFT JOIN liked ON Albums.id = liked.album_ID AND liked.user_ID = ?\n"
                    + "WHERE category_ID = ?";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, category_ID);
            st.setInt(2, user_ID);
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
                if (rs.getInt("liked_id") != 0) {
                    a.setLiked(true);
                }
                albums.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return albums;
    }
    
    public void setLiked(int id,int total_Like, ArrayList<Album> albums){        
        for (int i = 0; i < albums.size(); i++) {
            if (albums.get(i).getId() == id) {
                albums.get(i).setTotal_liked(total_Like);
                return;
            }
        }
    }

    public void setLiked(ArrayList<Album> albums) {
        try {
            String sql = "SELECT Albums.id, COUNT(liked.id) AS total_Like\n"
                    + "FROM Albums LEFT JOIN liked ON Albums.id = liked.album_ID\n"
                    + "GROUP BY Albums.id";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            try {
                if (rs.next()) {
                    int album_ID = rs.getInt("id");
                    int total_Like = rs.getInt("total_Like");
                    setLiked(album_ID, total_Like, albums);
                }
            } catch (Exception e) {
            }
        } catch (Exception e) {
        }
    }

}
