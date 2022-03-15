
import dal.AlbumDAO;
import dal.CategoryDAO;
import dal.UserDAO;
import java.util.ArrayList;
import model.Album;
import model.Category;
import model.User;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author dclon
 */
public class Test {

    public static void main(String[] args) {
        AlbumDAO ad = new AlbumDAO();
        ArrayList<Album> albums_Vpop = ad.getAlbumsOfCategory(1);
//        for (int i = 0; i < albums_Vpop.size(); i++) {
//            System.out.println(albums_Vpop.get(0).getTotal_liked());
//        }
        ad.setLiked(albums_Vpop);
        for (int i = 0; i < albums_Vpop.size(); i++) {
            System.out.println(albums_Vpop.get(i).getTotal_liked());
        }

//        int liked_id = 3;
//        String i = String.valueOf(liked_id);
//        System.out.println(i == null);
//        System.out.println(String.valueOf(2));
    }
}
