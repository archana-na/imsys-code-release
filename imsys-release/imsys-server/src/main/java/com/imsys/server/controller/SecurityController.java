package com.imsys.server.controller;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.multipart.MultipartFile;


import com.imsys.server.ImsysConstnats;
import com.imsys.server.ImsysUtil;
import com.imsys.server.data.JobTransactionData;
import com.imsys.server.data.SecurityData;
import com.imsys.server.data.UserData;
import com.imsys.server.service.JobMasterService;
import com.imsys.server.service.SecurityService;
import com.imsys.server.service.UserDetailService;


@RestController

@CrossOrigin(origins = ImsysConstnats.CORS_URL, maxAge = 3600)
@RequestMapping("/security")
public class SecurityController {

	@Autowired
	private SecurityService secService;
	
	@Autowired
	private UserDetailService userService;
	
	@Autowired
	private JobMasterService jobService;
	
	 @Autowired
	private HttpServletRequest request;
	 
	@RequestMapping("/getAll")
	public ResponseEntity getUsers() {
		
		  try {
			  List<SecurityData> allusers=  secService.getAll();
			  
			  return ImsysUtil.getSuccessReponseData(allusers, ImsysConstnats.MSG_SUCCESS);
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
	
	@RequestMapping(value ="/register" ,  method = RequestMethod.POST,  consumes = "application/json")
	public ResponseEntity register(@RequestBody UserData userData) {
		
		  try {
			  //System.err.println("userData.getUserid()----"+userData.getUserid());
			  List<SecurityData> data = secService.getById(userData.getUserid());
			
			  if(data.size() == 0) {
				  userService.insert(userData);
				  SecurityData securityData = new SecurityData();
				  securityData.setUserid(userData.getUserid());
				  securityData.setPassword(userData.getPassword());
				  secService.insert(securityData);
				  return ImsysUtil.getSuccessReponseData(null, ImsysConstnats.MSG_REGISTER_SUCCESS);
			  }else {
				  return ImsysUtil.getValidationReponseData(null, "1001", ImsysConstnats.MSG_REGISTER_ALREADY);
			  }
			  
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
	
	@RequestMapping(value ="/login" ,  method = RequestMethod.POST,  consumes = "application/json")
	public ResponseEntity loginValidate(@RequestBody SecurityData data) {
		
		  try {
			  List<SecurityData> secData =  secService.login(data);
			  if(secData.size() > 0) {
				  //System.err.println("allusers----"+secData);
				  List<UserData>  list = userService.getByUserId(data.getUserid());
				  return ImsysUtil.getSuccessReponseData(list, ImsysConstnats.MSG_SUCCESS);
			  }else {
				  return ImsysUtil.getValidationReponseData(null, "1002", ImsysConstnats.MSG_LOGIN_INVALID);
			  }
			
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    }
		
	}
	

	@RequestMapping(value ="/user/{email}" ,  method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity getListValueByType(@RequestBody @PathVariable(value = "email") String userid) {
		
		  try {
			 
			  List<UserData> list=  userService.getByUserId(userid);
			  return ImsysUtil.getSuccessReponseData(list, "success");
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getSuccessReponseData(null, "fail");
		    }
		
	}
	
	@RequestMapping(value ="/applyJob" ,  method = RequestMethod.POST)
	public ResponseEntity applyJob(@RequestParam("file") MultipartFile fileInput, @RequestParam("userid") String userid, @RequestParam("age") String age,
			@RequestParam("experience") String experience, @RequestParam("qualification") String qualification, @RequestParam("qualificationDesc") String qualificationDesc,
			@RequestParam("jobCode") String jobCode) {
		
		  try {
			  //System.err.println("age----"+age);
			  //System.err.println("file----"+fileInput);
			  BigInteger parsedAge = new BigInteger(age);// Integer.parseInt(age);
			  if (!fileInput.isEmpty()) { 
				  String uploadsDir = "/resume/";
				  String realPathtoUploads =  request.getServletContext().getRealPath(uploadsDir);
				  if(! new File(realPathtoUploads).exists())
                  {
                      new File(realPathtoUploads).mkdir();
                  }
				  
				  //System.err.println("realPathtoUploads = {}"+ realPathtoUploads);
				  //File file = new File( "C:\\MbankWorkspace\\coda\\workspace\\SERVER" + File.separator+fileInputDetails.getFileName()); 
			//File.separator+FOLDER+File.separator+category+File.separator+fileInputDetails.getFileName());
					
				  String orgName = fileInput.getOriginalFilename();
                  String filePath = realPathtoUploads + orgName;
                  File dest = new File(filePath);
                  fileInput.transferTo(dest);
                  
                  UserData userData = new UserData();
                  userData.setUserid(userid);
                  userData.setAge(parsedAge);
                  userData.setExperience(experience);
                  userData.setQualification(qualification);
                  userData.setQualificationDesc(qualificationDesc);
                  userData.setResumePath(filePath);
                  userService.update(userData);
                  
                  JobTransactionData jobTransactionData = new JobTransactionData();
                  jobTransactionData.setAppliedBy(userid);
                  jobTransactionData.setJobCode(jobCode);
                  jobTransactionData.setAppliedDate(new Date());
                  jobService.saveJobTransactionData(jobTransactionData);
				 
				  return ImsysUtil.getSuccessReponseData(null, ImsysConstnats.JOB_APPLY_SUCCESS);
			  }else {
				  return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
			  }
			
		    	
		    }catch(HttpServerErrorException e) {
		    	e.getStatusCode();
		    	return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
		    } catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return ImsysUtil.getErrorReponseData(null, ImsysConstnats.MSG_FAIL);
			}
		
	}

	
}
