package com.imsys.server.service;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.imsys.server.data.UserData;

public interface UserDetailService {

	@Select("SELECT * FROM user_info")
	public List<UserData> getAll();
	
	
	@Select("SELECT * FROM user_info where userid = #{userid}")
	public List<UserData> getByUserId(String userid);
	
	//contactNo, userid, firstName
	@Insert("INSERT INTO user_info(userid,firstName,contactNo, roleCode) VALUES(#{userid}, #{firstName}, #{contactNo}, #{roleCode})")
	void insert(UserData user);
	
	@Update("UPDATE user_info SET age=#{age},experience=#{experience},qualification=#{qualification},qualificationDesc=#{qualificationDesc}, resumePath= #{resumePath} WHERE userid = #{userid} ")
	void update(UserData user);
	
	//@Update("UPDATE users SET userName=#{userName},nick_name=#{nickName} WHERE id =#{id}")
}
