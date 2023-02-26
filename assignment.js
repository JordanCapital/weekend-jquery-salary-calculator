// Testing weather the file is linked correctly
console.log(`'This is a test'`);
$(document).ready(function(){
	$(document).ready(function () {
		// adding an event listener
		$('#employee-form').on('submit', function(event){
			event.preventDefault();
	  
			// Colecting data from the form
			const firstName = $('#first-name-input').val();
			const lastName = $('#last-name-input').val();
			const idNumber = $('#id-input').val();
			const jobTitle = $('#job-title-input').val();
			const annualSalary = parseFloat($('#salary-input').val());
	  
			// Calculate monthly Salary
			var monthlySalary = annualSalary/12;
	  
			// Append employee info to the table
			$('#employee-list tbody').append(
			  '<tr>' +
				'<td>' + firstName + '</td>' +
				'<td>' + lastName + '</td>' +
				'<td>' + idNumber + '</td>' +
				'<td>' + jobTitle + '</td>' +
				'<td class="salary">' + monthlySalary.toFixed(2) + '</td>' +
				'<td><button class="delete-btn">Delete</button></td>' +
			  '</tr>'
			);
	  
			// Clear the input fields
			$('#employee-form').trigger('reset');
	  
			// Update the monthly cost and add delete button
			updatemonthlyCost();
			$('.delete-btn').click(function(){
				$(this).closest('tr').remove();
				updatemonthlyCost();
			});
		});
	  
		// Update function
		function updatemonthlyCost() {
			const totalMonthlyCost = 0;
			$('.salary').each(function () {
				totalMonthlyCost += parseFloat($(this).text());
			});
			$('#total-monthly-cost').text('Total Monthly cost: $' + totalMonthlyCost.toFixed(2));
			if (totalMonthlyCost > 20000) {
				$('#total-monthly-cost').addClass('red-background');
			} else {
				$('#total-monthly-cost').removeClass('red-background');
			}
		}
	  });




}) 
// Create an application that records employee salaries
// Adds salaries up to report monthly costs. 
	/*'The sum of annual salary % 12 for each month'*/
//The application should have,
// input form that collects_employee
   // first name  
   // last name 
   // ID number
   // job title
   // annual salary


   // Task one: 'html' page with > inputs
	// header(h1) : Salary calculator
	 // label
	      // first name > "text"
            // last name > "text"
            // ID number > "Number"
            // job title  > "text"
            // annual salary  > "Number"
	      
    // Task Two: 'html' page with > inputs
	//  button
	       // Submit button

    // Task Three : 'html' page with > inputs
        // Table
	  //Table title 'Employee'
	    // Rows : 4;
	    // Column: 4;


// Submit Button
  // Collect the form information,
	// 'Store' the information to 'calculate monthly costs'

	   // 'append' information to the DOM and

	   // 'Clear' the input fields.

     // Using the stored information,
	   // calculate monthly costs and 'append this' to the to DOM.

		// 'If' the total monthly cost exceeds $20,000,

		// add a red background color to the total monthly cost.

//Delete button
	// Delete button that removes an employee from the DOM.
	/* For Base mode,
 	    ,9ktr it does **not** need to remove that Employee's salary from the reported total*/	
	
	
// STRETCH GOALS

// Once the employee is 'deleted',
	// 'update' the _Total Monthly Cost_ section on the page
	    // to reflect the employee's removal.
	      // _HINT:_ You will need to figure out which employee was removed,
	      // in order to subtract their salary from the total.
	      // Consider using `.text()` as a getter, or look into jQuery's `.data()` function.
	      // This is tricky!