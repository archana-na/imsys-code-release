package com.imsys.server.data;

import java.io.Serializable;
import java.util.HashMap;

public class ApplicationData implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private HashMap<String, Object> data = new HashMap<String, Object>();
	
	
	 
	public ApplicationData() {
		// TODO Auto-generated constructor stub
	}
	
	public HashMap<String, Object> getData() {
		return data;
	}
	
	public void setData(HashMap<String, Object> data) {
		this.data = data;
	}
	
	public void set(String key, Object value) {
		getData().put(key, value);
	}

	
	 public Object get(String key) {
		return getData().get(key);
	}
}
