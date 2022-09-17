package project.code.response;

public class ResponseFile {
	  private int teacher;

  public ResponseFile(int teacher, String name, String url, String type, long size) {
		super();
		this.teacher = teacher;
		this.name = name;
		this.url = url;
		this.type = type;
		this.size = size;
	}

public int getTeacher() {
		return teacher;
	}

	public void setTeacher(int teacher) {
		this.teacher = teacher;
	}

private String name;
  private String url;
  private String type;
  private long size;

  public ResponseFile(String name, String url, String type, long size) {
    this.name = name;
    this.url = url;
    this.type = type;
    this.size = size;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public long getSize() {
    return size;
  }

  public void setSize(long size) {
    this.size = size;
  }

}
