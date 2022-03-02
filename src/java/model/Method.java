/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import dal.ActionDAO;
import dal.AlbumDAO;
import dal.BackgroundDAO;
import dal.CategoryDAO;
import dal.HistoryDAO;
import dal.LikeDAO;
import dal.RoleDAO;
import dal.SliderDAO;
import dal.UserDAO;
import java.util.ArrayList;

/**
 *
 * @author dclon
 */
public class Method {

    private ArrayList<Album> albums;
    AlbumDAO ald = new AlbumDAO();

    public Method() {
        this.albums = ald.getAll();
    }

    public ArrayList<Album> getAlbums() {
        return albums;
    }

    public Album getAlbumByID(int id) {
        for (int i = 0; i < albums.size(); i++) {
            if (id == albums.get(i).getId()) {
                return albums.get(i);
            }
        }
        return null;
    }
}
