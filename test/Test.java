
import dal.SliderDAO;
import java.util.ArrayList;
import model.Method;
import model.Slider;

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
        Method md = new Method();
        SliderDAO sd = new SliderDAO();
        ArrayList<Slider> sliders = sd.getAll();
//        System.out.println(sliders);
        System.out.println(sliders.get(1).getAlbum().getName());
    }
}
