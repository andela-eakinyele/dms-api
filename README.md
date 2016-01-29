# dms_api
REST API for Document Management System

<a href="https://codeclimate.com/github/andela-eakinyele/dms-api"><img src="https://codeclimate.com/github/andela-eakinyele/dms-api/badges/gpa.svg" /></a>

# Description
This api is utilized for managing documents, users and roles for a simple project. It utilizes mongodb document models, and is built on an express server. 

## Usage
The usage of the application is as follows:

###  User Management
1.  Users can be created by post requests to /dmsapi/users 
```
Note : Admin user must be created first 
            Admin user then creates all roles
```
2.  Users are retrieved and updated via get and put requests to /dmsapi/(userid)
3.  Admin users can only be created by Admin users

### User Priviliges (Authenticated)
1.  Users can create documents and assign access roles
2.  Users can view and update documents with user role defined
3.  Users can delete documents with sole access (i.e user and Admin)
4.  Users cannot delete documents with shared access
5.  Non Authenticated users have no CRUD access
6.  Admin user have all CRUD  privileges

##  Contributing
I'd love if you contribute to the source code and make the API even better than it is
If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to the [GitHub Repository](https://github.com/andela-eakinyele/issues). Even better you can submit a Pull Request with a fix.
