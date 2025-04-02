// Initialize Supabase
const { createClient } = window.supabase;

// Your Supabase credentials (replace these with your actual values)
const SUPABASE_URL = "https://sokddhnjlhawmatiugwc.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNva2RkaG5qbGhhd21hdGl1Z3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDc2MTYsImV4cCI6MjA1NDQyMzYxNn0.Fb2q1oPNxAzd2ztgJKxtbgPdxsOpXftDRuqEYyKOsaw"; 

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to show a modal and dim the background
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.getElementById("overlay").style.display = "block";  // Dim background
}

// Function to close a modal and restore brightness
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";

    // Check if any other modals are still open
    let openModals = document.querySelectorAll(".modal[style*='display: block']");
    if (openModals.length === 0) {
        document.getElementById("overlay").style.display = "none"; // Restore brightness if no modals are open
    }
}

// Attach event listeners to all close buttons
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function () {
        let modal = this.closest(".modal");
        if (modal) closeModal(modal.id);
    });
});


// Attach close event to all modal close buttons
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function () {
        let modal = this.closest(".modal");
        if (modal) {
            closeModal(modal.id);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    fetchLibraries();
});


document.addEventListener("DOMContentLoaded", function () {
    let manageLibraryBtn = document.getElementById("manage-library-btn");
    let manageLibraryModal = document.getElementById("manage-library-modal");
    let isbnInput = document.getElementById("isbn-input");

    if (!manageLibraryBtn || !manageLibraryModal || !isbnInput) {
        console.error("❌ ERROR: One or more modal elements not found.");
        return;
    }

    console.log("✅ Found Manage Library elements. Adding event listeners.");

    // Show modal when clicking 'Manage Library' button
    manageLibraryBtn.addEventListener("click", function () {
        manageLibraryModal.style.display = "block";
        console.log("📖 Manage Library Modal Opened!");

        // Ensure input is focused
        isbnInput.focus();

        // Add event listener for Enter key
        isbnInput.addEventListener("keydown", function (event) {
            console.log(`🔍 Key pressed in ISBN input: ${event.key}`);

            if (event.key === "Enter") {
                event.preventDefault(); // Prevent accidental form submission
                console.log("✅ Enter key detected! Triggering manageBook()");
                manageBook();
            }
        });
    });

    // Close modal when clicking the close button
    let closeButtons = document.querySelectorAll(".close-btn");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            manageLibraryModal.style.display = "none";
            console.log("❌ Manage Library Modal Closed!");
        });
    });

    let studentIdInput = document.getElementById("student-id-input");
    let confirmActionBtn = document.getElementById("confirm-action-btn");

    if (studentIdInput && confirmActionBtn) {
        studentIdInput.addEventListener("keydown", function (event) {
            console.log(`🔍 Key pressed in Student ID input: ${event.key}`);
            if (event.key === "Enter") {
                event.preventDefault();
                console.log("✅ Enter key detected! Triggering confirm-action-btn click");
                confirmActionBtn.click(); // Simulate button click
            }
        });
    } else {
        console.error("❌ ERROR: Student ID input or confirm button not found.");
    }
});

// Function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Attach event listeners to all close buttons
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function () {
        let modal = this.closest(".modal");  // Find closest modal
        if (modal) {
            modal.style.display = "none";  // Hide modal
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("📌 DOM is fully loaded.");
    fetchBooks();
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Page Loaded. Setting up back button...");
    const backButton = document.querySelector(".backbutton");

    if (backButton) {
        backButton.addEventListener("click", function () {
            console.log("🔙 Back button clicked! Going to the previous page...");
            window.history.back(); // Go to the previous page
        });
    } else {
        console.error("❌ Back button not found! Check the class name in your HTML.");
    }
});

function searchBooks() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();

    // Try to get either table
    const table = document.getElementById("student-books-list") || document.getElementById("books-list");

    if (!table) {
        console.warn("⚠️ No book list table found!");
        return;
    }

    const rows = table.querySelectorAll("tbody tr");

    console.log(`📋 Table found: ${table.id}, Rows: ${rows.length}`);

    rows.forEach(row => {
        const title = row.children[0]?.textContent.toLowerCase();
        const author = row.children[1]?.textContent.toLowerCase();

        console.log(`🔎 Checking row: Title="${title}", Author="${author}"`);

        row.style.display = (title.includes(searchQuery) || author.includes(searchQuery)) ? "" : "none";
    });

    console.log(`🔍 Searching for books: "${searchQuery}"`);
}







document.addEventListener("DOMContentLoaded", () => {
    console.log("🔄 Checking if bcrypt is loaded...");
    
    if (typeof window.bcrypt === "undefined") {
        console.warn("⚠️ bcrypt is not directly accessible. Trying manual assignment...");
        window.bcrypt = window.dcodeIO?.bcrypt; // Some versions attach bcrypt here
    }

    if (typeof window.bcrypt !== "undefined") {
        console.log("✅ bcrypt is now loaded!");
    } else {
        console.error("❌ bcrypt.js is still not loaded!");
    }
});



console.log(typeof bcrypt); // Should log "object" or "function"

if (typeof bcrypt === "undefined") {
    console.error("❌ bcrypt.js is not loaded!");
} else {
    console.log("✅ bcrypt.js is successfully loaded!");
}

// Function to compare password with hashed version (requires bcryptjs)
async function checkPassword(plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Setting up librarian login...");

    // Ensure bcrypt is available
    if (typeof bcrypt === "undefined") {
        console.error("❌ bcrypt.js is not loaded!");
        alert("❌ Error: bcrypt.js failed to load.");
        return;
    }

    // Get the librarian button
    const librarianButton = document.querySelector(".librarian_button");
    if (librarianButton) {
        librarianButton.addEventListener("click", function () {
            console.log("📚 Librarian button clicked! Showing login modal...");
            document.getElementById("login-modal").style.display = "block"; // Show login modal
        });
    } else {
        console.error("❌ Librarian button not found! Check your HTML.");
    }

    // Ensure login form exists before adding event listener
    const loginForm = document.getElementById("login-form");
    if (!loginForm) {
        console.error("❌ Login form not found! Check your HTML.");
        return;
    }

    // Handle login form submission
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();
    
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        // Ensure username and password fields exist
        if (!usernameInput || !passwordInput) {
            console.error("❌ Username or password field missing!");
            return;
        }

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        console.log("🔑 Attempting login for:", username);

        try {
            // 1️⃣ Fetch user details (username + hashed password) from Supabase
            let { data, error } = await supabase
                .from("librarian")
                .select("id, username, hashed_password, library_id") 
                .eq("username", username)
                .single();

            console.log("📝 Supabase Response: ", data, error);

            if (error || !data) {
                console.error("❌ Login failed:", error);
                alert("❌ Invalid username or password.");
                return;
            }

            // 2️⃣ Compare the entered password with the stored hash
            const isValidPassword = await bcrypt.compare(password, data.hashed_password);

            if (!isValidPassword) {
                alert("❌ Invalid username or password.");
                return;
            }

            console.log("✅ Login successful:", data);

            // 3️⃣ Redirect to librarian dashboard
            window.location.href = `librarian_dashboard.html?id=${data.library_id}`;

        } catch (err) {
            console.error("⚠️ Unexpected error during login:", err);
            alert("❌ An error occurred. Please try again.");
        }
    });
});



// Run when page loads


document.addEventListener("DOMContentLoaded", updateLibraryName);

function updateLibraryName(name) {
    console.log("Updating library name:", name);
    document.getElementById("library-name").textContent = name;
}



document.addEventListener("DOMContentLoaded", fetchLibraries);


// Ensure fetchLibraries is properly declared
async function fetchLibraries() {
    console.log("📌 fetchLibraries() is running...");

    const libraryList = document.getElementById("library-list");
    if (!libraryList) {
        console.error("❌ ERROR: #library-list not found in the HTML.");
        return;
    }

    try {
        const { data: libraries, error } = await supabase.from("libraries").select("*");
        if (error) throw error;

        console.log("📚 Libraries fetched:", libraries);

        libraryList.innerHTML = ""; // Clear previous content

        libraries.forEach(library => {
            const button = document.createElement("div");  // Change from <button> to <div>
            button.classList.add("library_button"); // Add correct class
            button.textContent = library.name;
            button.dataset.libraryId = library.id; // Store the library ID for later use
            
            button.addEventListener("click", () => {
                console.log(`🔍 Clicked on library: ${library.name} (ID: ${library.id})`);
                checkLibraryPassword(library.id); // Function to handle password checking
            });

            libraryList.appendChild(button);
            console.log("✅ Library button added:", button);
        });
    } catch (err) {
        console.error("❌ ERROR fetching libraries:", err.message);
    }
}

async function checkLibraryPassword(libraryId) {
    console.log(`🔑 Checking password for Library ID: ${libraryId}`);

    try {
        // Fetch the hashed password for the library
        const { data: library, error } = await supabase
            .from("libraries")
            .select("password") // Assuming the column name is 'password'
            .eq("id", libraryId)
            .single();

        if (error) throw error;

        if (!library || !library.password) {
            console.error("❌ ERROR: No password found for this library.");
            return;
        }

        console.log("🔒 Hashed Password from Database:", library.password);

        // Ask user for password input
        const userInput = prompt("Enter library password:");
        if (!userInput) {
            console.log("❌ No password entered.");
            return;
        }

        // Compare the user input with the hashed password
        const match = await bcrypt.compare(userInput, library.password);

        if (match) {
            console.log("✅ Password correct! Redirecting...");
            window.location.href = `library.html?id=${libraryId}`;
        } else {
            alert("Incorrect password! Please try again.");
        }
    } catch (err) {
        console.error("❌ ERROR checking password:", err.message);
    }
}

// Run fetchLibraries() when the page loads
document.addEventListener("DOMContentLoaded", fetchLibraries);


// Run when the DOM is ready
document.addEventListener("DOMContentLoaded", fetchLibraries);

const button = document.createElement("div"); // Change from button to div
button.classList.add("library_button");


window.onload = function () {
    console.log("✅ Page fully loaded");

    // 🟢 Find Student Button
    const studentButton = document.querySelector(".student_button");
    console.log("🔍 Student Button:", studentButton);
    if (studentButton) {
        studentButton.addEventListener("click", () => {
            console.log("🎓 Student button clicked!");
            window.location.href = "student.html"; // Redirect to student page
        });
    } else {
        console.error("❌ Student button NOT found! Check your HTML.");
    }

    // 🟢 Find Librarian Button
    const librarianButton = document.querySelector(".librarian_button");
    console.log("🔍 Librarian Button:", librarianButton);
    if (librarianButton) {
        librarianButton.addEventListener("click", () => {
            console.log("📚 Librarian button clicked!");
            const modal = document.getElementById("login-modal");
            if (modal) {
                modal.style.display = "block"; // Show login modal
            } else {
                console.error("❌ Login modal NOT found!");
            }
        });
    } else {
        console.error("❌ Librarian button NOT found! Check your HTML.");
    }
};









// Ensure fetchLibraries is properly declared
async function fetchLibraries() {
    console.log("📌 fetchLibraries() is running...");

    const libraryList = document.getElementById("library-list");
    if (!libraryList) {
        console.error("❌ ERROR: #library-list not found in the HTML.");
        return;
    }

    try {
        const { data: libraries, error } = await supabase.from("libraries").select("*");
        if (error) throw error;

        console.log("📚 Libraries fetched:", libraries);

        libraryList.innerHTML = ""; // Clear previous content

        libraries.forEach(library => {
            const button = document.createElement("div");  // Change from <button> to <div>
            button.classList.add("library_button"); // Add correct class
            button.textContent = library.name;
            button.dataset.libraryId = library.id; // Store the library ID for later use
            
            button.addEventListener("click", () => {
                console.log(`🔍 Clicked on library: ${library.name} (ID: ${library.id})`);
                checkLibraryPassword(library.id); // Function to handle password checking
            });

            libraryList.appendChild(button);
            console.log("✅ Library button added:", button);
        });
    } catch (err) {
        console.error("❌ ERROR fetching libraries:", err.message);
    }
}


// Run when the DOM is ready
document.addEventListener("DOMContentLoaded", fetchLibraries);


// Run when the DOM is ready
document.addEventListener("DOMContentLoaded", fetchLibraries);






async function fetchBooks() {
    console.log("📌 fetchBooks() started...");

    const urlParams = new URLSearchParams(window.location.search);
    const libraryId = urlParams.get("id");

    if (!libraryId) {
        console.error("❌ Library ID is missing in URL.");
        return;
    }

    console.log("📌 Library ID from URL:", libraryId);

    const { data, error } = await supabase
        .from("books")
        .select("title, author, category, availability, library_content(student_id, students(name))")
        .eq("library", libraryId)
        .order("title", { ascending: true });

    if (error) {
        console.error("❌ Error fetching books:", error);
        return;
    }

    console.log("📚 Books fetched from Supabase:", data);

    const booksList = document.getElementById("books-list");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!booksList || !categoryFilter) {
        console.error("❌ Table body or category filter not found! Check your HTML.");
        return;
    }

    booksList.innerHTML = "";
    categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset dropdown
    const categories = new Set();

    data.forEach(book => {
        categories.add(book.category || "Unknown");

        const row = document.createElement("tr");
        row.classList.add("book-row");
        row.setAttribute("data-category", book.category || "Unknown"); // ✅ Store category for filtering

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author || "Unknown";
        row.appendChild(authorCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = book.category || "Unknown";
        row.appendChild(categoryCell);

        const availabilityCell = document.createElement("td");
        availabilityCell.textContent = book.availability ? "AVAILABLE" : "BORROWED";
        availabilityCell.style.color = book.availability ? "green" : "red";
        row.appendChild(availabilityCell);

        const borrowerCell = document.createElement("td");
        if (!book.availability && book.library_content && book.library_content.length > 0) {
            borrowerCell.textContent = book.library_content[0].students ? book.library_content[0].students.name : "Unknown";
        } else {
            borrowerCell.textContent = "-";
        }
        row.appendChild(borrowerCell);

        booksList.appendChild(row);
    });

    // ✅ Populate category filter dropdown
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    console.log("✅ Books displayed and categories loaded!");
}

// ✅ Define the function that filters books
function filterBooksByCategory() {
    const categoryFilter = document.getElementById("categoryFilter");
    if (!categoryFilter) {
        console.error("❌ categoryFilter element not found in the DOM!");
        return;
    }

    const selectedCategory = categoryFilter.value;
    console.log(`📌 Selected category: ${selectedCategory}`);

    document.querySelectorAll(".book-row").forEach(row => {
        const bookCategory = row.getAttribute("data-category");
        row.style.display =
            selectedCategory === "all" || bookCategory === selectedCategory
                ? "table-row"
                : "none";
    });
}

// ✅ Attach event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("📌 DOM fully loaded, setting up category filter for librarians...");

    const categoryFilter = document.getElementById("categoryFilter");
    if (categoryFilter) {
        categoryFilter.addEventListener("change", filterBooksByCategory);
        console.log("✅ Category filter event listener added.");
    } else {
        console.error("❌ categoryFilter not found! Check your HTML.");
    }
});




document.addEventListener("DOMContentLoaded", () => {
    console.log("📌 Librarian Dashboard Loaded");
    fetchBooks();
    setupManageLibraryButton();
});

document.addEventListener("DOMContentLoaded", function () {
    let addBookBtn = document.getElementById("add-book-btn");

    if (addBookBtn) {
        addBookBtn.onclick = async function () {
            await addNewBook();
        };
    } else {
        console.error("❌ ERROR: #add-book-btn not found in DOM.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let categorySelect = document.getElementById("new-category");

    if (categorySelect) {
        let categories = ["ACADEMIC BOOK", "REFERENCE BOOK", "FICTION", "NON-FICTION"];
        categories.forEach(category => {
            let option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    }
});


async function addNewBook() {
    let title = document.getElementById("new-title").value.trim();
    let author = document.getElementById("new-author").value.trim();
    let category = document.getElementById("new-category").value;

    // ✅ Get ISBN from modal
    let newBookModal = document.getElementById("new-book-modal");
    let isbn = newBookModal.getAttribute("data-isbn");

    // ✅ Get library_id from URL
    let urlParams = new URLSearchParams(window.location.search);
    let libraryId = urlParams.get("id");

    if (!title || !author || !category || !isbn || !libraryId) {
        alert("All fields are required.");
        console.error("❌ ERROR: Missing input values.", { title, author, category, isbn, libraryId });
        return;
    }

    console.log("📚 Adding new book to database...", { isbn, title, author, category, libraryId });

    const { data, error } = await supabase
        .from("books")
        .insert([{ id: isbn, title, author, category, library: libraryId, availability: true }]);

    if (error) {
        console.error("❌ ERROR: Failed to add book:", error);
        alert("Failed to add book. " + error.message);
    } else {
        console.log(`✅ Book "${title}" added successfully to library ${libraryId}.`);
        alert(`Book "${title}" added successfully.`);
        closeModal("new-book-modal");
    }
}





function loadCategories() {
    let categoryDropdown = document.getElementById("new-category");

    if (!categoryDropdown) {
        console.error("❌ ERROR: Category dropdown not found.");
        return;
    }

    console.log("📂 Loading predefined book categories...");

    // ✅ Predefined category list
    const categories = [
        "ACADEMIC BOOK",
        "REFERENCE BOOK",
        "OTHER",
        "FICTION",
        "NON-FICTION",
        "BOARD GAME",
        "RESEARCH PAPER"
    ];

    // ✅ Clear previous options & add a default one
    categoryDropdown.innerHTML = '<option value="">Select a Category</option>';

    // ✅ Populate the dropdown with predefined categories
    categories.forEach(category => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    console.log("✅ Categories loaded:", categories);
}

// ✅ Call the function when the page loads
document.addEventListener("DOMContentLoaded", loadCategories);

async function fetchLibraryName() {
    let username = localStorage.getItem("librarian_username"); // Check localStorage first

    if (!username) {
        console.warn("⚠️ No librarian username found in localStorage. Fetching from Supabase...");
        
        // Get library ID from URL (fallback method)
        const urlParams = new URLSearchParams(window.location.search);
        const libraryId = urlParams.get("id");

        if (!libraryId) {
            console.error("❌ No library ID found in URL!");
            document.getElementById("library-name").innerText = "Library";
            return;
        }

        // Fetch the librarian's username from Supabase using library ID
        const { data: librarianData, error: librarianError } = await supabase
            .from("librarian")
            .select("username")
            .eq("library_id", libraryId)
            .single();

        if (librarianError || !librarianData) {
            console.error("❌ Error fetching librarian username:", librarianError);
            document.getElementById("library-name").innerText = "Library";
            return;
        }

        username = librarianData.username;
        localStorage.setItem("librarian_username", username); // Store it for future use
    }

    console.log(`📌 Fetching library for librarian: ${username}`);

    // Fetch librarian's assigned library_id
    const { data: librarianData, error: librarianError } = await supabase
        .from("librarian")
        .select("library_id")
        .eq("username", username)
        .single();

    if (librarianError || !librarianData) {
        console.error("❌ Error fetching librarian's library_id:", librarianError);
        document.getElementById("library-name").innerText = "Library";
        return;
    }

    const libraryId = librarianData.library_id;
    console.log(`📌 Librarian's assigned library ID: ${libraryId}`);

    // Fetch library name
    const { data: libraryData, error: libraryError } = await supabase
        .from("libraries")
        .select("name")
        .eq("id", libraryId)
        .single();

    if (libraryError || !libraryData) {
        console.error("❌ Error fetching library name:", libraryError);
        document.getElementById("library-name").innerText = "Library";
    } else {
        document.getElementById("library-name").innerText = libraryData.name;
    }
}




// Call function when page loads
document.addEventListener("DOMContentLoaded", fetchLibraryName);


// Call function when page loads
document.addEventListener("DOMContentLoaded", fetchLibraryName);


setTimeout(() => {
    const manageLibraryBtn = document.getElementById("manage-library-btn");
    if (manageLibraryBtn) {
        manageLibraryBtn.addEventListener("click", function () {
            console.log("📌 Manage Library button clicked!");
            document.getElementById("manage-library-modal").style.display = "block";
        });
    }
}, 2000); // Wait 2 seconds for the DOM to load

document.getElementById("submit-button").addEventListener("click", async function (event) {
    event.preventDefault();
    
    const isbn = document.getElementById("isbn-input").value; // Get ISBN from input
    if (!isbn) {
        alert("Please enter a book ISBN.");
        return;
    }

    try {
        // 🔍 1. Check if the book exists in the database
        let { data: book, error } = await supabase
            .from("books")
            .select("*")
            .eq("id", isbn)
            .single(); // Fetch a single book by ISBN

        if (error) throw error;

        if (!book) {
            // 📚 2. Book NOT in database → Ask for details
            document.getElementById("book-details-form").style.display = "block"; // Show extra fields
            document.getElementById("borrow-options").style.display = "none"; // Hide borrow/return options
        } else {
            // 🔄 3. Book exists → Ask what to do (Return/Borrow)
            document.getElementById("borrow-options").style.display = "block";
            document.getElementById("book-details-form").style.display = "none"; // Hide extra details

            document.getElementById("borrow-return-message").innerText = 
                `The book "${book.title}" is already in the system. What would you like to do?`;

            // Handle Borrow
            document.getElementById("borrow-button").onclick = async function () {
                let studentId = prompt("Enter Student ID:");
                if (!studentId) return;

                await supabase
                    .from("books")
                    .update({ availability: "borrowed", student_id: studentId })
                    .eq("id", isbn);

                alert("Book borrowed successfully!");
            };

            // Handle Return
            document.getElementById("return-button").onclick = async function () {
                await supabase
                    .from("books")
                    .update({ availability: "available", student_id: null })
                    .eq("id", isbn);

                alert("Book returned successfully!");
            };
        }
    } catch (error) {
        console.error("Database error:", error.message);
        alert("Error fetching book information.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("📌 DOM is fully loaded.");

    const manageLibraryBtn = document.getElementById("manage-library-btn");
    const manageLibraryModal = document.getElementById("manage-library-modal");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("manage-library-form"); // Ensure this is your modal form
    const inputs = form.querySelectorAll("input");

    if (manageLibraryBtn) {
        console.log("✅ Manage Library button FOUND!");
        manageLibraryBtn.addEventListener("click", function () {
            console.log("📌 Manage Library button clicked!");
            if (manageLibraryModal) {
                manageLibraryModal.style.display = "block";  // <-- Ensure modal is shown
                console.log("✅ Manage Library modal should be visible now.");
            } else {
                console.error("❌ Manage Library modal NOT FOUND!");
            }
        });
    } else {
        console.error("❌ Manage Library button NOT FOUND! Check your HTML.");
    }

    inputs.forEach(input => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent default form submission
                console.log("🚀 Enter key pressed! Submitting form...");
                addBook(); // Call your form submission function
            }
        });
    });

    // Close modal when the close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            manageLibraryModal.style.display = "none";
            console.log("📌 Manage Library modal closed.");
        });
    }

    // Close modal if clicked outside the modal
    window.addEventListener("click", function (event) {
        if (event.target === manageLibraryModal) {
            manageLibraryModal.style.display = "none";
            console.log("📌 Modal closed by clicking outside.");
        }
    });
});



async function manageBook() {
    let isbn = document.getElementById("isbn-input").value.trim();
    console.log(`🔍 Searching for ISBN: "${isbn}"`);  

    if (!isbn) {
        alert("Please enter an ISBN.");
        return;
    }

    // Fetch book details from Supabase
    const { data: book, error } = await supabase
        .from("books")
        .select("id, title, availability")
        .eq("id", isbn)
        .maybeSingle();

    console.log("📖 Book data from DB:", book);  

    if (error || !book) {
        console.warn("⚠️ No book found for ISBN:", isbn);

        // ✅ Store ISBN in the new book modal
        let newBookModal = document.getElementById("new-book-modal");
        newBookModal.setAttribute("data-isbn", isbn);
        newBookModal.style.display = "block";

        return;
    }

    let bookTitleElement = document.getElementById("student-book-title");
    let actionTextElement = document.getElementById("student-action-text");
    let studentModal = document.getElementById("student-id-modal");
    let confirmButton = document.getElementById("confirm-action-btn");

    if (!bookTitleElement || !actionTextElement || !studentModal || !confirmButton) {
        console.error("❌ ERROR: Missing modal elements in the DOM.");
        return;
    }

    bookTitleElement.textContent = `Title: "${book.title}"`;

    // ✅ Borrowing
    if (book.availability) {
        actionTextElement.textContent = `This book is available. Enter student ID to borrow.`;
        studentModal.style.display = "block";

        confirmButton.onclick = async () => {
            let studentId = document.getElementById("student-id-input").value.trim();
            if (!studentId) {
                alert("Please enter a student ID.");
                return;
            }

            console.log(`📚 Borrowing book with ISBN: ${book.id}`);
            await borrowBook(book.id, studentId);
            closeModal("student-id-modal");
        };
    }
    // ✅ Returning
    else {
        console.log(`📚 Returning book with ISBN: ${book.id}`);
        await returnBook(book.id);  
    }
}



// 🔄 Return book function (just updates availability)
async function returnBook(isbn) {
    console.log(`📌 Returning book: ${isbn}`);

    // Step 1: Fetch the book UUID
    const { data: bookData, error: bookError } = await supabase
        .from("books")
        .select("uuid, availability")
        .eq("id", isbn)
        .single();

    if (bookError || !bookData) {
        console.error("❌ Error fetching book UUID:", bookError);
        alert("Error returning the book. Please try again.");
        return;
    }

    const bookUuid = bookData.uuid;

    if (bookData.availability) {
        alert("⚠️ Book is already available. No need to return.");
        return;
    }

    console.log(`🔄 Book UUID found: ${bookUuid}`);

    // Step 2: Fetch the library_content record
    const { data: borrowedRecord, error: borrowedError } = await supabase
        .from("library_content")
        .select("id, book_uuid")
        .eq("book_uuid", bookUuid)
        .maybeSingle(); // Ensures we don’t break if multiple records exist

    if (borrowedError) {
        console.error("❌ Supabase Query Error:", borrowedError);
        alert("Error fetching borrowed book record. Check console for details.");
        return;
    }

    console.log("📊 Borrowed Record Found:", borrowedRecord);

    if (!borrowedRecord) {
        alert("⚠️ No borrowed record found for this book.");
        return;
    }

    // Step 3: Delete the library_content row
    console.log(`🗑️ Attempting to delete library_content row with ID: ${borrowedRecord.id}`);

    const { error: deleteError } = await supabase
        .from("library_content")
        .delete()
        .eq("id", borrowedRecord.id);

    if (deleteError) {
        console.error("❌ Error deleting borrowed record:", deleteError);
        alert("Failed to return the book. Possible RLS issue.");
        return;
    }

    console.log("✅ Borrowed record deleted. Book successfully returned!");

    // Step 4: Update book availability
    const { error: updateError } = await supabase
        .from("books")
        .update({ availability: true }) // Mark book as available
        .eq("uuid", bookUuid);

    if (updateError) {
        console.error("❌ Error updating book availability:", updateError);
        alert("Failed to mark the book as available.");
    } else {
        console.log("✅ Book successfully marked as available!");
        alert("Book successfully returned!");
    }

    document.getElementById("isbn-input").value = "";
}












// Ensure borrowBook and returnBook use the passed student ID without prompting again
async function borrowBook(isbn, studentId) {
    console.log(`📌 Borrowing book: ${isbn} for student ID: ${studentId}`);

    // Step 1: Fetch the book details
    const { data: bookData, error: bookError } = await supabase
        .from("books")
        .select("uuid, title, availability")
        .eq("id", isbn)
        .single();

    if (bookError || !bookData) {
        console.error("❌ Error fetching book details:", bookError);
        alert("Error borrowing the book. Please try again.");
        return;
    }

    const bookUuid = bookData.uuid;
    const bookTitle = bookData.title;
    
    if (!bookData.availability) {
        alert(`❌ Book "${bookTitle}" is already borrowed.`);
        return;
    }

    console.log(`🔄 Book UUID found: ${bookUuid}, Title: ${bookTitle}`);

    // Step 2: Fetch the student's name using student ID
    let { data: studentData, error: studentError } = await supabase
        .from("students")
        .select("name")
        .eq("id", studentId)
        .single();

    if (studentError || !studentData) {
        console.warn("⚠️ Student not found in the database. Asking for name...");
        const studentName = prompt("⚠️ Student not found! Please enter the student's name:");

        if (!studentName) {
            alert("❌ Borrowing process canceled. Student name is required.");
            return;
        }

        console.log(`👤 New student: ${studentName}`);

        const { error: insertError } = await supabase
            .from("students")
            .insert([{ id: studentId, name: studentName }]);

        if (insertError) {
            console.error("❌ Error adding new student:", insertError);
            alert("Failed to add student. Please try again.");
            return;
        }

        console.log(`✅ Student "${studentName}" added successfully!`);
        studentData = { name: studentName };
    }

    const studentName = studentData.name;
    console.log(`👤 Student confirmed: ${studentName}`);

    // Step 3: Insert into `library_content` (track borrowing)
    const { error: insertBorrowError } = await supabase
        .from("library_content")
        .insert([
            {
                book_id: isbn,
                book_uuid: bookUuid,
                student_id: studentId,
                borrowed_at: new Date().toISOString(),
            },
        ]);

    if (insertBorrowError) {
        console.error("❌ Error inserting into library_content:", insertBorrowError);
        alert("Failed to record borrowing.");
        return;
    }

    console.log(`📜 Borrowing record inserted into library_content.`);

    // Step 4: Update books table availability
    const { error: updateError } = await supabase
        .from("books")
        .update({ availability: false }) // Mark book as borrowed
        .eq("uuid", bookUuid);

    if (updateError) {
        console.error("❌ Error updating book availability:", updateError);
        alert("Failed to update book status.");
    } else {
        console.log(`✅ Book "${bookTitle}" successfully borrowed by ${studentName}!`);
        alert(`✅ Book "${bookTitle}" has been successfully borrowed by ${studentName}!`);
    }

    document.getElementById("isbn-input").value = "";
}


















document.addEventListener("DOMContentLoaded", function () {
    let isbnInput = document.getElementById("isbn-input");

    if (isbnInput) {
        console.log("✅ ISBN input field found! Adding event listener.");
        
        isbnInput.addEventListener("keydown", function (event) {
            console.log(`🔍 Key pressed: ${event.key}`);  // Debug log

            if (event.key === "Enter") {
                event.preventDefault();  // Prevent accidental form submission
                console.log("✅ Enter key detected! Triggering manageBook()");
                manageBook();
            }
        });
    } else {
        console.error("❌ ERROR: 'isbn-input' field not found in DOM.");
    }
});



// Close modal function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


// Close modal when clicking outside or on (×)
document.querySelector(".close").onclick = closeModal;
window.onclick = (event) => {
    if (event.target === document.getElementById("bookModal")) {
        closeModal();
    }
};

window.onload = function() {
    // Ensure elements exist before running the script
    document.querySelectorAll(".close-btn").forEach(btn => {
        btn.onclick = function () {
            this.closest(".modal").style.display = "none";
        };
    });

    window.onclick = (event) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
};

document.addEventListener("DOMContentLoaded", fetchBooksForStudents);

async function fetchBooksForStudents() {
    console.log("📌 fetchBooksForStudents() started...");

    const urlParams = new URLSearchParams(window.location.search);
    const libraryId = urlParams.get("id");

    if (!libraryId) {
        console.error("❌ Library ID is missing in URL.");
        return;
    }

    console.log("📌 Library ID from URL:", libraryId);

    const { data, error } = await supabase
        .from("books")
        .select("title, author, category, availability")
        .eq("library", libraryId)
        .order("title", { ascending: true });

    if (error) {
        console.error("❌ Error fetching books:", error);
        return;
    }

    console.log("📚 Books fetched from Supabase:", data);

    const booksList = document.getElementById("student-books-list");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!booksList || !categoryFilter) {
        console.error("❌ Table body or category filter not found! Check your HTML.");
        return;
    }

    booksList.innerHTML = "";
    const categories = new Set();

    data.forEach(book => {
        categories.add(book.category);
    
        const row = document.createElement("tr");
        row.classList.add("book-row");
        row.dataset.category = book.category || "Unknown"; // ✅ Fix: Ensures dataset.category is set properly
    
        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);
    
        const authorCell = document.createElement("td");
        authorCell.textContent = book.author || "Unknown";
        row.appendChild(authorCell);
    
        const categoryCell = document.createElement("td");
        categoryCell.textContent = book.category || "Unknown";
        row.appendChild(categoryCell);
    
        const availabilityCell = document.createElement("td");
        availabilityCell.textContent = book.availability ? "AVAILABLE" : "BORROWED";
        availabilityCell.style.color = book.availability ? "green" : "red";
        row.appendChild(availabilityCell);
    
        booksList.appendChild(row);
    });

    // ✅ Populate category filter dropdown
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // ✅ Fix: Ensure filtering is set up after categories are populated
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        console.log(`📌 Selected category: ${selectedCategory}`);

        document.querySelectorAll(".book-row").forEach(row => {
            const bookCategory = row.dataset.category;
            row.style.display =
                selectedCategory === "all" || bookCategory === selectedCategory
                    ? "table-row"
                    : "none";
        });
    });

    console.log("✅ Books displayed and categories loaded!");
}


async function fetchBooks() {
    console.log("📌 fetchBooks() started...");

    const urlParams = new URLSearchParams(window.location.search);
    const libraryId = urlParams.get("id");

    if (!libraryId) {
        console.error("❌ Library ID is missing in URL.");
        return;
    }

    console.log("📌 Library ID from URL:", libraryId);

    const { data, error } = await supabase
        .from("books")
        .select("title, author, category, availability, library_content(student_id, students(name), borrowed_at)")
        .eq("library", libraryId)
        .order("title", { ascending: true });

    if (error) {
        console.error("❌ Error fetching books:", error);
        return;
    }

    console.log("📚 Books fetched from Supabase:", data);

    const booksList = document.getElementById("books-list");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!booksList || !categoryFilter) {
        console.error("❌ Table body or category filter not found! Check your HTML.");
        return;
    }

    booksList.innerHTML = "";
    categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset dropdown
    const categories = new Set();

    data.forEach(book => {
        categories.add(book.category || "Unknown");

        const row = document.createElement("tr");
        row.classList.add("book-row");
        row.setAttribute("data-category", book.category || "Unknown"); // ✅ Store category for filtering

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author || "Unknown";
        row.appendChild(authorCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = book.category || "Unknown";
        row.appendChild(categoryCell);

        const availabilityCell = document.createElement("td");
        availabilityCell.textContent = book.availability ? "AVAILABLE" : "BORROWED";
        availabilityCell.style.color = book.availability ? "green" : "red";
        row.appendChild(availabilityCell);

        // Borrower and timestamp cell
        const borrowerCell = document.createElement("td");
        if (!book.availability && book.library_content && book.library_content.length > 0) {
            const borrower = book.library_content[0].students ? book.library_content[0].students.name : "Unknown";
            const borrowedAt = book.library_content[0].borrowed_at ? formatTimestamp(book.library_content[0].borrowed_at) : "Unknown Time";
            borrowerCell.textContent = `${borrower} (${borrowedAt})`;
        } else {
            borrowerCell.textContent = "-";
        }
        row.appendChild(borrowerCell);

        booksList.appendChild(row);
    });

    // ✅ Populate category filter dropdown
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    console.log("✅ Books displayed and categories loaded!");
}

// ✅ Helper function to format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString().replace("T", " ").slice(0, 16); // YYYY-MM-DD HH:MM
}


// ✅ Attach event listener for category filtering
document.addEventListener("DOMContentLoaded", () => {
    console.log("📌 DOM fully loaded, setting up category filter for librarians...");

    const categoryFilter = document.getElementById("categoryFilter");

    if (!categoryFilter) {
        console.error("❌ categoryFilter not found in the DOM! Check your HTML.");
        return;
    }

    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        console.log(`📌 Selected category: ${selectedCategory}`);

        document.querySelectorAll(".book-row").forEach(row => {
            const bookCategory = row.getAttribute("data-category");
            row.style.display =
                selectedCategory === "all" || bookCategory === selectedCategory
                    ? "table-row"
                    : "none";
        });
    });

    console.log("✅ Category filter is now active for librarians.");
});



document.addEventListener("DOMContentLoaded", () => {
    console.log("📌 DOM fully loaded, setting up category filter...");
    
    const categoryFilter = document.getElementById("categoryFilter");

    if (!categoryFilter) {
        console.error("❌ categoryFilter not found in the DOM! Check your HTML.");
        return;
    }

    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        console.log(`📌 Selected category: ${selectedCategory}`);

        document.querySelectorAll(".book-row").forEach(row => {
            const bookCategory = row.getAttribute("data-category");
            row.style.display =
                selectedCategory === "all" || bookCategory === selectedCategory
                    ? "table-row"
                    : "none";
        });
    });

    console.log("✅ Category filter is now active.");
});




document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("categoryFilter");

    if (!categoryFilter) {
        console.error("❌ categoryFilter element not found!");
        return;
    }

    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        console.log(`📌 Selected category: ${selectedCategory}`);

        document.querySelectorAll(".book-row").forEach(row => {
            const bookCategory = row.dataset.category;
            row.style.display =
                selectedCategory === "all" || bookCategory === selectedCategory
                    ? "table-row"
                    : "none";
        });
    });
});



// Ensure fetchBooksForStudents runs on page load
document.addEventListener("DOMContentLoaded", fetchBooksForStudents);

// ----------------------------------------------------------------------------------------------------------------
// INDEX.HTML
// ----------------------------------------------------------------------------------------------------------------



function goToStudentPage() {
    console.log("Redirecting to student page..."); // Debugging
    window.location.href = "student.html"; // Change this if your student page has a different name
}
