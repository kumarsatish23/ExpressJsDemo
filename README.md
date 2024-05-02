# Demo
In terminal
```bash
npm i
```
Then in postman test out the api's
1. **Get All Employees:**
    - Method: GET
    - URL: `http://localhost:3000/employees`

2. **Get Employee by ID:**
    - Method: GET
    - URL: `http://localhost:3000/employees/{employee_id}`
    - Replace `{employee_id}` with the ID of the employee you want to retrieve.

3. **Create New Employee:**
    - Method: POST
    - URL: `http://localhost:3000/employees`
    - Body (JSON):
      ```json
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "department": "IT"
      }
      ```

4. **Update Employee:**
    - Method: PUT
    - URL: `http://localhost:3000/employees/{employee_id}`
    - Replace `{employee_id}` with the ID of the employee you want to update.
    - Body (JSON):
      ```json
      {
        "firstName": "Updated First Name",
        "lastName": "Updated Last Name",
        "email": "updated.email@example.com",
        "department": "Updated Department"
      }
      ```

5. **Delete Employee:**
    - Method: DELETE
    - URL: `http://localhost:3000/employees/{employee_id}`
    - Replace `{employee_id}` with the ID of the employee you want to delete.

You can import these requests into Postman by following these steps:

1. Open Postman.
2. Click on the "Import" button in the top-left corner.
3. Select "Import From Link".
4. Paste the URLs provided above for each request and click "Continue".
5. After importing, you can modify the requests as needed and test them against your API endpoints.

Make sure your server is running (`npm run dev`) while testing these requests in Postman.