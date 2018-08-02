import { environment } from '../environments/environment.prod';


export class AppSettings {
	
	
	
	public static SERVER_URL =  environment.server_host_ip;//"http://192.168.1.35:8082/" //"http://192.168.1.35:8081/api/"; //"http://192.168.1.123:8000/api/"; 

	public static REGISTER = "security/register";

	public static LOGIN = "security/login";
	public static GET_USER_DETAIL_BY_ID = "security/user/";
	public static LIST_GET_BY_TYPE = "list/getListByType/";
	public static LIST_GET_All = "list/getAll";

	public static CREATE_NEW_JOB = "job/createjobmaster";
	public static LIST_GET_All_JOB = "job/getAllJobMasterData";
	public static APPLY_JOB = "security/applyJob";
	public static GET_APPLY_JOB_BY_ID = "job/getAppliedJobsById/";
	

	public static GET_APPLY_JOB_ALL = "job/getAppliedJobsAll";
}
