package com.imsys.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException;

import com.imsys.server.ImsysConstnats;
import com.imsys.server.ImsysUtil;
import com.imsys.server.data.ApplicationData;
import com.imsys.server.data.ImsysContext;
import com.imsys.server.data.JobMasterData;
import com.imsys.server.service.JobMasterService;

@RestController

@CrossOrigin(origins = ImsysConstnats.CORS_URL, maxAge = 3600)
@RequestMapping("/job")
public class JobController {

	@Autowired
	private JobMasterService service;
	
	@RequestMapping("/getAllJobMasterData")
	public ResponseEntity getAllJobs() {
		
		  try {
			  List<JobMasterData> all=  service.getAll();
			
			  return ImsysUtil.getSuccessReponseData(all, ImsysConstnats.MSG_SUCCESS);
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
	
	@RequestMapping("/getAppliedJobsAll")
	public ResponseEntity getAppliedJobsAll() {
		
		  try {
			  List<JobMasterData> all=  service.getAppliedJobMasterAll();
			
			  return ImsysUtil.getSuccessReponseData(all, ImsysConstnats.MSG_SUCCESS);
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
	
	@RequestMapping("/getAppliedJobsById/{email}")
	public ResponseEntity getAppliedJobsById(@RequestBody @PathVariable(value = "email") String userid) {
		
		  try {
			  List<JobMasterData> all=  service.getAppliedJobMasterById(userid);
			
			  return ImsysUtil.getSuccessReponseData(all, ImsysConstnats.MSG_SUCCESS);
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
	
	@RequestMapping(value ="/createjobmaster" ,  method = RequestMethod.POST,  consumes = "application/json")
	public ResponseEntity create(@RequestBody JobMasterData masterData) {
		
		  try {
			  //System.err.println("create----"+masterData);
			 
			  service.insertJobQualificationList(masterData.getJobQulificationList());
			  service.insertJobSkillList(masterData.getJobSkillList());
			  service.insertJobMasterData(masterData);
			  return ImsysUtil.getSuccessReponseData(null, ImsysConstnats.JOB_REGISTER_SUCCESS);
			
			  
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
}
