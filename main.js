const myModal = bootstrap.Modal.getOrCreateInstance('#exampleModal');

//modal shows on load up page
window.addEventListener('DOMContentLoaded', () => {
  myModal.show();
});

function validation(formid){
  //perform validations
  if (valid)
      $("#myForm").submit();
  else
     alert("Validation error");
  }


    