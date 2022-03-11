
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
//        AlbumDAO ad = new AlbumDAO();
//        ArrayList<Album> al = ad.getAll();
//        ad.setLiked(al);
//        for (int i = 0; i < al.size(); i++) {
//            System.out.print(al.get(i).getName());
//            System.out.print(" - ");
//            System.out.println(al.get(i).getTotal_liked());
//        }

        CategoryDAO cd = new CategoryDAO();
        ArrayList<Category> cl = cd.getAll();
        for (int i = 0; i < cl.size(); i++) {
            System.out.println(cl.get(i).getId());
            System.out.println(cl.get(i).getName());
            System.out.println(cl.get(i).getTotal_Album());
            System.out.println(cl.get(i).getTotal_Liked());
            System.out.println(cl.get(i).getTotal_User());
            System.out.println("--------------------------");
        }
        
        UserDAO ud = new UserDAO();
        ArrayList<User> users = ud.getAll();
        for (int i = 0; i < users.size(); i++) {
            User get = users.get(i);
            System.out.println(get.getUsername());
            
        }

//        int liked_id = 3;
//        String i = String.valueOf(liked_id);
//        System.out.println(i == null);

//        System.out.println(String.valueOf(2));
    }
}
