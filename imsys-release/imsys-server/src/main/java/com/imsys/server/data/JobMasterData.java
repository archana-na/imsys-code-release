package com.imsys.server.data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class JobMasterData extends ApplicationData{
	private Long id;
	private String jobCode;
	private String jobName;
	private String jobDesc;
	private String assignedBy;
	private Date assignedDate;
	
	private String skillCode;
	private String skillName;
	
	private String qualificationCode;
	private String qualificationName;
	
	private String appliedBy;
	private String appliedDate;
	
	private ArrayList<JobMasterQualificationData> jobQulificationList = new ArrayList<>();
	private ArrayList<JobSkillSetData> jobSkillList = new ArrayList<>();
	
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
	public String getJobName() {
		return jobName;
	}
	public void setJobName(String jobName) {
		this.jobName = jobName;
	}
	public String getJobDesc() {
		return jobDesc;
	}
	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}
	public String getAssignedBy() {
		return assignedBy;
	}
	public void setAssignedBy(String assignedBy) {
		this.assignedBy = assignedBy;
	}
	public Date getAssignedDate() {
		return assignedDate;
	}
	public void setAssignedDate(Date assignedDate) {
		this.assignedDate = assignedDate;
	}
	public String getSkillCode() {
		return skillCode;
	}
	public void setSkillCode(String skillCode) {
		this.skillCode = skillCode;
	}
	public String getSkillName() {
		return skillName;
	}
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	public String getQualificationCode() {
		return qualificationCode;
	}
	public void setQualificationCode(String qualificationCode) {
		this.qualificationCode = qualificationCode;
	}
	public String getQualificationName() {
		return qualificationName;
	}
	public void setQualificationName(String qualificationName) {
		this.qualificationName = qualificationName;
	}
	public String getAppliedBy() {
		return appliedBy;
	}
	public void setAppliedBy(String appliedBy) {
		this.appliedBy = appliedBy;
	}
	public String getAppliedDate() {
		return appliedDate;
	}
	public void setAppliedDate(String appliedDate) {
		this.appliedDate = appliedDate;
	}
	public ArrayList<JobMasterQualificationData> getJobQulificationList() {
		return jobQulificationList;
	}
	public void setJobQulificationList(ArrayList<JobMasterQualificationData> jobQulificationList) {
		this.jobQulificationList = jobQulificationList;
	}
	public ArrayList<JobSkillSetData> getJobSkillList() {
		return jobSkillList;
	}
	public void setJobSkillList(ArrayList<JobSkillSetData> jobSkillList) {
		this.jobSkillList = jobSkillList;
	}
	@Override
	public String toString() {
		return "JobMasterData [id=" + id + ", jobCode=" + jobCode + ", jobName=" + jobName + ", jobDesc=" + jobDesc
				+ ", assignedBy=" + assignedBy + ", assignedDate=" + assignedDate + ", skillCode=" + skillCode
				+ ", skillName=" + skillName + ", qualificationCode=" + qualificationCode + ", qualificationName="
				+ qualificationName + ", appliedBy=" + appliedBy + ", appliedDate=" + appliedDate
				+ ", jobQulificationList=" + jobQulificationList + ", jobSkillList=" + jobSkillList + "]";
	}
	
	
	
}
