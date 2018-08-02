package com.imsys.server.data;


import java.util.Date;

public class SecurityData extends ApplicationData {
	
	private Long id;
	private String userid;
	private String password;
	private Boolean isLoggedIn;
	private Date lastLoginTime;
	
	public SecurityData() {
		//super();
	}
	
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getIsLoggedIn() {
		return isLoggedIn;
	}
	public void setIsLoggedIn(Boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}
	public Date getLastLoginTime() {
		return lastLoginTime;
	}
	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	@Override
	public String toString() {
		return "SecurityData [id=" + id + ", userid=" + userid + ", password=" + password + ", isLoggedIn="
				+ isLoggedIn + ", lastLoginTime=" + lastLoginTime + "]";
	}

	
}
