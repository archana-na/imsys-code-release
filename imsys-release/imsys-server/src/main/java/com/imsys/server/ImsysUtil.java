package com.imsys.server;

import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.google.gson.Gson;
import com.imsys.server.data.ApplicationData;
import com.imsys.server.data.SecurityData;

public class ImsysUtil {

	private static final Gson gson = new Gson();
	static HttpHeaders headers = new HttpHeaders();
	
	public static ResponseEntity getSuccessReponseData(List data, String message) {
		HashMap<Object, Object> map = new HashMap<>();
		System.out.println(data);
		map.put("data", data);
		map.put("returnCode", "0000");
		map.put("returMsg", message);
		
		return new ResponseEntity(map, headers, HttpStatus.OK);
	}
	
	public static ResponseEntity getValidationReponseData(List data, String returnCode ,String message) {
		HashMap<Object, Object> map = new HashMap<>();
		System.out.println(data);
		map.put("data", data);
		map.put("returnCode", returnCode);
		map.put("returMsg", message);
		
		return new ResponseEntity(map, headers, HttpStatus.OK);
	}
	
	public static ResponseEntity getErrorReponseData(List data, String message) {
		HashMap map = new HashMap<>();
		map.put("data", data);
		map.put("returnCode", "9999");
		map.put("returMsg", message);
		return new ResponseEntity<String>(gson.toJson("failed"), headers, HttpStatus.FORBIDDEN);
	}
}
