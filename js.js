

const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelector(".portfolio-item").children;
    console.log(portfolioItems)

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector("active").classList.remove("active");
        this.classList.add("active");
    })

}