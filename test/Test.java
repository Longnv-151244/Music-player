
import dal.HistoryDAO;
import java.util.ArrayList;
import model.History;

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
        HistoryDAO hd = new HistoryDAO();
        ArrayList<History> hl = hd.getAll();
        for (int i = 0; i < hl.size(); i++) {
            History get = hl.get(i);
            System.out.println(get.getUser_name());
        }
    }
}
