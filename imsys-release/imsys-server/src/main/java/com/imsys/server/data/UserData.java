package com.imsys.server.data;

import java.math.BigInteger;

public class UserData extends ApplicationData{
	
	private Long id;
	private String userid;
	private String firstName;
	private String lastName;
	private BigInteger age;
	private String experience;
	private String qualification;
	private String qualificationDesc;
	private BigInteger contactNo;
	private String roleCode;
	private String resumePath;
	
	private String password;
	private String roleName;
	
	private String jobCode;
	private String jobName;
	
	
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUserid() {
		return userid;
	}


	public void setUserid(String userid) {
		this.userid = userid;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public BigInteger getAge() {
		return age;
	}


	public void setAge(BigInteger age) {
		this.age = age;
	}


	public String getExperience() {
		return experience;
	}


	public void setExperience(String experience) {
		this.experience = experience;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public BigInteger getContactNo() {
		return contactNo;
	}


	public void setContactNo(BigInteger contactNo) {
		this.contactNo = contactNo;
	}


	public String getRoleCode() {
		return roleCode;
	}


	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}


	public String getResumePath() {
		return resumePath;
	}


	public void setResumePath(String resumePath) {
		this.resumePath = resumePath;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRoleName() {
		return roleName;
	}


	public void setRoleName(String roleName) {
		this.roleName = roleName;
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


	public String getQualificationDesc() {
		return qualificationDesc;
	}


	public void setQualificationDesc(String qualificationDesc) {
		this.qualificationDesc = qualificationDesc;
	}


	@Override
	public String toString() {
		return "UserData [id=" + id + ", userid=" + userid + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", age=" + age + ", experience=" + experience + ", qualification=" + qualification + ", contactNo="
				+ contactNo + ", roleCode=" + roleCode + ", resumePath=" + resumePath + ", password=" + password
				+ ", roleName=" + roleName + ", jobCode=" + jobCode + ", jobName=" + jobName + "]";
	}


	
	
	
}
