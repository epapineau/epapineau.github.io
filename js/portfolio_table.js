// Load data from project.csv
d3.csv("/data/projects.csv", function(error, projects){
    // Log an error if one exists
    if (error) return console.warn(error);

    // Define table
    var table = d3.select("tbody")
        .selectAll("tr")
        .data(projects)
        .enter()
        .append("tr")
        .classed("icon", true)
        .html(function(project){
            var img = `<td class="align-middle"><img src = "${project.Project_img}" alt = "${project.Project_Name} Preview">`;
            var proj = `<td class="align-middle">${project.Project_Name}</td>`;
            var desc = `<td class="align-middle">${project.Project_Description}</td>`

            // Links, if available
            if (project.Hosted === "NA"){
                var symbol = '<i class="fas fa-desktop fa-lg" style="color:lightgrey"></i>';
                var site = `<td class="align-middle"><center>${symbol}</td>`;
            }
            else{
                var symbol = '<i class="fas fa-desktop fa-lg"></i>';
                var site = `<td class="align-middle"><center><a href = "${project.Hosted}" target = "_blank">${symbol}</a><center></td>`;
            }
            if (project.Github_Repository === "NA"){
                var symbol = '<i class="fas fa-file-code fa-lg" style="color:lightgrey"></i>';
                var git = `<td class="align-middle"><center>${symbol}<center></td>`;
            }
            else {
                var symbol = '<i class="fas fa-file-code fa-lg"></i>';
                var git = `<td class="align-middle"><center><a href = "${project.Github_Repository}" target = "_blank">${symbol}</a><center></td>`;
            }
            
            var htmlRow = `${img} ${proj} ${desc} ${site} ${git}`;
            return htmlRow
        });
});