const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");

let currentStep = 0;

function updateStepper() {
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    stepContents.forEach((content, index) => {
        if (index === currentStep) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });

    prevBtn.disabled = currentStep === 0;
    
    nextBtn.style.display = currentStep === stepContents.length - 1 ? "none" : "inline-block";
    
    submitBtn.style.display = currentStep === stepContents.length - 1 ? "inline-block" : "none";
}

nextBtn.addEventListener("click", () => {
    if (currentStep < stepContents.length - 1) {
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

submitBtn.addEventListener("click", () => {
    alert("Form submitted successfully!");
    submitBtn.disabled = true;
});

updateStepper();
