package com.imsys.server.service;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.imsys.server.data.JobMasterData;
import com.imsys.server.data.JobMasterQualificationData;
import com.imsys.server.data.JobSkillSetData;
import com.imsys.server.data.JobTransactionData;

public interface JobMasterService {

	@Select("SELECT * FROM job_master")
	public List<JobMasterData> getAll();
	
	
	//@Select("SELECT m.jobName, m.jobDesc, GROUP_CONCAT(DISTINCT(l.listValue)) AS skillName,	GROUP_CONCAT(DISTINCT(lq.listValue))  AS qualificationName	FROM job_master m INNER JOIN job_master_skill s ON s.jobCode = m.jobCode INNER JOIN list_value l ON l.listCode = s.listCode	INNER JOIN job_master_qualification q ON q.jobCode = m.jobCode INNER JOIN list_value lq ON lq.listCode = q.listCode"); 
	@Select("SELECT m.jobName, m.jobDesc, GROUP_CONCAT(DISTINCT(l.listValue)) AS skillName,	GROUP_CONCAT(DISTINCT(lq.listValue))  AS qualificationName	FROM job_master m INNER JOIN job_master_skill s ON s.jobCode = m.jobCode INNER JOIN list_value l ON l.listCode = s.listCode	INNER JOIN job_master_qualification q ON q.jobCode = m.jobCode INNER JOIN list_value lq ON lq.listCode = q.listCode")
	public List<JobMasterData> getAllJobMaster();
	
	@Select("SELECT m.jobCode AS jobCode, m.jobCode AS jobDesc, t.appliedDate AS appliedDate,userdata.firstName AS appliedBy FROM job_master m INNER JOIN job_transaction t ON t.jobCode = m.jobCode  INNER JOIN user_info userdata ON userdata.userid = t.appliedBy WHERE t.appliedBy = #{userid}")
	public List<JobMasterData> getAppliedJobMasterById(String userid);
	
	@Select("SELECT m.jobCode AS jobCode, m.jobCode AS jobDesc, t.appliedDate AS appliedDate,userdata.firstName AS appliedBy FROM job_master m INNER JOIN job_transaction t ON t.jobCode = m.jobCode  INNER JOIN user_info userdata ON userdata.userid = t.appliedBy")
	public List<JobMasterData> getAppliedJobMasterAll();
	
	@Select("SELECT * FROM job_master  where jobCode = #{jobCode}")
	public List<JobMasterData> getById(String jobCode);
	
	@Select("INSERT INTO job_master(jobCode,jobName, jobDesc, assignedBy, assignedDate, skillName, qualificationName) VALUES(#{jobCode},#{jobName}, #{jobDesc}, #{assignedBy}, #{assignedDate},#{skillName}, #{qualificationName})")
	void insertJobMasterData(JobMasterData jobMasterData);
	
	//@Insert("INSERT INTO job_master_qualification(jobCode,listCode) VALUES(#{jobCode}, #{listCode})")
	@Insert({
        "<script>",
        "insert into job_master_qualification(jobCode,listCode)",
        "values ",
        "<foreach  collection='qualificationList' item='q' separator=','>",
        "( #{q.jobCode,jdbcType=VARCHAR}, #{q.listCode,jdbcType=VARCHAR})",
        "</foreach>",
        "</script>"
	})	
	void insertJobQualificationList(@Param("qualificationList") List<JobMasterQualificationData> qualification);
	
	
	//@Insert("INSERT INTO job_master_skill(jobCode,listCode) VALUES(#{jobCode}, #{listCode})")
	@Insert({
        "<script>",
        "insert into job_master_skill(jobCode,listCode)",
        "values ",
        "<foreach  collection='skillList' item='s' separator=','>",
        "( #{s.jobCode,jdbcType=VARCHAR}, #{s.listCode,jdbcType=VARCHAR})",
        "</foreach>",
        "</script>"
	})	
	void insertJobSkillList(@Param("skillList") List<JobSkillSetData> qualification);
	
	
	@Select("SELECT * FROM job_master  where jobCode = #{jobCode}")
	public List<JobMasterData> jobWithQualificationList();


	@Insert("insert into job_transaction (jobCode, appliedBy, appliedDate) values (#{jobCode},#{appliedBy}, #{appliedDate})")
	public void saveJobTransactionData(JobTransactionData jobTransactionData);
	
}
