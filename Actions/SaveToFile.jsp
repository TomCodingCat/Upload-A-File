<%@  page language="java" import="java.io.*,java.util.*,org.apache.commons.fileupload.*,org.apache.commons.fileupload.disk.*,org.apache.commons.fileupload.servlet.*"%><%!
%><%
	// Create a factory for disk-based file items
	DiskFileItemFactory factory = new DiskFileItemFactory();

	// Configure a repository (to ensure a secure temp location is used)
	ServletContext servletContext = this.getServletConfig().getServletContext();
	File repository = (File) servletContext.getAttribute("javax.servlet.context.tempdir");
	factory.setRepository(repository);


	// Set factory constraints
	factory.setSizeThreshold(1000000000);// Sets the size threshold beyond which files are written directly to disk.

	// Create a new file upload handler
	ServletFileUpload upload = new ServletFileUpload(factory);

	// Set overall request size constraint
	upload.setSizeMax(-1);

	// Parse the request
	List<FileItem> items = upload.parseRequest(request);

	// Process the uploaded items
	Iterator<FileItem> iter = items.iterator();
	while (iter.hasNext()) {
		FileItem item = iter.next();
		// Process a regular form field
if (item.isFormField()) {
	String fieldName = item.getFieldName();
	String value = item.getString();
	String uploadedFieldName = "abc";
	if(fieldName.equals(uploadedFieldName)){
		File commentFile = new File(application.getRealPath("/") + "comment.txt");
		if(!commentFile.exists())
		{
			boolean result = commentFile.createNewFile();
		}		
		FileWriter commentfileOut = new FileWriter(commentFile);		
		commentfileOut.write(value);
		commentfileOut.flush();
		commentfileOut.close();
	}	
} 
		// Process a file upload
		else {
			String fieldName = item.getFieldName();
			String fileName = item.getName();
			String contentType = item.getContentType();
			boolean isInMemory = item.isInMemory();
			long sizeInBytes = item.getSize();
			if(fileName!=null && sizeInBytes!=0){			
				File uploadedFile = new File(application.getRealPath("/") + fileName);
				if(!uploadedFile.exists())
				{
					boolean result = uploadedFile.createNewFile();
					System.out.println("File create result:"+result);
				}			
				try {
					item.write(uploadedFile);
				} 
				catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}
%>