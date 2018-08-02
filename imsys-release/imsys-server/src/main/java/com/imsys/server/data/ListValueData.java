package com.imsys.server.data;

public class ListValueData extends ApplicationData{

	private Long id;
	private String listType;
	private String listCode;
	private String listValue;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getListType() {
		return listType;
	}
	public void setListType(String listType) {
		this.listType = listType;
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
		return "ListValueData [id=" + id + ", listType=" + listType + ", listCode=" + listCode + ", listValue="
				+ listValue + "]";
	}
}
