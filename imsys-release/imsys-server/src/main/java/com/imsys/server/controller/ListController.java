package com.imsys.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException;


import com.imsys.server.ImsysConstnats;
import com.imsys.server.ImsysUtil;
import com.imsys.server.data.ListValueData;
import com.imsys.server.service.ListValueService;


@RestController
@CrossOrigin(origins = ImsysConstnats.CORS_URL, maxAge = 3600)
@RequestMapping("/list")
public class ListController {

	@Autowired
	private ListValueService service;
		
	@RequestMapping("/getAll")
	public ResponseEntity getAllListValue() {
		
		  try {
			  List<ListValueData> list=  service.getAll();
			 
			  return ImsysUtil.getSuccessReponseData(list, "success");
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getSuccessReponseData(null, "fail");
		    }
		
	}
	
	
	
	@RequestMapping(value ="/getListByType/{listType}" ,  method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity getListValueByType(@RequestBody @PathVariable(value = "listType") String listType) {
		
		  try {
			 
			  List<ListValueData> list=  service.getListValueByType(listType);
			
			  return ImsysUtil.getSuccessReponseData(list, "success");
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getSuccessReponseData(null, "fail");
		    }
		
	}
	

}
