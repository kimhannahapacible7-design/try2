/* =========================================================
   HANNAH KIM PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("show");

        }
    );

}


document
    .querySelectorAll(".nav-link")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navLinks) {

                    navLinks.classList.remove(
                        "show"
                    );

                }

            }
        );

    });



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const top =
                    section.offsetTop - 180;

                const bottom =
                    top + section.offsetHeight;


                if (
                    window.scrollY >= top &&
                    window.scrollY < bottom
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navItems.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================================================
   PROJECT CODE
========================================================= */

const projectCodes = {


    bank: {

        title:
            "Bank Account Management",

        terminal:
            "bank_account.cpp",


        inputs: [

            {
                id:
                    "initialDeposit",

                label:
                    "Initial Deposit",

                type:
                    "number",

                value:
                    "1000"
            },


            {
                id:
                    "depositAmount",

                label:
                    "Deposit Amount",

                type:
                    "number",

                value:
                    "250"
            },


            {
                id:
                    "withdrawAmount",

                label:
                    "Withdraw Amount",

                type:
                    "number",

                value:
                    "100"
            }

        ],


        code: `#include <iostream>
using namespace std;

class BankAccount {

private:

    double balance;


public:

    BankAccount(double initDeposit) {

        balance = initDeposit;

    }


    void deposit(double amount) {

        balance += amount;

    }


    bool withdraw(double amount) {

        if (amount > balance) {

            return false;

        }

        balance -= amount;

        return true;

    }


    double getBalance() {

        return balance;

    }

};


int main() {

    BankAccount* acc1 =
        new BankAccount(1000.0);


    BankAccount* acc2 =
        new BankAccount(700.0);


    // Testing acc1

    acc1->deposit(250.0);

    acc1->withdraw(100.0);


    cout << "Account 1 balance: "
         << acc1->getBalance()
         << endl;


    // Testing acc2

    acc2->deposit(300.0);

    acc2->withdraw(100.0);


    cout << "Account 2 balance: "
         << acc2->getBalance()
         << endl;


    // Deallocate memory

    delete acc1;

    delete acc2;


    return 0;

}`

    },


    personal: {

        title:
            "Personal Information",

        terminal:
            "personal_information.cpp",


        inputs: [

            {
                id:
                    "firstName",

                label:
                    "First Name",

                type:
                    "text",

                value:
                    ""
            },


            {
                id:
                    "middleName",

                label:
                    "Middle Name",

                type:
                    "text",

                value:
                    ""
            },


            {
                id:
                    "age",

                label:
                    "Age",

                type:
                    "number",

                value:
                    ""
            },


            {
                id:
                    "weight",

                label:
                    "Weight",

                type:
                    "number",

                value:
                    ""
            }

        ],


        code: `#include <iostream>
using namespace std;

int main()
{

    cout << "Enter your First Name: ";

    string firstName;

    cin >> firstName;


    cout << "Enter your Middle name: ";

    string middleName;

    cin >> middleName;


    cout << "Age: ";

    int age;

    cin >> age;


    cout << "Enter your Weight: ";

    int weight;

    cin >> weight;


    cout << "Full Name: "
         << firstName
         << " "
         << middleName
         << endl;


    cout << "Age: "
         << age
         << endl;


    cout << "Weight: "
         << weight
         << endl;


    return 0;

}`

    },


    casting: {

        title:
            "Type Conversion Practice",

        terminal:
            "type_conversion.cpp",


        inputs: [],


        code: `#include <iostream>
using namespace std;

int main()
{

    cout << "static_cast<int>(7.9) = "
         << static_cast<int>(7.9)
         << endl;


    cout << "static_cast<int>(3.3) = "
         << static_cast<int>(3.3)
         << endl;


    cout << "static_cast<double>(25) = "
         << static_cast<double>(25)
         << endl;


    cout << "static_cast<int>"
            "(7.8 + static_cast<double>"
            "(15 / 2)) = "
         << static_cast<int>(
                7.8 +
                static_cast<double>(15 / 2)
            )
         << endl;


    return 0;

}`

    }

};



/* =========================================================
   MODAL ELEMENTS
========================================================= */

const modal =
    document.getElementById(
        "codeModal"
    );


const codeTitle =
    document.getElementById(
        "codeTitle"
    );


const codeDisplay =
    document.getElementById(
        "codeDisplay"
    );


const programInputs =
    document.getElementById(
        "programInputs"
    );


const runButton =
    document.getElementById(
        "runButton"
    );


const resetButton =
    document.getElementById(
        "resetButton"
    );


const runOutput =
    document.getElementById(
        "runOutput"
    );


const copyButton =
    document.getElementById(
        "copyButton"
    );


const copyMessage =
    document.getElementById(
        "copyMessage"
    );


const terminalName =
    document.getElementById(
        "terminalName"
    );


const closeModalButton =
    document.getElementById(
        "closeModal"
    );


let currentProject = null;



/* =========================================================
   SHOW CODE
========================================================= */

function showCode(projectName) {


    const project =
        projectCodes[projectName];


    if (!project) {

        console.error(
            "Project not found:",
            projectName
        );

        return;

    }


    currentProject =
        projectName;


    codeTitle.textContent =
        project.title;


    codeDisplay.textContent =
        project.code;


    terminalName.textContent =
        project.terminal;


    createInputFields(
        project.inputs
    );


    resetProgram();


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   CREATE INPUT FIELDS
========================================================= */

function createInputFields(inputs) {


    programInputs.innerHTML = "";


    if (
        !inputs ||
        inputs.length === 0
    ) {

        programInputs.innerHTML = `

            <div class="no-input-message">

                This program does not require
                user input.

            </div>

        `;

        return;

    }


    inputs.forEach(
        function (input) {


            const wrapper =
                document.createElement(
                    "div"
                );


            wrapper.className =
                "program-input-row";


            const label =
                document.createElement(
                    "label"
                );


            label.textContent =
                input.label;


            const field =
                document.createElement(
                    "input"
                );


            field.id =
                "input_" + input.id;


            field.type =
                input.type;


            field.value =
                input.value || "";


            field.placeholder =
                "Enter " +
                input.label;


            field.autocomplete =
                "off";


            wrapper.appendChild(
                label
            );


            wrapper.appendChild(
                field
            );


            programInputs.appendChild(
                wrapper
            );

        }
    );

}



/* =========================================================
   GET USER INPUT
========================================================= */

function getInputValue(id) {


    const field =
        document.getElementById(
            "input_" + id
        );


    if (!field) {

        return "";

    }


    return field.value.trim();

}



/* =========================================================
   ESCAPE C++ STRING
========================================================= */

function escapeCppString(value) {

    return String(value)

        .replace(
            /\\/g,
            "\\\\"
        )

        .replace(
            /"/g,
            '\\"'
        )

        .replace(
            /\r?\n/g,
            "\\n"
        );

}



/* =========================================================
   PREPARE RUNTIME CODE
========================================================= */

function prepareRuntimeCode(
    projectName
) {


    const originalCode =
        projectCodes[
            projectName
        ].code;


    let runtimeCode =
        originalCode;



    /* =====================================================
       BANK ACCOUNT
    ===================================================== */

    if (
        projectName === "bank"
    ) {


        const initialDeposit =
            getInputValue(
                "initialDeposit"
            );


        const depositAmount =
            getInputValue(
                "depositAmount"
            );


        const withdrawAmount =
            getInputValue(
                "withdrawAmount"
            );


        if (

            initialDeposit === "" ||

            depositAmount === "" ||

            withdrawAmount === ""

        ) {

            throw new Error(
                "Please fill in all Bank Account fields."
            );

        }


        if (

            !Number.isFinite(
                Number(initialDeposit)
            ) ||

            !Number.isFinite(
                Number(depositAmount)
            ) ||

            !Number.isFinite(
                Number(withdrawAmount)
            )

        ) {

            throw new Error(
                "Please enter valid numbers."
            );

        }


        runtimeCode =
            runtimeCode.replace(

                "new BankAccount(1000.0)",

                "new BankAccount(" +
                Number(initialDeposit) +
                ")"

            );


        runtimeCode =
            runtimeCode.replace(

                "acc1->deposit(250.0);",

                "acc1->deposit(" +
                Number(depositAmount) +
                ");"

            );


        runtimeCode =
            runtimeCode.replace(

                "acc1->withdraw(100.0);",

                "acc1->withdraw(" +
                Number(withdrawAmount) +
                ");"

            );

    }



    /* =====================================================
       PERSONAL INFORMATION
    ===================================================== */

    if (
        projectName === "personal"
    ) {


        const firstName =
            getInputValue(
                "firstName"
            );


        const middleName =
            getInputValue(
                "middleName"
            );


        const age =
            getInputValue(
                "age"
            );


        const weight =
            getInputValue(
                "weight"
            );


        if (

            firstName === "" ||

            middleName === "" ||

            age === "" ||

            weight === ""

        ) {

            throw new Error(
                "Please fill in all Personal Information fields."
            );

        }


        if (

            !Number.isInteger(
                Number(age)
            ) ||

            !Number.isInteger(
                Number(weight)
            )

        ) {

            throw new Error(
                "Age and Weight must be valid whole numbers."
            );

        }


        runtimeCode = `#include <iostream>
using namespace std;

int main()
{

    string firstName =
        "${escapeCppString(firstName)}";


    string middleName =
        "${escapeCppString(middleName)}";


    int age =
        ${Number(age)};


    int weight =
        ${Number(weight)};


    cout << "Full Name: "
         << firstName
         << " "
         << middleName
         << endl;


    cout << "Age: "
         << age
         << endl;


    cout << "Weight: "
         << weight
         << endl;


    return 0;

}`;

    }


    return runtimeCode;

}



/* =========================================================
   RUN PROGRAM
========================================================= */

if (runButton) {


    runButton.addEventListener(
        "click",
        async function () {


            if (!currentProject) {

                return;

            }


            let runtimeCode;


            try {

                runtimeCode =
                    prepareRuntimeCode(
                        currentProject
                    );

            }

            catch (error) {

                runOutput.textContent =
                    "Input Error:\n\n" +
                    error.message;

                return;

            }


            runButton.disabled =
                true;


            if (resetButton) {

                resetButton.disabled =
                    true;

            }


            runButton.textContent =
                "⏳ Running...";


            runOutput.textContent =
                "Compiling program...\n";


            try {


                const response =
                    await fetch(

                        "https://wandbox.org/api/compile.json",

                        {

                            method:
                                "POST",


                            headers: {

                                "Content-Type":
                                    "application/json"

                            },


                            body:

                                JSON.stringify({

                                    code:
                                        runtimeCode,

                                    compiler:
                                        "gcc-head",

                                    options:
                                        "gnu++17",

                                    stdin:
                                        ""

                                })

                        }

                    );


                if (!response.ok) {

                    throw new Error(
                        "Compiler server error: HTTP " +
                        response.status
                    );

                }


                const result =
                    await response.json();


                let output = "";


                if (
                    result.compiler_error
                ) {

                    output +=
                        result.compiler_error;

                }


                if (
                    result.compiler_output
                ) {

                    output +=
                        result.compiler_output;

                }


                if (
                    result.program_output
                ) {

                    output +=
                        result.program_output;

                }


                if (
                    result.program_error
                ) {

                    output +=
                        result.program_error;

                }


                if (
                    output.trim() === ""
                ) {


                    if (

                        result.status === 0 ||

                        result.status === "0"

                    ) {

                        output =
                            "Program finished successfully.\n" +
                            "No output.";

                    }

                    else {

                        output =
                            "Program finished without output.";

                    }

                }


                runOutput.textContent =
                    output;

            }


            catch (error) {


                console.error(error);


                runOutput.textContent =

                    "Unable to run program.\n\n" +

                    error.message +

                    "\n\n" +

                    "Make sure you have an internet connection.";

            }


            runButton.disabled =
                false;


            if (resetButton) {

                resetButton.disabled =
                    false;

            }


            runButton.textContent =
                "▶ Run Program";


        }
    );

}



/* =========================================================
   RESET
========================================================= */

function resetProgram() {


    if (!currentProject) {

        return;

    }


    const project =
        projectCodes[
            currentProject
        ];


    if (project.inputs) {


        project.inputs.forEach(
            function (input) {


                const field =
                    document.getElementById(
                        "input_" + input.id
                    );


                if (field) {

                    field.value =
                        input.value || "";

                }

            }
        );

    }


    if (runOutput) {

        runOutput.textContent =
            "Ready to run program...";

    }

}



if (resetButton) {

    resetButton.addEventListener(
        "click",
        resetProgram
    );

}



/* =========================================================
   COPY CODE
========================================================= */

if (copyButton) {


    copyButton.addEventListener(
        "click",
        async function () {


            const code =
                codeDisplay.textContent;


            try {


                await navigator.clipboard.writeText(
                    code
                );


                copyMessage.textContent =
                    "Code copied successfully!";

            }


            catch (error) {


                const temporary =
                    document.createElement(
                        "textarea"
                    );


                temporary.value =
                    code;


                temporary.style.position =
                    "fixed";


                temporary.style.opacity =
                    "0";


                document.body.appendChild(
                    temporary
                );


                temporary.focus();


                temporary.select();


                try {


                    document.execCommand(
                        "copy"
                    );


                    copyMessage.textContent =
                        "Code copied successfully!";

                }


                catch (copyError) {


                    copyMessage.textContent =
                        "Copy failed. Please copy the code manually.";

                }


                document.body.removeChild(
                    temporary
                );

            }


            setTimeout(
                function () {

                    copyMessage.textContent =
                        "";

                },
                2000
            );

        }
    );

}



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeCode() {


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "auto";

}



if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        closeCode
    );

}



if (modal) {

    modal.addEventListener(
        "click",
        function (event) {


            if (
                event.target === modal
            ) {

                closeCode();

            }

        }
    );

}



document.addEventListener(
    "keydown",
    function (event) {


        if (

            event.key === "Escape" &&

            modal &&

            modal.classList.contains(
                "show"
            )

        ) {

            closeCode();

        }

    }
);



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (

                name === "" ||

                email === "" ||

                message === ""

            ) {

                formMessage.textContent =
                    "Please complete all fields.";

                return;

            }



            /*
               IMPORTANT:
               Replace this with your real email
               if you want messages to go directly
               to your email.
            */

            const myEmail =
                "hannahkim@example.com";


            const subject =
                encodeURIComponent(
                    "Portfolio Message from " +
                    name
                );


            const body =
                encodeURIComponent(

                    "Hello Hannah!\n\n" +

                    "Name: " +
                    name +

                    "\nEmail: " +
                    email +

                    "\n\nMessage:\n" +
                    message

                );


            formMessage.textContent =
                "Opening your email application...";


            window.location.href =

                "mailto:" +

                myEmail +

                "?subject=" +

                subject +

                "&body=" +

                body;

        }
    );

}



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {


            link.addEventListener(
                "click",
                function (event) {


                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (

                        targetId === "#" ||

                        targetId === ""

                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {


                        event.preventDefault();


                        target.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });

                    }

                }
            );

        }
    );



/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {


        if (

            window.innerWidth > 850 &&

            navLinks

        ) {

            navLinks.classList.remove(
                "show"
            );

        }

    }
);



/* =========================================================
   PAGE LOADED
========================================================= */

console.log(
    "Hannah Kim Portfolio loaded."
);


console.log(
    "C++ interactive runner ready."
);