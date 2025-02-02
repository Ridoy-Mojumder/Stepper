const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");

let currentStep = 0;

function updateStepper() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("completed");
            step.classList.remove("active");
        } else if (index === currentStep) {
            step.classList.add("active");
            step.classList.remove("completed");
        } else {
            step.classList.remove("active", "completed");
        }
    });

    stepContents.forEach((content, index) => {
        content.classList.toggle("active", index === currentStep);
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
    steps[currentStep].classList.add("completed");
    alert("Form submitted successfully!");
    submitBtn.disabled = true;
});

updateStepper();
