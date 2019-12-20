// let siteType = document.getElementById("siteType");
// let companyName = document.getElementById("CompanyName");

// function siteType() {
//     if (siteType == "Business") {
//         document.getElementById("companyName").classList.remove("hide");
//     } else {
//         alert("Thankyou");
//     }
// }

function showDiv(divId, element) {
    document.getElementById(divId).style.display = element.value === "business" ? 'block' : 'none';
}