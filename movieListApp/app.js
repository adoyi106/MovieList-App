document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector(".movie_list");
    
    const form = document.forms;

    //delete element list
    list.addEventListener('click', function(e) {
        if (e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //create new Element
    const addForm = form['addMovies'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
    
        

    //create form
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    
    const movieName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add text content
     movieName.textContent = value;
     deleteBtn.textContent = "delete";
 
     //add classes
     movieName.classList.add("name");
     deleteBtn.classList.add("delete");
     

     //append to DOM
     li.appendChild(movieName);
     li.appendChild(deleteBtn);
     list.appendChild(li);
     
     
    });

}  )