/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.text.Normalizer;
import java.util.Date;
import java.util.regex.Pattern;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author dclon
 */
public class MyMethod {

    public MyMethod() {
    }

    public static String getFileType(String fileName) {
        int i = fileName.lastIndexOf(".");
        return fileName.substring(i, fileName.length());
    }

    public static String removeAccent(String s) {
        String temp = Normalizer.normalize(s, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(temp).replaceAll("");
    }

    public static String formatName(String name) {
        String s_temp = removeAccent(name);
        s_temp = s_temp.toLowerCase();
        s_temp = s_temp.replace(' ', '-');
        s_temp = s_temp.replace('đ', 'd');
        s_temp = s_temp.replace('ê', 'e');
        s_temp = s_temp.replace('ô', 'o');
        s_temp = s_temp.replace('â', 'a');
        return s_temp;
    }

    public static String getUpload(Part file, String name, String pathAddressUpload) throws IOException {
        String fileName = file.getSubmittedFileName();
        String fileType = getFileType(fileName);
        String uploadPath = null;
        if (fileName != "") {
            uploadPath = pathAddressUpload + formatName(name) + fileType;
            try (FileOutputStream fos = new FileOutputStream(uploadPath)) {
                InputStream is = file.getInputStream();
                byte[] data = new byte[is.available()];
                is.read(data);
                fos.write(data);
            }
        }
        String val = uploadPath.replaceFirst("C:/Users/dclon/OneDrive/Desktop/Web_design/Music-player_PRJ301/web", ".");
        return val;
    }

    public static String getFolder(int category_ID) {
        switch (category_ID) {
            case 1:
                return "vpop";
            case 2:
                return "us-uk";
            case 3:
                return "lofi";
        }
        return null;
    }

    public static Timestamp getT_now() {
        Date nowDate = new Date();
        Timestamp now = new Timestamp(nowDate.getTime());
        return now;
    }

    public static String formatNVarchar(String nvarchar) throws IOException {
        String byteString = nvarchar;
        byte ptextString[] = byteString.getBytes("ISO-8859-1");
        return new String(ptextString, "UTF-8");
    }

    public static boolean checkInput(String input) {
        if (input == null || input.trim().length() == 0) {
            return false;
        }
        return true;
    }

    public static void removeAllCookies(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cooky : cookies) {
                cooky.setValue(null);
                cooky.setMaxAge(0);
                response.addCookie(cooky);
            }
        }
    }

    public static void removeCooky(HttpServletRequest request, HttpServletResponse response, String c_name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cooky : cookies) {
                if (cooky.getName().equals(c_name)) {
                    cooky.setValue(null);
                    cooky.setMaxAge(0);
                    response.addCookie(cooky);
                    break;
                }
            }
        }
    }
    
    public static String getValueCooky(HttpServletRequest request, HttpServletResponse response, String cooky_name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cooky : cookies) {
                if (cooky.getName().equals(cooky_name)) {
                    return cooky.getValue();
                }
            }
        }
        return null;
    }
}
