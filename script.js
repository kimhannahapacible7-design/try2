/* =========================================================
   HANNAH KIM PORTFOLIO
   SCRIPT.JS
========================================================= */


/* =========================================================
   PROJECT CODES
========================================================= */

const projectCodes = {

    bank: {
        title: "Bank Account System",
        terminal: "bank_account.cpp",

        inputs: [
            {
                id: "initialDeposit",
                label: "Initial Deposit",
                type: "number",
                value: "1000"
            },
            {
                id: "depositAmount",
                label: "Deposit Amount",
                type: "number",
                value: "250"
            },
            {
                id: "withdrawAmount",
                label: "Withdraw Amount",
                type: "number",
                value: "100"
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

    acc1->deposit(250.0);
    acc1->withdraw(100.0);

    cout << "Account 1 balance: "
         << acc1->getBalance()
         << endl;

    acc2->deposit(300.0);
    acc2->withdraw(100.0);

    cout << "Account 2 balance: "
         << acc2->getBalance()
         << endl;

    delete acc1;
    delete acc2;

    return 0;
}`
    },


    personal: {
        title: "Personal Information",
        terminal: "personal_information.cpp",

        inputs: [
            {
                id: "firstName",
                label: "First Name",
                type: "text",
                value: ""
            },
            {
                id: "middleName",
                label: "Middle Name",
                type: "text",
                value: ""
            },
            {
                id: "age",
                label: "Age",
                type: "number",
                value: ""
            },
            {
                id: "weight",
                label: "Weight",
                type: "number",
                value: ""
            }
        ],

        code: `#include <iostream>
#include <string>

using namespace std;

int main()
{
    string firstName;
    string middleName;
    int age;
    int weight;

    cout << "Enter your First Name: ";
    cin >> firstName;

    cout << "Enter your Middle name: ";
    cin >> middleName;

    cout << "Age: ";
    cin >> age;

    cout << "Enter your Weight: ";
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


    circle: {
        title: "Circle Class",
        terminal: "circle.cpp",

        inputs: [
            {
                id: "radius1",
                label: "Circle 1 Radius",
                type: "number",
                value: "5"
            },
            {
                id: "radius2",
                label: "Circle 2 Radius",
                type: "number",
                value: "7.5"
            }
        ],

        code: `#include <iostream>

using namespace std;

class Circle {

private:

    float radius;

public:

    Circle(float _radius) {
        radius = _radius;
    }

    void setRadius(int _radius) {
        radius = _radius;
    }

    float getRadius() {
        return radius;
    }

    float getArea() {
        return 3.14159f * radius * radius;
    }

    float getCircumference() {
        return 2 * 3.14159f * radius;
    }
};

int main() {

    Circle circle1(5.0f);
    Circle circle2(7.5f);

    cout << "Circle 1 - Radius: "
         << circle1.getRadius()
         << endl;

    cout << "Circle 1 - Area: "
         << circle1.getArea()
         << endl;

    cout << "Circle 1 - Circumference: "
         << circle1.getCircumference()
         << endl;

    cout << "Circle 2 - Radius: "
         << circle2.getRadius()
         << endl;

    cout << "Circle 2 - Area: "
         << circle2.getArea()
         << endl;

    cout << "Circle 2 - Circumference: "
         << circle2.getCircumference()
         << endl;

    return 0;
}`
    },


    sorting: {
        title: "Selection Sort",
        terminal: "selection_sort.cpp",

        inputs: [
            {
                id: "arraySize",
                label: "Array Size",
                type: "number",
                value: "5"
            },
            {
                id: "arrayElements",
                label: "Array Elements",
                type: "text",
                value: "5 3 8 1 4"
            }
        ],

        code: `#include <iostream>

using namespace std;

int main() {

    int size;
    int arr[50];
    int i, j, temp;

    cout << "Enter array size: ";
    cin >> size;

    if (size <= 0 || size > 50) {

        cout
            << "Invalid array size. "
            << "Size must be between 1 and 50."
            << endl;

        return 1;
    }

    cout << "Enter array elements: ";

    for (i = 0; i < size; i++) {
        cin >> arr[i];
    }

    cout
        << "Sorting array using selection sort..."
        << endl;

    for (i = 0; i < size; i++) {

        for (j = i + 1; j < size; j++) {

            if (arr[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "The sorted array is:" << endl;

    for (i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

    cout << endl;

    return 0;
}`
    },


    grade: {
        title: "Grade Calculator",
        terminal: "grade.cpp",

        inputs: [
            {
                id: "score",
                label: "Score",
                type: "number",
                value: "90"
            }
        ],

        code: `#include <iostream>

using namespace std;

int main()
{
    int score;

    cout << "Enter score: ";
    cin >> score;

    if (score >= 90)
    {
        cout << "Grade: A";
    }
    else if (score >= 80)
    {
        cout << "Grade: B";
    }
    else if (score >= 70)
    {
        cout << "Grade: C";
    }
    else if (score >= 60)
    {
        cout << "Grade: D";
    }
    else
    {
        cout << "Grade: F";
    }

    return 0;
}`
    },


    hello: {
        title: "Hello Name",
        terminal: "hello_name.cpp",

        inputs: [
            {
                id: "name",
                label: "Name",
                type: "text",
                value: ""
            }
        ],

        code: `#include <iostream>
#include <string>

using namespace std;

int main()
{
    string name;

    cout << "Enter your name: ";
    cin >> name;

    cout << "Hello, "
         << name
         << "!";

    return 0;
}`
    },


    reverseNumber: {
        title: "Reverse Number",
        terminal: "reverse_number.cpp",

        inputs: [
            {
                id: "number",
                label: "Number",
                type: "number",
                value: "12345"
            }
        ],

        code: `#include <iostream>

using namespace std;

int main()
{
    int number;
    int reverse = 0;
    int remainder;

    cout << "Enter a number: ";
    cin >> number;

    while (number != 0)
    {
        remainder = number % 10;

        reverse =
            reverse * 10 + remainder;

        number =
            number / 10;
    }

    cout << "Reverse number: "
         << reverse
         << endl;

    return 0;
}`
    },


    square: {
        title: "Square of Numbers",
        terminal: "square_numbers.cpp",

        inputs: [],

        code: `#include <iostream>

using namespace std;

int main()
{
    int numbers[5] =
    {
        1, 2, 3, 4, 5
    };

    int square;

    for (int i = 0; i < 5; i++)
    {
        square =
            numbers[i] * numbers[i];

        cout << square
             << endl;
    }

    return 0;
}`
    },


    totalPrice: {
        title: "Total Price",
        terminal: "total_price.cpp",

        inputs: [],

        code: `#include <iostream>

using namespace std;

int main()
{
    float price = 99.50f;
    float quantity = 3.0f;
    float total;

    total =
        price * quantity;

    cout << "Price: "
         << price
         << endl;

    cout << "Quantity: "
         << quantity
         << endl;

    cout << "Total: "
         << total
         << endl;

    return 0;
}`
    },


    arrayValues: {
        title: "Array Values",
        terminal: "array_values.cpp",

        inputs: [],

        code: `#include <iostream>

using namespace std;

int main()
{
    int numbers[5] =
    {
        10, 20, 30, 40, 50
    };

    cout << "Array values:"
         << endl;

    for (int i = 0; i < 5; i++)
    {
        cout << numbers[i]
             << endl;
    }

    return 0;
}`
    }

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

let currentProject = null;

const modal =
    document.getElementById("codeModal");

const codeTitle =
    document.getElementById("codeTitle");

const codeDisplay =
    document.getElementById("codeDisplay");

const programInputs =
    document.getElementById("programInputs");

const runButton =
    document.getElementById("runButton");

const resetButton =
    document.getElementById("resetButton");

const runOutput =
    document.getElementById("runOutput");

const copyButton =
    document.getElementById("copyButton");

const copyMessage =
    document.getElementById("copyMessage");

const terminalName =
    document.getElementById("terminalName");

const closeModalButton =
    document.getElementById("closeModal");

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/* =========================================================
   GET INPUT VALUE
========================================================= */

function getInputValue(id) {

    const input =
        document.getElementById("input_" + id);

    if (!input) {
        return "";
    }

    return input.value.trim();
}


/* =========================================================
   ESCAPE C++ STRING
========================================================= */

function escapeCppString(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\r?\n/g, "\\n");
}


/* =========================================================
   CREATE INPUT FIELDS
========================================================= */

function createInputFields(inputs) {

    if (!programInputs) {
        return;
    }

    programInputs.innerHTML = "";

    if (
        !Array.isArray(inputs) ||
        inputs.length === 0
    ) {

        const message =
            document.createElement("div");

        message.className =
            "no-input-message";

        message.textContent =
            "This program does not require user input.";

        programInputs.appendChild(message);

        return;
    }

    inputs.forEach(function (input) {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "program-input-row";

        const label =
            document.createElement("label");

        label.setAttribute(
            "for",
            "input_" + input.id
        );

        label.textContent =
            input.label;

        const field =
            document.createElement("input");

        field.id =
            "input_" + input.id;

        field.name =
            "input_" + input.id;

        field.type =
            input.type || "text";

        field.value =
            input.value || "";

        field.placeholder =
            "Enter " + input.label;

        if (input.type === "number") {
            field.step = "any";
        }

        wrapper.appendChild(label);
        wrapper.appendChild(field);

        programInputs.appendChild(wrapper);
    });
}


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

    if (codeTitle) {
        codeTitle.textContent =
            project.title;
    }

    if (codeDisplay) {
        codeDisplay.textContent =
            project.code;
    }

    if (terminalName) {
        terminalName.textContent =
            project.terminal;
    }

    createInputFields(
        project.inputs
    );

    resetProgram();

    if (modal) {

        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }
}


/* =========================================================
   PREPARE RUNTIME CODE
========================================================= */

function prepareRuntimeCode(projectName) {

    const project =
        projectCodes[projectName];

    if (!project) {
        throw new Error(
            "Project not found."
        );
    }

    let code =
        project.code;


    /* =====================================================
       BANK ACCOUNT
    ===================================================== */

    if (projectName === "bank") {

        const initial =
            getInputValue(
                "initialDeposit"
            );

        const deposit =
            getInputValue(
                "depositAmount"
            );

        const withdraw =
            getInputValue(
                "withdrawAmount"
            );

        if (
            initial === "" ||
            deposit === "" ||
            withdraw === ""
        ) {

            throw new Error(
                "Please fill in all fields."
            );
        }

        const initialNumber =
            Number(initial);

        const depositNumber =
            Number(deposit);

        const withdrawNumber =
            Number(withdraw);

        if (
            !Number.isFinite(initialNumber) ||
            !Number.isFinite(depositNumber) ||
            !Number.isFinite(withdrawNumber)
        ) {

            throw new Error(
                "Please enter valid numbers."
            );
        }

        if (
            initialNumber < 0 ||
            depositNumber < 0 ||
            withdrawNumber < 0
        ) {

            throw new Error(
                "Amounts cannot be negative."
            );
        }

        code = code.replace(
            "new BankAccount(1000.0)",
            "new BankAccount(" +
            initialNumber +
            ")"
        );

        code = code.replace(
            "acc1->deposit(250.0);",
            "acc1->deposit(" +
            depositNumber +
            ");"
        );

        code = code.replace(
            "acc1->withdraw(100.0);",
            "acc1->withdraw(" +
            withdrawNumber +
            ");"
        );
    }


    /* =====================================================
       PERSONAL INFORMATION
    ===================================================== */

    else if (projectName === "personal") {

        const firstName =
            getInputValue("firstName");

        const middleName =
            getInputValue("middleName");

        const age =
            getInputValue("age");

        const weight =
            getInputValue("weight");

        if (
            firstName === "" ||
            middleName === "" ||
            age === "" ||
            weight === ""
        ) {

            throw new Error(
                "Please fill in all fields."
            );
        }

        const ageNumber =
            Number(age);

        const weightNumber =
            Number(weight);

        if (
            !Number.isInteger(ageNumber) ||
            !Number.isInteger(weightNumber)
        ) {

            throw new Error(
                "Age and Weight must be whole numbers."
            );
        }

        if (
            ageNumber < 0 ||
            weightNumber < 0
        ) {

            throw new Error(
                "Age and Weight cannot be negative."
            );
        }

        code = `#include <iostream>
#include <string>

using namespace std;

int main()
{
    string firstName =
        "${escapeCppString(firstName)}";

    string middleName =
        "${escapeCppString(middleName)}";

    int age =
        ${ageNumber};

    int weight =
        ${weightNumber};

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


    /* =====================================================
       CIRCLE
    ===================================================== */

    else if (projectName === "circle") {

        const radius1 =
            getInputValue("radius1");

        const radius2 =
            getInputValue("radius2");

        if (
            radius1 === "" ||
            radius2 === ""
        ) {

            throw new Error(
                "Please enter both radius values."
            );
        }

        const r1 =
            Number(radius1);

        const r2 =
            Number(radius2);

        if (
            !Number.isFinite(r1) ||
            !Number.isFinite(r2)
        ) {

            throw new Error(
                "Please enter valid radius values."
            );
        }

        if (
            r1 < 0 ||
            r2 < 0
        ) {

            throw new Error(
                "Radius cannot be negative."
            );
        }

        code = code.replace(
            "Circle circle1(5.0f);",
            "Circle circle1(" +
            r1 +
            "f);"
        );

        code = code.replace(
            "Circle circle2(7.5f);",
            "Circle circle2(" +
            r2 +
            "f);"
        );
    }


    /* =====================================================
       SELECTION SORT
    ===================================================== */

    else if (projectName === "sorting") {

        const sizeText =
            getInputValue("arraySize");

        const elements =
            getInputValue("arrayElements");

        if (sizeText === "") {

            throw new Error(
                "Please enter the array size."
            );
        }

        const size =
            Number(sizeText);

        if (
            !Number.isInteger(size) ||
            size < 1 ||
            size > 50
        ) {

            throw new Error(
                "Array size must be between 1 and 50."
            );
        }

        if (elements === "") {

            throw new Error(
                "Please enter the array elements."
            );
        }

        const values =
            elements
                .split(/\s+/)
                .filter(Boolean);

        if (values.length !== size) {

            throw new Error(
                "Please enter exactly " +
                size +
                " array elements."
            );
        }

        const numbers =
            values.map(Number);

        if (
            numbers.some(function (value) {
                return !Number.isFinite(value);
            })
        ) {

            throw new Error(
                "Array elements must be valid numbers."
            );
        }

        if (
            numbers.some(function (value) {
                return !Number.isInteger(value);
            })
        ) {

            throw new Error(
                "Array elements must be whole numbers."
            );
        }

        code = `#include <iostream>

using namespace std;

int main() {

    int size = ${size};

    int arr[50] =
    {
        ${numbers.join(", ")}
    };

    int i, j, temp;

    cout << "Array size: "
         << size
         << endl;

    cout << "Array elements: ";

    for (i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

    cout << endl;

    cout
        << "Sorting array using selection sort..."
        << endl;

    for (i = 0; i < size; i++) {

        for (j = i + 1; j < size; j++) {

            if (arr[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "The sorted array is:"
         << endl;

    for (i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

    cout << endl;

    return 0;
}`;
    }


    /* =====================================================
       GRADE
    ===================================================== */

    else if (projectName === "grade") {

        const scoreText =
            getInputValue("score");

        if (scoreText === "") {

            throw new Error(
                "Please enter a score."
            );
        }

        const score =
            Number(scoreText);

        if (
            !Number.isInteger(score) ||
            score < 0 ||
            score > 100
        ) {

            throw new Error(
                "Score must be a whole number from 0 to 100."
            );
        }

        code = code.replace(
            "cin >> score;",
            "score = " +
            score +
            ";"
        );
    }


    /* =====================================================
       HELLO NAME
    ===================================================== */

    else if (projectName === "hello") {

        const name =
            getInputValue("name");

        if (name === "") {

            throw new Error(
                "Please enter your name."
            );
        }

        code = `#include <iostream>
#include <string>

using namespace std;

int main()
{
    string name =
        "${escapeCppString(name)}";

    cout << "Hello, "
         << name
         << "!";

    return 0;
}`;
    }


    /* =====================================================
       REVERSE NUMBER
    ===================================================== */

    else if (
        projectName === "reverseNumber"
    ) {

        const numberText =
            getInputValue("number");

        if (numberText === "") {

            throw new Error(
                "Please enter a number."
            );
        }

        const number =
            Number(numberText);

        if (
            !Number.isInteger(number)
        ) {

            throw new Error(
                "Please enter a whole number."
            );
        }

        code = code.replace(
            "cin >> number;",
            "number = " +
            number +
            ";"
        );
    }


    /* =====================================================
       PROGRAMS WITHOUT INPUT
    ===================================================== */

    else if (
        projectName === "square" ||
        projectName === "totalPrice" ||
        projectName === "arrayValues"
    ) {

        code =
            project.code;
    }


    return code;
}


/* =========================================================
   RESET PROGRAM
========================================================= */

function resetProgram() {

    if (!currentProject) {
        return;
    }

    const project =
        projectCodes[currentProject];

    if (
        project &&
        Array.isArray(project.inputs)
    ) {

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

    if (copyMessage) {

        copyMessage.textContent =
            "";
    }
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

                if (runOutput) {

                    runOutput.textContent =
                        "Input Error:\n\n" +
                        error.message;
                }

                return;
            }

            runButton.disabled =
                true;

            if (resetButton) {

                resetButton.disabled =
                    true;
            }

            runButton.textContent =
                "Running...";

            if (runOutput) {

                runOutput.textContent =
                    "Compiling program...\n";
            }

            try {

                const response =
                    await fetch(
                        "https://wandbox.org/api/compile.json",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                code: runtimeCode,
                                compiler: "gcc-head",
                                options: "gnu++17",
                                stdin: ""
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


                if (result.compiler_error) {

                    output +=
                        result.compiler_error;
                }


                if (result.program_error) {

                    if (output !== "") {
                        output += "\n";
                    }

                    output +=
                        result.program_error;
                }


                if (result.program_output) {

                    if (output !== "") {
                        output += "\n";
                    }

                    output +=
                        result.program_output;
                }


                if (result.program_message) {

                    if (
                        !output.includes(
                            result.program_message
                        )
                    ) {

                        if (output !== "") {
                            output += "\n";
                        }

                        output +=
                            result.program_message;
                    }
                }


                if (output.trim() === "") {

                    if (
                        result.status === 0 ||
                        result.status === "0"
                    ) {

                        output =
                            "Program finished successfully.";
                    }
                    else {

                        output =
                            "Program finished without output.";
                    }
                }


                if (runOutput) {

                    runOutput.textContent =
                        output;
                }
            }

            catch (error) {

                console.error(
                    "Run error:",
                    error
                );

                if (runOutput) {

                    runOutput.textContent =
                        "Unable to run program.\n\n" +
                        error.message;
                }
            }

            finally {

                runButton.disabled =
                    false;

                if (resetButton) {

                    resetButton.disabled =
                        false;
                }

                runButton.textContent =
                    "Run Program";
            }
        }
    );
}


/* =========================================================
   RESET BUTTON
========================================================= */

if (resetButton) {

    resetButton.addEventListener(
        "click",
        function () {

            resetProgram();
        }
    );
}


/* =========================================================
   COPY CODE
========================================================= */

if (copyButton) {

    copyButton.addEventListener(
        "click",
        async function () {

            if (!codeDisplay) {
                return;
            }

            const code =
                codeDisplay.textContent || "";

            try {

                if (
                    navigator.clipboard &&
                    typeof navigator.clipboard.writeText ===
                    "function"
                ) {

                    await navigator.clipboard.writeText(
                        code
                    );
                }
                else {

                    throw new Error(
                        "Clipboard API unavailable."
                    );
                }

                if (copyMessage) {

                    copyMessage.textContent =
                        "Code copied successfully!";
                }
            }

            catch (error) {

                const textarea =
                    document.createElement(
                        "textarea"
                    );

                textarea.value =
                    code;

                textarea.style.position =
                    "fixed";

                textarea.style.left =
                    "-9999px";

                textarea.style.top =
                    "0";

                textarea.style.opacity =
                    "0";

                document.body.appendChild(
                    textarea
                );

                textarea.focus();
                textarea.select();

                let copied = false;

                try {

                    copied =
                        document.execCommand(
                            "copy"
                        );
                }

                catch (copyError) {

                    copied = false;
                }

                document.body.removeChild(
                    textarea
                );

                if (copyMessage) {

                    copyMessage.textContent =
                        copied
                            ? "Code copied successfully!"
                            : "Copy the code manually.";
                }
            }

            setTimeout(
                function () {

                    if (copyMessage) {

                        copyMessage.textContent =
                            "";
                    }
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

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

    currentProject =
        null;
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


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("show")
        ) {

            closeCode();
        }
    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

if (
    menuBtn &&
    navLinks
) {

    menuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                navLinks.classList.toggle(
                    "show"
                );

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        }
    );
}


document.querySelectorAll(
    ".nav-link"
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navLinks) {

                    navLinks.classList.remove(
                        "show"
                    );
                }

                if (menuBtn) {

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
        );
    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navItems =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {

    if (!sections.length) {
        return;
    }

    let current = "";

    sections.forEach(
        function (section) {

            const top =
                section.offsetTop - 180;

            if (
                window.scrollY >= top
            ) {

                current =
                    section.getAttribute(
                        "id"
                    ) || "";
            }
        }
    );

    navItems.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );

            if (
                current &&
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );
            }
        }
    );
}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


/* =========================================================
   CLOSE MOBILE MENU ON RESIZE
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

            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }

        updateActiveNavigation();
    }
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;
                }

                let target = null;

                try {

                    target =
                        document.querySelector(
                            targetId
                        );
                }

                catch (error) {

                    return;
                }

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        );
    }
);


/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nameField =
                document.getElementById(
                    "name"
                );

            const emailField =
                document.getElementById(
                    "email"
                );

            const messageField =
                document.getElementById(
                    "message"
                );


            const name =
                nameField
                    ? nameField.value.trim()
                    : "";


            const email =
                emailField
                    ? emailField.value.trim()
                    : "";


            const message =
                messageField
                    ? messageField.value.trim()
                    : "";


            if (
                !name ||
                !email ||
                !message
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please complete all fields.";
                }

                return;
            }


            if (
                emailField &&
                !emailField.checkValidity()
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please enter a valid email address.";
                }

                return;
            }


            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message is ready to send.";
            }
        }
    );
}


/* =========================================================
   INITIALIZE
========================================================= */

function initializePortfolio() {

    if (
        modal &&
        !modal.classList.contains("show")
    ) {

        document.body.style.overflow =
            "";
    }


    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    updateActiveNavigation();


    console.log(
        "Hannah Kim Portfolio is ready."
    );
}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializePortfolio
    );
}

else {

    initializePortfolio();
}
