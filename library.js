let myLibrary = []


function Book(bookName, author, pages) {          //constructor
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {                      
    const addbooks = document.querySelector(".addBooks");
  
    function handleAddBooksClick() {
      const form = document.querySelector(".form");
      form.style.visibility = "visible";                             //displays input form on click
      form.addEventListener("submit", function(event) {                         //event listener for submit 
        event.preventDefault();                                               //stops submit button from refresshing every time we click.
        const inputBookName = document.querySelector(".bookName").value;       
        const inputAuthorName = document.querySelector(".authorName").value;
        const inputPages = document.querySelector(".pages").value;
        const books = new Book(inputBookName, inputAuthorName, inputPages);
        myLibrary = [books];
        displayBooks();
      });
  
      // Remove the click event listener from "Add Books" button
      addbooks.removeEventListener("click", handleAddBooksClick);
    }
  
    // Add the click event listener to "Add Books" button
    addbooks.addEventListener("click", handleAddBooksClick);
  }
  


addBookToLibrary();

function displayBooks(){
    const bookDisplay = document.querySelector(".bookDisplay")     //selects the black container 
    
    for (let i=0;i<myLibrary.length;i++){
        const shelf = document.createElement("div")
        shelf.classList.add("bookValues")
        bookDisplay.appendChild(shelf);
        //creating li elements to display book values.
        const div1 = document.createElement("li");              
        const div2 = document.createElement("li");
        const div3 = document.createElement("li");
        const div4 = document.createElement("li");
        const div5 = document.createElement("li");
        shelf.appendChild(div1)
        shelf.appendChild(div2)
        shelf.appendChild(div3)
        shelf.appendChild(div4)
        shelf.appendChild(div5)

        div1.textContent = myLibrary[i].bookName;
        div2.textContent = myLibrary[i].author;
        div3.textContent = myLibrary[i].pages;

        const toggle = document.createElement("input");           //checkbox for read status
        toggle.type = "checkbox";
        toggle.classList.add("read")
        div4.appendChild(toggle)

        const remove = document.createElement("button");          //delete book
        remove.classList.add("remove")
        div5.appendChild(remove);
        remove.textContent = "X"


        /*By passing the shelf element to the removeShelf function, 
            you ensure that the correct shelf is removed when the "remove" button is clicked. 
            This approach avoids the issue caused by JavaScript closures inside loops. */
        remove.addEventListener("click", function(){
            removeShelf(shelf)
        })

    }    
}


function removeShelf(shelf){        
    shelf.remove()
}



//adding remove button
//add book read status 
