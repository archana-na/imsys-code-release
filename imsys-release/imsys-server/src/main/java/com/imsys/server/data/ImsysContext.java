package com.imsys.server.data;

import java.util.ArrayList;
import java.util.HashMap;

import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImsysContext implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private HashMap<String, Object> inputData = new HashMap<String, Object> ();
	
	//private HashMap<String, ApplicationData>  outputData = new HashMap<String, ApplicationData> ();
	
	private HashMap<String, ArrayList<Object>> inputListData = new HashMap<String, ArrayList<Object>> ();
	//private HashMap<String, ArrayList<ApplicationData>>  outputListData = new HashMap<String, ArrayList<ApplicationData>> ();
	
	
	public HashMap<String, ArrayList<Object>> getInputListData() {
		return inputListData;
	}

	public void setInputListData(
		HashMap<String, ArrayList<Object>> inputListData) {
		this.inputListData = inputListData;
	}
	
	public HashMap<String, Object>  getInputData() {
		return inputData;
	}

	public void setInputData(HashMap<String, Object>  inputData) {
		this.inputData = inputData;
	}
	
	/*public void addInputData(String key, ApplicationData value){
		getInputData().put(key, value);
	}*/
	
	@JsonIgnore public Object getInputData(String key){
		return getInputData().get(key);
	}
}
