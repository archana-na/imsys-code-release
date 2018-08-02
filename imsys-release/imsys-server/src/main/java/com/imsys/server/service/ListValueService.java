package com.imsys.server.service;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.imsys.server.data.ListValueData;


public interface ListValueService {

	@Select("SELECT * FROM list_value")
	public List<ListValueData> getAll();
	
	@Select("SELECT * FROM list_value where listType = #{code}")
	public List<ListValueData> getListValueByType(String code);
}
