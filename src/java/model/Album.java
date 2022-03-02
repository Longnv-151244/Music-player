/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.sql.Timestamp;
import java.util.Objects;

/**
 *
 * @author dclon
 */
public class Album {
    private int id;
    private String name;
    private String author;
    private int category_id;
    private String duration;
    private String image;
    private String path;
    private Timestamp t_create;
    private Timestamp t_lastUpdate;

    public Album() {
    }

    public Album(String name, String author, int category_id, String duration, String image, String path, Timestamp t_create, Timestamp t_lastUpdate) {
        this.name = name;
        this.author = author;
        this.category_id = category_id;
        this.duration = duration;
        this.image = image;
        this.path = path;
        this.t_create = t_create;
        this.t_lastUpdate = t_lastUpdate;
    }

    public Album(int id, String name, String author, int category_id, String duration, String image, String path, Timestamp t_create, Timestamp t_lastUpdate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.category_id = category_id;
        this.duration = duration;
        this.image = image;
        this.path = path;
        this.t_create = t_create;
        this.t_lastUpdate = t_lastUpdate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getCategory_id() {
        return category_id;
    }
    
    public String getCategory(){
        switch(category_id){
            case 1: 
                return "Vpop";
            case 2: 
                return "US-UK";
            case 3: 
                return "Lofi";
        }
        return null;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getImage() {
        return image;
    }
    
    public void setImage(String image) {
        image = image.replace('\\', '/');
        this.image = image;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Timestamp getT_create() {
        return t_create;
    }

    public void setT_create(Timestamp t_create) {
        this.t_create = t_create;
    }

    public Timestamp getT_lastUpdate() {
        return t_lastUpdate;
    }

    public void setT_lastUpdate(Timestamp t_lastUpdate) {
        this.t_lastUpdate = t_lastUpdate;
    }
    
    
   
}
