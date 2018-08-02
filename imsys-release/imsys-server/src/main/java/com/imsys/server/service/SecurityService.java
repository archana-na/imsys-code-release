package com.imsys.server.service;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import com.imsys.server.data.SecurityData;

public interface SecurityService {

	@Select("SELECT * FROM security")
	public List<SecurityData> getAll();

	@Select("SELECT * FROM security  where userid = #{userid}")
	public List<SecurityData> getById(String userid);
	
	@Select("SELECT * FROM security  where userid = #{userid} and password= #{password}")
	public List<SecurityData> login(SecurityData data);
	
	@Insert("INSERT INTO security(userid,password) VALUES(#{userid}, #{password})")
	void insert(SecurityData sec);
}
