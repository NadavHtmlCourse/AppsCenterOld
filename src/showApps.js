// =========== //
// showApps.js //
// =========== //

/*
const populateApps = () => {

}*/

// Insert apps to the div container.
function populateApps(applicationsArr, divId)
{    
    alert('populateApps was Called');
    console.log('populateApps was Called');

    let status = '';

    if (applicationsArr == null)
    {
        status = 'Failure: Applications array is empty.';
    }
    else
    {
        let applicationsStr = applicationsArr.map((currApp) => {
            return `<div class="card p-3 text-left border border-secondary border-dark">
                        <div class="row">
                            <div class="col col-md-3">
                                <img class="app-card rounded" src="${currApp.imageUrl}" alt="Application Image">
                            </div>
                            <div class="col col-md-9">
                                <h3 class="postTitle">${currApp.name}</h3>
                                <p class="appDescriptionText">${currApp.desc}</p>
                                <p class="price">${currApp.price}</p>
                                <p class="companyName">${currApp.companyName}</p>
                            </div>
                        </div>
                    </div>`
        }).join('');

        document.getElementById(divId).innerHTML = ApplicationsOptionsStr;

        status = 'Success: Applications were inserted successfully.';
    }

    console.log(status);
    return status;
}