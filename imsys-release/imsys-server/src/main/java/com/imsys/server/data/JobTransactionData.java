package com.imsys.server.data;

import java.util.Date;

public class JobTransactionData extends ApplicationData{
	private Long id;
	private String jobCode;
	private String appliedBy;
	private Date appliedDate;
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
	public String getAppliedBy() {
		return appliedBy;
	}
	public void setAppliedBy(String appliedBy) {
		this.appliedBy = appliedBy;
	}
	public Date getAppliedDate() {
		return appliedDate;
	}
	public void setAppliedDate(Date appliedDate) {
		this.appliedDate = appliedDate;
	}
	@Override
	public String toString() {
		return "JobTransactionData [id=" + id + ", jobCode=" + jobCode + ", appliedBy=" + appliedBy + ", appliedDate="
				+ appliedDate + "]";
	}
	
}
