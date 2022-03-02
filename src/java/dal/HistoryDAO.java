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
import model.History;

/**
 *
 * @author dclon
 */
public class HistoryDAO extends BaseDAO<History> {

    @Override
    public ArrayList<History> getAll() {
        ArrayList<History> histories = new ArrayList<>();
        try {
            String sql = "SELECT id, [user_ID], album_ID, t_lastUpdate, action_ID\n"
                    + "FROM history_Album";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                History h = new History();
                h.setId(rs.getInt("id"));
                h.setUser_ID(rs.getInt("user_ID"));
                h.setAlbum_ID(rs.getInt("album_ID"));
                h.setT_lastUpdate(rs.getTimestamp("t_lastUpdate"));
                h.setAction_ID(rs.getInt("action_ID"));
                histories.add(h);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return histories;
    }

}
