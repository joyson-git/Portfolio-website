const researchTable = document.querySelector(".main");

const research = [{
        title: "<h1>c++</h1>",
        researchYr: 2020,
        citebox: "popup2",
        citation: {
            vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "absPopup2",
        image: "assets/images/research-page/c++.png"
    },
    {
        title: "<h1>DSA</h1>",
        researchYr: 2020,
        citebox: "popup2",
        citation: {
            vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "absPopup2",
        image: "path/to/image2.jpg"
    },
    {
        title: "Java",
        researchYr: 2020,
        citebox: "popup3",
        citation: {
            vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 3",
        absbox: "absPopup3",
        image: "path/to/image3.jpg"
    },
    {
        title: "MySql",
        researchYr: 2020,
        citebox: "popup4",
        citation: {
            vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 4",
        absbox: "absPopup4",
        image: "path/to/image4.jpg"
    },
];

AOS.init();

const fillData = () => {
    let output = "";
    research.forEach(
        ({
            image,
            title,
            authors = "",
            conferences = "",
            researchYr
        }) => {
            output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg" alt="${title} image"></td>
                <td class="researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes" alt="${title} image">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class="authors"> ${authors} </div> 
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                </td>
            </tr>`;
        }
    );
    researchTable.innerHTML = `<table>${output}</table>`;
};

document.addEventListener("DOMContentLoaded", fillData);