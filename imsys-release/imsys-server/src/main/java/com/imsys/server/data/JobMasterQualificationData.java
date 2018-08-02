package com.imsys.server.data;

import java.util.Date;

public class JobMasterQualificationData extends ApplicationData{

	private Long id;
	private String jobCode;
	private String listCode;
	private String listValue;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getJobCode() {
		return jobCode;
	}
	public void setJobCode(String jobCode) {
		this.jobCode = jobCode;
	}
	public String getListCode() {
		return listCode;
	}
	public void setListCode(String listCode) {
		this.listCode = listCode;
	}
	public String getListValue() {
		return listValue;
	}
	public void setListValue(String listValue) {
		this.listValue = listValue;
	}
	@Override
	public String toString() {
		return "JobMasterQualificationData [id=" + id + ", jobCode=" + jobCode + ", listCode=" + listCode
				+ ", listValue=" + listValue + "]";
	}
	

}


