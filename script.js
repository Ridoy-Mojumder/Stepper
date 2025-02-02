const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submit = document.getElementById("submit");
let currentStep = 0;


function updateStepper() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index <= currentStep);
    });
    stepContents.forEach((content, index) => {
        content.classList.toggle("active", index === currentStep);
    });
    prevBtn.disabled = currentStep === 0;
    // nextBtn.disabled = currentStep === submit.classList.contains("disabled");
}


nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStepper();
    }
});


prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateStepper();
    }
});



submit.addEventListener("click", () => {
    // submit.classList.add("disabled"); 
    nextBtn.disabled = true;
    submit.disabled = true;
});


updateStepper();